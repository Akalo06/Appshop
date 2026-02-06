import { View, StyleSheet } from "react-native";
import Colors from "@/lib/colors";

export function CustomView({
  style,
  shadow = false,
  borderRadius = 0,
  ...otherProps
}) {
  const backgroundColor = Colors.background;

  return (
    <View
      style={[
        { backgroundColor, borderRadius },
        shadow && styles.shadow,
        style,
      ]}
      {...otherProps}
    />
  );
}

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    elevation: 3,
  },
});
