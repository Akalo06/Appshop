import { useState } from 'react';
import {
  Alert,
  KeyboardAvoidingView,
  ScrollView,
  useWindowDimensions,
  View,
} from 'react-native';

import { router, Link } from 'expo-router';

import CustomButton from '@/components/CustomButton';
import { CustomText } from '@/components/CustomText';
import CustomTextInput from '@/components/CustomTextInput';
import Colors from '@/lib/colors';
import { useAuthStore } from '@/lib/stores/useAuthStore';

const LoginScreen = () => {
  const { login } = useAuthStore();
  const { height } = useWindowDimensions();
  const backgroundColor = Colors.background;

  const [isPosting, setIsPosting] = useState(false);
  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const onLogin = async () => {
    const { email, password } = form;

    if (email.length === 0 || password.length === 0) {
      Alert.alert('Error', 'Por favor completa todos los campos');
      return;
    }

    setIsPosting(true);
    const wasSuccessful = await login(email, password);
    setIsPosting(false);

    if (wasSuccessful) {
      router.replace('/');
      return;
    }

    Alert.alert('Error', 'Usuario o contraseña no son correctos');
  };

  return (
    <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }}>
      <ScrollView
        style={{
          flex: 1,
          backgroundColor,
          paddingHorizontal: 30,
        }}
        contentContainerStyle={{ paddingBottom: 40 }}
      >
        {/* Header */}
        <View style={{ paddingTop: height * 0.25, marginBottom: 40 }}>
          <CustomText type="title">Ingresar</CustomText>
          <CustomText type="subtitle" style={{ color: 'grey', marginTop: 5 }}>
            Por favor ingrese para continuar
          </CustomText>
        </View>

        {/* Formulario */}
        <View style={{ marginBottom: 30 }}>
          <CustomTextInput
            placeholder="Correo electrónico"
            keyboardType="email-address"
            autoCapitalize="none"
            icon="mail-outline"
            value={form.email}
            onChangeText={(value) => setForm({ ...form, email: value })}
          />

          <CustomTextInput
            placeholder="Contraseña"
            secureTextEntry
            autoCapitalize="none"
            icon="lock-closed-outline"
            value={form.password}
            onChangeText={(value) => setForm({ ...form, password: value })}
          />
        </View>

        {/* Botón Ingresar */}
        <CustomButton
          icon="arrow-forward-outline"
          onPress={onLogin}
          isLoading={isPosting}
        >
          Ingresar
        </CustomButton>

        {/* Enlace a registro */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 50,
          }}
        >
          <CustomText>¿No tienes cuenta?</CustomText>

          <Link href="/auth/register" style={{ marginHorizontal: 5 }}>
            <CustomText style={{ color: Colors.primary }}>Crear cuenta</CustomText>
          </Link>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;
