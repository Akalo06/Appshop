import { View, Text, Pressable, StyleSheet } from 'react-native';
import Colors from '@/lib/colors';

const CustomButtonGroup = ({ options, selectedOptions, onSelect }) => {
const primaryColor = Colors.primary;

return ( <View style={styles.container}>
{options.map((option) => {
const isSelected = selectedOptions.includes(option);
return (
<Pressable
key={option}
onPress={() => onSelect(option)}
style={({ pressed }) => [
styles.button,
isSelected && { backgroundColor: primaryColor },
pressed && { opacity: 0.8, transform: [{ scale: 0.97 }] },
]}
>
<Text
numberOfLines={1}
adjustsFontSizeToFit
style={[
styles.buttonText,
isSelected && styles.selectedButtonText,
]}
>
{option[0].toUpperCase() + option.slice(1)} </Text> </Pressable>
);
})} </View>
);
};

export default CustomButtonGroup;

const styles = StyleSheet.create({
container: {
flexDirection: 'row',
justifyContent: 'center',
alignItems: 'center',
gap: 10,
flexWrap: 'wrap',
paddingHorizontal: 12,
marginVertical: 8,
},

button: {
paddingVertical: 10,
paddingHorizontal: 16,
borderRadius: 14,
backgroundColor: '#F1F1F1',
alignItems: 'center',
justifyContent: 'center',


shadowColor: '#000',
shadowOpacity: 0.08,
shadowRadius: 6,
shadowOffset: { width: 0, height: 3 },
elevation: 2,


},

buttonText: {
fontSize: 15,
fontWeight: '500',
color: '#333',
},

selectedButtonText: {
color: '#fff',
fontWeight: '600',
},
});
