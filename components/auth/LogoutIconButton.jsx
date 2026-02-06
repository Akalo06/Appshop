import { useAuthStore } from '@/lib/stores/useAuthStore';
import { Pressable, StyleSheet, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Colors from '@/lib/colors';

const LogoutIconButton = () => {
const { logout } = useAuthStore();
const primaryColor = Colors.primary;

return (
<Pressable
onPress={logout}
style={({ pressed }) => [
styles.container,
{
backgroundColor: primaryColor + '15',
transform: [{ scale: pressed ? 0.96 : 1 }],
opacity: pressed ? 0.8 : 1,
},
]}
> <View style={styles.inner}> <Ionicons name="log-out-outline" size={20} color={primaryColor} /> </View> </Pressable>
);
};

export default LogoutIconButton;

const styles = StyleSheet.create({
container: {
marginRight: 12,
borderRadius: 14,
padding: 10,
shadowColor: '#000',
shadowOpacity: 0.08,
shadowRadius: 8,
shadowOffset: { width: 0, height: 4 },
elevation: 3,
},
inner: {
justifyContent: 'center',
alignItems: 'center',
},
});
