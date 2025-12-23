import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';



const CameraIconButton = ({ onPress, iconName }) => {

  return (
    <TouchableOpacity onPress={onPress}>
      <Ionicons name={iconName} size={24} color="#3D64F4" />
    </TouchableOpacity>
  );
};
export default CameraIconButton;
