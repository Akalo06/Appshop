import { View, Image, FlatList, StyleSheet } from "react-native";

const API_HOST = process.env.EXPO_PUBLIC_API_HOST;
const IMAGES_PATH = process.env.EXPO_PUBLIC_IMAGES_PATH;

const ProductImages = ({ images }) => {
  if (images.length === 0) {
    return (
      <View style={styles.emptyContainer}>
        <Image
          source={require("@/assets/images/no-product-image.png")}
          style={styles.emptyImage}
          resizeMode="contain"
        />
      </View>
    );
  }

  return (
    <FlatList
      data={images}
      keyExtractor={(item) => item}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.list}
      renderItem={({ item }) => {
        const uri = item.startsWith("file://")
          ? item
          : API_HOST + IMAGES_PATH + item;

        return (
          <View style={styles.card}>
            <Image source={{ uri }} style={styles.image} />
          </View>
        );
      }}
    />
  );
};

export default ProductImages;

const styles = StyleSheet.create({
  emptyContainer: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 30,
  },

  emptyImage: {
    width: 260,
    height: 260,
    opacity: 0.7,
  },

  list: {
    paddingHorizontal: 16,
    gap: 12,
  },

  card: {
    borderRadius: 20,
    overflow: "hidden",
    backgroundColor: "#F4F4F4",

    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
    elevation: 3,
  },

  image: {
    width: 280,
    height: 280,
  },
});
