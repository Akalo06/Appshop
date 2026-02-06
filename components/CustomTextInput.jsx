import { Ionicons } from "@expo/vector-icons";
import { View, StyleSheet, TextInput, Animated } from "react-native";
import Colors from "@/lib/colors";
import { useRef, useState } from "react";

const CustomTextInput = ({ icon, style, ...rest }) => {
  const primaryColor = Colors.primary;
  const textColor = Colors.text;

  const [isActive, setIsActive] = useState(false);
  const inputRef = useRef(null);
  const scaleAnim = useRef(new Animated.Value(1)).current;

  const handleFocus = () => {
    setIsActive(true);
    Animated.spring(scaleAnim, {
      toValue: 1.02,
      useNativeDriver: true,
    }).start();
  };

  const handleBlur = () => {
    setIsActive(false);
    Animated.spring(scaleAnim, { toValue: 1, useNativeDriver: true }).start();
  };

  return (
    <Animated.View
      style={[
        styles.container,
        {
          borderColor: isActive ? primaryColor : "#ccc",
          transform: [{ scale: scaleAnim }],
        },
        style,
      ]}
      onTouchStart={() => inputRef.current?.focus()}
    >
      {icon && (
        <Ionicons
          name={icon}
          size={20}
          color={isActive ? primaryColor : "#999"}
          style={styles.icon}
        />
      )}

      <TextInput
        ref={inputRef}
        placeholderTextColor="#999"
        onFocus={handleFocus}
        onBlur={handleBlur}
        style={[styles.input, { color: textColor }]}
        {...rest}
      />
    </Animated.View>
  );
};

export default CustomTextInput;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 14,
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginBottom: 12,
    backgroundColor: "#fff",

    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    elevation: 2,
  },

  icon: {
    marginRight: 12,
  },

  input: {
    flex: 1,
    fontSize: 16,
  },
});
