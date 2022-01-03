import React, { useCallback } from 'react';
import {
    Dimensions,
    Keyboard,
    StatusBar,
    StyleSheet,
    TouchableOpacity,
    View,
} from 'react-native';
import { useSelector } from 'react-redux';
import { SafeAreaView } from 'react-native-safe-area-context';

import AppLoader from './loader';

const { width } = Dimensions.get('window');

const Container = ({
    statusBarLightMode,
    children,
}) => {

    const isLoading = useSelector(({ app }) => app?.isLoading);

    const dismissKeyboard = useCallback(() => {
        Keyboard.dismiss();
    }, []);

    return (
        <TouchableOpacity
            onPress={dismissKeyboard}
            activeOpacity={1}
            style={styles.flex}>
            <SafeAreaView style={styles.flex}>
                <View style={styles.content}>
                    {/* <StatusBar
                        barStyle={statusBarLightMode ? 'light-content' : 'dark-content'}
                        translucent
                        backgroundColor="transparent"
                    /> */}
                    {children}
                    {isLoading && <AppLoader size="large" color="#5596D9" />}
                </View>
            </SafeAreaView>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    content: {
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 1,
        position: 'absolute',
    },
    flex: {
        flex: 1
    }
});

export default Container;
