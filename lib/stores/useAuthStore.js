import { create } from 'zustand';
import { authCheckStatus, authLogin } from '@/lib/actions/auth';
import { SecureStorageAdapter } from '@/lib/secure-storage-adapter';
import { Platform } from 'react-native';



export const useAuthStore = create((set, get) => ({
  // Properties
  status: 'checking', //'authenticated' | 'unauthenticated' | 'checking';
  token: undefined,
  user: undefined,

  // Actions
  changeStatus: async (token, user) => {
    if (!token || !user) {
      set({ status: 'unauthenticated', token: undefined, user: undefined });
      if (Platform.OS === 'web') {
        localStorage.removeItem('token');
      } else {
        await SecureStorageAdapter.deleteItem('token');
      }

      return false;
    }

    set({
      status: 'authenticated',
      token: token,
      user: user,
    });

    if (Platform.OS === 'web') {
      localStorage.setItem('token', token);
    } else {
      await SecureStorageAdapter.setItem('token', token);
    }

    return true;
  },

  login: async (email, password) => {
    const resp = await authLogin(email, password);
    return get().changeStatus(resp?.token, resp?.user);
  },

  checkStatus: async () => {
    const resp = await authCheckStatus();
    get().changeStatus(resp?.token, resp?.user);
  },

  logout: async () => {
    if (Platform.OS === 'web') {
      localStorage.removeItem('token');
    } else {
      await SecureStorageAdapter.deleteItem('token');
    }

    set({ status: 'unauthenticated', token: undefined, user: undefined });
  },
}));
