import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Colors from '@/lib/colors'


// interface Props {
//   options: string[];
//   selectedOptions: string[];

//   onSelect: (option: string) => void;
// }

const ThemedButtonGroup = ({ options, selectedOptions, onSelect }) => {
  const primaryColor = Colors.primary;

  return (
    <View style={styles.container}>
      {options.map((option) => (
        <TouchableOpacity
          key={option}
          onPress={() => onSelect(option)}
          style={[
            styles.button,
            selectedOptions.includes(option) && {
              backgroundColor: primaryColor,
            },
          ]}
        >
          <Text
            adjustsFontSizeToFit
            numberOfLines={1}
            style={[
              styles.buttonText,
              selectedOptions.includes(option) && styles.selectedButtonText,
            ]}
          >
            {option[0].toUpperCase() + option.slice(1)}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};
export default ThemedButtonGroup;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  button: {
    padding: 10,
    margin: 5,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  buttonText: {
    fontSize: 16,
  },
  selectedButtonText: {
    color: '#fff',
  },
});
