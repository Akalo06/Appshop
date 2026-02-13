import { updateCreateProduct } from '@/lib/actions/create-update-product';
import { getProductById } from '@/lib/data/get-product-by-id';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useRef } from 'react';
import { Alert } from 'react-native';
import api from '@/lib/api';

export const useProduct = (productId) => {
  const queryClient = useQueryClient();
  const productIdRef = useRef(productId);

  // =====================
  // GET PRODUCT
  // =====================
  const productQuery = useQuery({
    queryKey: ['products', productId],
    queryFn: () => getProductById(productId),
    staleTime: 1000,
  });

  // =====================
  // CREATE / UPDATE
  // =====================
  const productMutation = useMutation({
    mutationFn: async (product) =>
      updateCreateProduct({
        ...product,
        id: productIdRef.current,
      }),

    onSuccess(product) {
      productIdRef.current = product.id;

      queryClient.invalidateQueries({
        queryKey: ['products', 'infinite'],
      });

      queryClient.invalidateQueries({
        queryKey: ['products', product.id],
      });

      Alert.alert('Producto guardado', `${product.title} se guardó correctamente`);
    },
  });

  // =====================
  // DELETE PRODUCT
  // =====================
  
  const deleteMutation = useMutation({
    mutationFn: async (product) => {
      const id = productIdRef.current;

      // ENDPOINT 
    try{
    
    const{data} = await api.delete(`/api/products/${id}`);
      
    

    
      queryClient.invalidateQueries({
        queryKey: ['products', 'infinite'],
      });

      Alert.alert('Producto eliminado', 'El producto fue eliminado');
      return data;
    }catch(error) {
      console.log('DELETE ERROR:', error?.response?.data || error.message);
      Alert.alert('Error', 'No se pudo eliminar el producto');



  }  
    }

  });

  return {
    productQuery,
    productMutation,
    deleteMutation,
  };
};
