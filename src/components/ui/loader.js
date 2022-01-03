import React from 'react';
import { Dimensions, Modal, StyleSheet, View, ActivityIndicator } from 'react-native';

import { mainBlue, semiTransparentBlack, White } from '../../styles/colors';


const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    loaderWrapper: {
        width,
        height,
        top: 0,
        left: 0,
        zIndex: 9999999,
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: semiTransparentBlack,
    },
    text: {
        color: White,
        fontSize: 18,
        lineHeight: 22,
        fontWeight: '600',
    },
});

const AppLoader = ({ isLoading, wrapperStyle }) => (
    <Modal transparent visible={isLoading}>
        <View style={[styles.loaderWrapper, wrapperStyle]}>
            <ActivityIndicator style={{ width: 15, }} size="large" color={mainBlue} />
        </View>
    </Modal>
);

AppLoader.defaultProps = {
    size: 50,
    color: '#88245F',
};

export default AppLoader;
