import { View } from 'react-native';
import Colors from '@/lib/colors';


export function ThemedView({ style, ...otherProps }) {
  const backgroundColor = Colors.background;

  return <View style={[{ backgroundColor }, style]} {...otherProps} />;
}
