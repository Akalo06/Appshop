import { useState } from 'react';
import { KeyboardAvoidingView, ScrollView, useWindowDimensions, View, Alert } from 'react-native';
import { Link, router } from 'expo-router';

import CustomButton from '@/components/CustomButton';
import { CustomText } from '@/components/CustomText';
import CustomTextInput from '@/components/CustomTextInput';
import Colors from '@/lib/colors';
import { authRegister } from '@/lib/auth'; // tu función de registro

const RegisterScreen = () => {
  const { height } = useWindowDimensions();
  const backgroundColor = Colors.background;
  const primaryColor = Colors.primary;

  const [form, setForm] = useState({
    fullName: '',
    email: '',
    password: '',
  });
  const [isPosting, setIsPosting] = useState(false);

  const onRegister = async () => {
    const { fullName, email, password } = form;

    if (!fullName || !email || !password) {
      Alert.alert('Error', 'Por favor completa todos los campos');
      return;
    }

    setIsPosting(true);
    const result = await authRegister(fullName, email, password);
    setIsPosting(false);

    if (result) {
      Alert.alert('Éxito', 'Usuario registrado correctamente');
      router.replace('/auth/login');
      return;
    }

    Alert.alert('Error', 'No se pudo registrar el usuario');
  };

  return (
    <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }}>
      <ScrollView
        style={{ paddingHorizontal: 40, backgroundColor }}
        contentContainerStyle={{ paddingBottom: 40 }}
      >
        {/* Header */}
        <View style={{ paddingTop: height * 0.35 }}>
          <CustomText type="title">Crear cuenta</CustomText>
          <CustomText style={{ color: 'grey', marginTop: 5 }}>
            Por favor crea una cuenta para continuar
          </CustomText>
        </View>

        {/* Formulario */}
        <View style={{ marginTop: 20 }}>
          <CustomTextInput
            placeholder="Nombre completo"
            autoCapitalize="words"
            icon="person-outline"
            value={form.fullName}
            onChangeText={(value) => setForm({ ...form, fullName: value })}
          />

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

        {/* Botón */}
        <View style={{ marginTop: 20 }}>
          <CustomButton
            icon="arrow-forward-outline"
            onPress={onRegister}
            isLoading={isPosting}
          >
            Crear cuenta
          </CustomButton>
        </View>

        {/* Enlace a login */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 50,
          }}
        >
          <CustomText>¿Ya tienes cuenta?</CustomText>
          <Link href="/auth/login" style={{ marginHorizontal: 5 }}>
            <CustomText style={{ color: primaryColor }}>Ingresar</CustomText>
          </Link>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default RegisterScreen;
