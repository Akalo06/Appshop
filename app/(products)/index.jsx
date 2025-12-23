import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { useProducts } from '@/lib/hooks/useProducts';
import { FAB } from '@/components/FAB';
import { router } from 'expo-router';
import ProductList from '@/components/products/ProductList';


const HomeScreen = () => {
  const { productsQuery, loadNextPage } = useProducts();

  if (productsQuery.isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size={30} />
      </View>
    );
  }

  return (
    <View style={{ paddingHorizontal: 10, ...StyleSheet.absoluteFillObject }}>
      <ProductList
        products={productsQuery.data?.pages.flatMap((page) => page) ?? []}
        loadNextPage={loadNextPage}
      />

      <FAB
        iconName="add-outline"
        onPress={() => router.push('/(products)/product/new')}
      />
    </View>
  );
};
export default HomeScreen;
