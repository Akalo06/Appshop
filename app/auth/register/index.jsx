import CustomButton from '@/components/CustomButton';
import { CustomText } from '@/components/CustomText';
import CustomTextInput from '@/components/CustomTextInput';
import { authRegister } from '@/lib/actions/auth';
import { Link } from 'expo-router';
import {
  KeyboardAvoidingView,
  ScrollView,
  useWindowDimensions,
  View,
} from 'react-native';
import Colors from '@/lib/colors';
import { useState } from 'react';
import { register } from 'react-native/types_generated/Libraries/Renderer/shims/ReactNativeViewConfigRegistry';

const RegisterScreen = () => {

    const { height } = useWindowDimensions();
    const backgroundColor = Colors.background;
    const primaryColor = Colors.primary;
   const [isPosting, setIsPosting] = useState(false);
    const [form, setForm] = useState({
      fullName: '',
      email: '',
      password: '',
    });
   
    const onRegister = async () => {
      const {fullName, email, password } = form;
  
      if (fullName.length ===0 || email.length === 0 || password.length === 0) {
        Alert.alert('Error', 'Por favor completa todos los campos');
        return;
      }
  
      setIsPosting(true);
      const wasSuccessful = await authRegister(fullName,email, password);
      setIsPosting(false);
  
      if (wasSuccessful) {
        router.replace('/auth/login');
        return;
      }
  
      Alert.alert('Error', 'Usuario o contraseña no son correctos');
    };
  
  

  return (
    <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }}>
      <ScrollView
        style={{
          paddingHorizontal: 40,
          backgroundColor: backgroundColor,
        }}
      >
        <View
          style={{
            paddingTop: height * 0.35,
          }}
        >
          <CustomText type="title">Crear cuenta</CustomText>
          <CustomText style={{ color: 'grey' }}>
            Por favor crea una cuenta para continuar
          </CustomText>
        </View>

        {/* Email y Password */}
        <View style={{ marginTop: 20 }}>
          <CustomTextInput
            placeholder="Nombre completo"
            autoCapitalize="words"
            icon="person-outline"
          />

          <CustomTextInput
            placeholder="Correo electrónico"
            keyboardType="email-address"
            autoCapitalize="none"
            icon="mail-outline"
          />

          <CustomTextInput
            placeholder="Contraseña"
            secureTextEntry
            autoCapitalize="none"
            icon="lock-closed-outline"
          />
        </View>

        {/* Spacer */}
        <View style={{ marginTop: 10 }} />

        {/* Botón */}
        <CustomButton icon="arrow-forward-outline">Crear cuenta</CustomButton>

        {/* Spacer */}
        <View style={{ marginTop: 50 }} />

        {/* Enlace a registro */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <CustomText>¿Ya tienes cuenta?</CustomText>

          <Link href="/auth/login" style={{ color: primaryColor, marginHorizontal: 5 }}>
            Ingresar
          </Link>


        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
export default RegisterScreen;
