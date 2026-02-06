import { Text, StyleSheet } from 'react-native';
import Colors from '@/lib/colors';

export function CustomText({
style,
type = 'default', // 'default' | 'title' | 'defaultSemiBold' | 'subtitle' | 'link';
...rest
}) {
const color = Colors.text;

return (
<Text
style={[
{ color },
type === 'default' && styles.default,
type === 'title' && styles.title,
type === 'defaultSemiBold' && styles.defaultSemiBold,
type === 'subtitle' && styles.subtitle,
type === 'link' && styles.link,
style,
]}
{...rest}
/>
);
}

const styles = StyleSheet.create({
default: {
fontSize: 16,
lineHeight: 24,
fontWeight: '400',
},
defaultSemiBold: {
fontSize: 16,
lineHeight: 24,
fontWeight: '600',
},
title: {
fontSize: 28,
fontWeight: '700',
lineHeight: 36,
letterSpacing: 0.3,
},
subtitle: {
fontSize: 20,
fontWeight: '600',
lineHeight: 28,
letterSpacing: 0.2,
},
link: {
fontSize: 16,
lineHeight: 22,
color: '#0A7EA4',
fontWeight: '500',
textDecorationLine: 'underline',
},
});

