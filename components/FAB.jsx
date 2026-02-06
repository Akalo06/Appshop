import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, Pressable, Animated } from 'react-native';
import Colors from '@/lib/colors';
import { useRef } from 'react';

export const FAB = ({ style, iconName, onPress }) => {
const scaleAnim = useRef(new Animated.Value(1)).current;

const handlePressIn = () => {
Animated.spring(scaleAnim, { toValue: 0.9, useNativeDriver: true }).start();
};

const handlePressOut = () => {
Animated.spring(scaleAnim, { toValue: 1, useNativeDriver: true }).start();
};

return ( <Pressable
   onPress={onPress}
   onPressIn={handlePressIn}
   onPressOut={handlePressOut}
   style={style}
 >
<Animated.View style={[styles.button, { transform: [{ scale: scaleAnim }] }]}> <Ionicons name={iconName} size={28} color="white" />
</Animated.View> </Pressable>
);
};

const styles = StyleSheet.create({
button: {
position: 'absolute',
bottom: 30,
right: 20,
width: 60,
height: 60,
borderRadius: 30,
backgroundColor: Colors.primary,


alignItems: 'center',
justifyContent: 'center',

shadowColor: '#000',
shadowOpacity: 0.15,
shadowRadius: 10,
shadowOffset: { width: 0, height: 6 },
elevation: 5,


},
});
