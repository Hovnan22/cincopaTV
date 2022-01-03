import React from "react";
import { WebView } from 'react-native-webview';

const Content = ({ navigation }) => {

    return (
        <WebView source={{ uri: 'https://www.cincopa.com/cincopatv/appcontact' }} />
    )
}

export default Content;
