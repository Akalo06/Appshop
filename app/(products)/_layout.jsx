import { useEffect } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { Redirect, Stack } from 'expo-router';

import { useAuthStore } from '@/lib/stores/useAuthStore';
import LogoutIconButton from '@/components/auth/LogoutIconButton';
import Colors from '@/lib/colors';

const CheckAuthenticationLayout = () => {
  const { status, checkStatus } = useAuthStore();
  const backgroundColor = Colors.background;

  useEffect(() => {
    checkStatus();
  }, []);

  if (status === 'checking') {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: 5,
        }}
      >
        <ActivityIndicator />
      </View>
    );
  }

  if (status === 'unauthenticated') {
    // Guardar la ruta del usuario
    return <Redirect href="/auth/login" />;
  }

  return (
    <Stack
      screenOptions={{
        headerShadowVisible: false,
        headerStyle: {
          backgroundColor: backgroundColor,
        },
        contentStyle: {
          backgroundColor: backgroundColor,
        },
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          title: 'Productos',
          headerLeft: () => <LogoutIconButton />,
        }}
      />

      <Stack.Screen
        name="product/[id]"
        options={{
          title: 'Producto',
        }}
      />
    </Stack>
  );
};
export default CheckAuthenticationLayout;
