import api from "@/lib/api";

/**
 * Extrae el token y el usuario del response
 */
const returnUserToken = (data) => {
  const { token, ...user } = data;

  return {
    user,
    token,
  };
};

/**
 * Login de usuario
 */
export const authLogin = async (email, password) => {
  email = email.toLowerCase();

  try {
    const { data } = await api.post('/auth/login', {
      email,
      password,
    });

    return returnUserToken(data);
  } catch (error) {
    console.log('[Login Error]', error.message);
    return null;
  }
};

/**
 * Registro de usuario
 */
export const authRegister = async (fullName, email, password) => {
  email = email.toLowerCase();

  try {
    const { data } = await api.post('/auth/register', {
      fullName,
      email,
      password,
    });

    return returnUserToken(data);
  } catch (error) {
    console.log('[Register Error]', error.message);
    return null;
  }
};

/**
 * Verifica el estado del usuario (token válido)
 */
export const authCheckStatus = async () => {
  try {
    const { data } = await api.get('/auth/check-status');
    return returnUserToken(data);
  } catch (error) {
    console.log('[Check Status Error]', error.message);
    return null;
  }
};
