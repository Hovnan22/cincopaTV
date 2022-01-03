import AsyncStorage from '@react-native-async-storage/async-storage';

class StorageService {
    static async setUsers(user) {
        try {
            let users = await AsyncStorage.getItem('@CTV:user');
            users = users ? JSON.parse(users) : {};

            users[user.uuid] = user;
            await AsyncStorage.setItem('@CTV:user', JSON.stringify(users || {}));
        } catch (e) {
            console.warn(e);
        }
    }

    static async getUsers() {
        try {
            const users = await AsyncStorage.getItem('@CTV:user');
            return JSON.parse(users);
        } catch (e) {
            console.warn(e);
        }
    }

    static async removeUser(uuid) {
        try {
            let users = await AsyncStorage.getItem('@CTV:user');
            users = users ? JSON.parse(users) : {};
            delete users[uuid];
            await AsyncStorage.setItem('@CTV:user', JSON.stringify(users || {}));
        } catch (e) {
            console.warn(e);
        }
    }
}

export default StorageService;
