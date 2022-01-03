import axios from 'axios';
import { Platform } from "react-native";

import { APP_URL } from '../constants/url';

class CincopaServer {
    static pairChannel = (code) => axios.post(`${APP_URL}`, {
        pair_code: code,
        platform: Platform.OS.toLowerCase(),
    });
    static loadChannel = (uuid) => axios.get(`${APP_URL}/${uuid}/channels`);
}

export default CincopaServer;
