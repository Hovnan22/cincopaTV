import { AppStorage } from '.';
import { Store } from '../config';
import { setUsers } from '../actions/app';



class AppService {
    static async init() {
        const users = await AppStorage.getUsers();
        if (users) {
            Store.dispatch(setUsers(users));
        }
    }
}

export default AppService;
