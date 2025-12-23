import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, TouchableOpacity } from 'react-native';



export const FAB = ({ style, iconName, onPress }) => {

  return (
    <TouchableOpacity
      style={[styles.button, style]}
      onPress={onPress}
    >
      <Ionicons name={iconName} size={30} color="white" />
    </TouchableOpacity>
  );
};



const styles = StyleSheet.create({
  button: {
    zIndex: 99,

    position: 'absolute',
    bottom: 30,
    right: 20,

    width: 60,
    height: 60,

    shadowColor: 'black',
    backgroundColor: 'black',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.4,
    shadowRadius: 10,
    elevation: 3,
    borderRadius: 13,

    alignItems: 'center',
    justifyContent: 'center',
  }
});