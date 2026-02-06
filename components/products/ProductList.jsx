import { useState } from "react";
import { FlatList, RefreshControl, View, StyleSheet } from "react-native";

import { ProductCard } from "@/components/products/ProductCard";
import { useQueryClient } from "@tanstack/react-query";

const ProductList = ({ products, loadNextPage }) => {
  const [isRefreshing, setIsRefreshing] = useState(false);
  const queryClient = useQueryClient();

  const onPullToRefresh = async () => {
    setIsRefreshing(true);
    await new Promise((resolve) => setTimeout(resolve, 300));

    queryClient.invalidateQueries({
      queryKey: ["products", "infinite"],
    });

    setIsRefreshing(false);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        numColumns={2}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ProductCard product={item} />}
        onEndReached={loadNextPage}
        onEndReachedThreshold={0.6}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
        columnWrapperStyle={styles.row}
        refreshControl={
          <RefreshControl
            refreshing={isRefreshing}
            onRefresh={onPullToRefresh}
            tintColor="#999"
          />
        }
      />
    </View>
  );
};

export default ProductList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F6F7FB",
  },

  content: {
    paddingTop: 12,
    paddingBottom: 40,
  },

  row: {
    justifyContent: "space-between",
    paddingHorizontal: 12,
  },
});
