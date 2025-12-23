import { useState } from 'react';
import { FlatList, RefreshControl } from 'react-native';

import { ProductCard } from '@/components/products/ProductCard';
import { useQueryClient } from '@tanstack/react-query';



const ProductList = ({ products, loadNextPage }) => {
  const [isRefreshing, setIsRefreshing] = useState(false);
  const queryClient = useQueryClient();

  const onPullToRefresh = async () => {
    setIsRefreshing(true);
    await new Promise((resolve) => setTimeout(resolve, 200));

    queryClient.invalidateQueries({
      queryKey: ['products', 'infinite'],
    });

    setIsRefreshing(false);
  };

  return (
    <FlatList
      data={products}
      numColumns={2}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <ProductCard product={item} />}
      onEndReached={loadNextPage}
      onEndReachedThreshold={0.8}
      showsVerticalScrollIndicator={false}
      refreshControl={
        <RefreshControl refreshing={isRefreshing} onRefresh={onPullToRefresh} />
      }
    />
  );
};
export default ProductList;
