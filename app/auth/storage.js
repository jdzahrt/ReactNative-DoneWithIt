import * as SecureStore from 'expo-secure-store';

const key = 'authToken';

const storeToken = async authToken => {
    try {
        await SecureStore.setItemAsync(key, authToken);
    } catch (error) {
        console.log('Could not store the auth token', error);
    }
}

const getToken = async () => {
    try {
        return await SecureStore.getItemAsync(key);
    } catch (error) {
        console.log('Could not get the auth token', error);
    }
}

const removeToken = async () => {
    try {
        await SecureStore.deleteItemAsync(key);
    } catch (error) {
        console.log('Could not remove the auth token', error);
    }
}

export default {
    storeToken,
    getToken,
    removeToken
}
