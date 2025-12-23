import { useAuthStore } from '@/lib/stores/useAuthStore';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';




const LogoutIconButton = () => {
  const { logout } = useAuthStore();

  return (
    <TouchableOpacity style={{ marginRight: 8 }} onPress={logout}>
      <Ionicons name="log-out-outline" size={24} color="#3D64F4" />
      {/* <Ionicons name="log-out" size={24} color="#000000" /> */}
    </TouchableOpacity>
  );
};
export default LogoutIconButton;
