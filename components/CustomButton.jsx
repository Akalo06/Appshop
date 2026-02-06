import { Ionicons } from '@expo/vector-icons';
import { Text, Pressable, StyleSheet, ActivityIndicator, View } from 'react-native';
import Colors from '@/lib/colors';

const CustomButton = ({ children, icon, isLoading, style, ...rest }) => {
  const primaryColor = Colors.primary;

  return (
    <Pressable
      disabled={isLoading}
      style={({ pressed }) => [
        styles.button,
        {
          backgroundColor: primaryColor,
          opacity: pressed || isLoading ? 0.85 : 1,
          transform: [{ scale: pressed ? 0.98 : 1 }],
        },
        style,
      ]}
      {...rest}
    >
      {isLoading ? (
        <ActivityIndicator color="white" />
      ) : (
        <View style={styles.content}>
          <Text style={styles.text}>{children ?? ''}</Text>
          {icon && <Ionicons name={icon} size={20} color="white" style={styles.icon} />}
        </View>
      )}
    </Pressable>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  button: {
    height: 52,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',

    shadowColor: '#000',
    shadowOpacity: 0.12,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 6 },
    elevation: 3,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  text: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  icon: {
    marginLeft: 4,
  },
});
