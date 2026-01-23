import * as SecureStore from 'expo-secure-store';
import { Alert } from 'react-native';



export class SecureStorageAdapter {
  static async setItem(key, value) {
    try {
      await SecureStore.setItemAsync(key, value);

    } catch (error) {
      Alert.alert('Error', 'Failed to save data');
    }
  }

  static async getItem(key) {
    try {
      return await SecureStore.getItemAsync(key);
    } catch (error) {
      Alert.alert('Error', 'Failed to get data');
      return null;
    }
  }

  static async deleteItem(key) {
    try {

      await SecureStore.deleteItemAsync(key);

    } catch (error) {
      console.log(error);
      Alert.alert('Error', 'Failed to delete data');
    }
  }
}
