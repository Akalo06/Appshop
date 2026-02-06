import { router } from "expo-router";
import { Pressable, Image, StyleSheet, View } from "react-native";

import { CustomText } from "@/components/CustomText";
import { CustomView } from "@/components/CustomView";

const API_HOST = process.env.EXPO_PUBLIC_API_HOST;
const IMAGES_PATH = process.env.EXPO_PUBLIC_IMAGES_PATH;

export const ProductCard = ({ product }) => {
  const imageUrl =
    product.images.length === 0
      ? require("@/assets/images/no-product-image.png")
      : { uri: API_HOST + IMAGES_PATH + product.images[0] };

  return (
    <CustomView style={styles.card}>
      <Pressable
        onPress={() => router.push(`/product/${product.id}`)}
        style={({ pressed }) => [
          styles.pressable,
          {
            transform: [{ scale: pressed ? 0.97 : 1 }],
            opacity: pressed ? 0.9 : 1,
          },
        ]}
      >
        {" "}
        <View style={styles.imageContainer}>
          {" "}
          <Image
            source={imageUrl}
            style={styles.image}
            resizeMode="cover"
          />{" "}
        </View>
        <View style={styles.info}>
          <CustomText numberOfLines={2} style={styles.title} darkColor="black">
            {product.title}
          </CustomText>
        </View>
      </Pressable>
    </CustomView>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    margin: 8,
    borderRadius: 16,
    backgroundColor: "#FFFFFF",
    overflow: "hidden",

    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 6 },
    elevation: 4,
  },

  pressable: {
    flex: 1,
  },

  imageContainer: {
    width: "100%",
    height: 180,
    backgroundColor: "#F2F2F2",
    resizeMode: "contain",
  },

  image: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },

  info: {
    padding: 12,
    gap: 4,
  },

  title: {
    fontSize: 15,
    fontWeight: "600",
    textAlign: "center",
  },
});
