import { Ionicons } from "@expo/vector-icons";
import { Pressable, StyleSheet, View } from "react-native";

const CameraIconButton = ({ onPress, iconName }) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.button,
        {
          transform: [{ scale: pressed ? 0.92 : 1 }],
          opacity: pressed ? 0.8 : 1,
        },
      ]}
    >
      
      <View style={styles.inner}>
        
        <Ionicons name={iconName} size={20} color="#3D64F4" />
      </View>
    </Pressable>
  );
};

export default CameraIconButton;

const styles = StyleSheet.create({
  button: {
    width: 42,
    height: 42,
    borderRadius: 14,
    backgroundColor: "#3D64F415",
    justifyContent: "center",
    alignItems: "center",

    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 3,
  },

  inner: {
    justifyContent: "center",
    alignItems: "center",
  },
});
