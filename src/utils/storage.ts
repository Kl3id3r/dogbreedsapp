// @Vendors
import AsyncStorage from '@react-native-async-storage/async-storage';

/**
 * Guardar data en almacenamiento local
 * @fuction setItem
 * @param key: {string}
 * @param params: {params}
 * @returns boolean
 */
export const setItem = async (key: string, params: string) => {
    const response = await AsyncStorage.setItem(key, params);
    return response;
}