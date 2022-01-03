import React, { useCallback, useRef, useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/core";
import {
    View,
    Platform,
    StyleSheet,
    Dimensions,
    NativeModules,
    LayoutAnimation,
    TouchableOpacity,
} from "react-native";
import { CHANNELS, CONTENT } from "../../navigation/screens";
import { blue, darkBlue, transparent, borderBlue } from "../../styles/colors";
import { AppButton } from "../ui";

const { width, height } = Dimensions.get('window');

const { UIManager } = NativeModules;

if (
    Platform.OS === "android" &&
    UIManager.setLayoutAnimationEnabledExperimental
) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
}


const Menu = ({ setOpenMenu }) => {
    const navigation = useNavigation();

    const [animatedLeft, setAnimatedLeft] = useState(false);


    useEffect(() => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        setAnimatedLeft(true);
    }, [])

    const closeMenu = useCallback(() => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut, () => {
            setOpenMenu(false);
        });
        setAnimatedLeft(false);
    })
    const navigateTo = (screen) => {
        navigation.navigate(screen);
        closeMenu()
    }

    return (
        <View style={styles.menu}>
            <TouchableOpacity activeOpacity={1}
                style={styles.menuLayer} onPress={closeMenu}>
            </TouchableOpacity>
            <View style={[styles.menuItem, { left: animatedLeft ? 0 : -width * 2 / 3 }]} >
                <AppButton style={[styles.button, styles.header]} icon="close" onPress={closeMenu} />
                <AppButton style={styles.button} textWhite title="My Channels" onPress={() => navigateTo(CHANNELS)} />
                <AppButton style={styles.button} textWhite title="Contact" onPress={() => navigateTo(CONTENT)} />
            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    menu: {
        position: "absolute",
        width,
        height,
        top: 0,
        left: 0,
    },
    menuLayer: {
        position: "absolute",
        width,
        height,
        backgroundColor: transparent,
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 1,
    },
    menuItem: {
        width: width * 2 / 3,
        backgroundColor: blue,
        height,
        zIndex: 100,
        position: "absolute",
        top: 0,
        left: -width * 2 / 3,
        right: 0,
        bottom: 0,
    },

    header: {
        backgroundColor: darkBlue,
        alignItems: "flex-end",

    },
    button: {
        borderBottomColor: borderBlue,
        borderBottomWidth: 1,
        height: 50,
        width: width * 2 / 3,
        justifyContent: "center",
        alignItems: "flex-start",
        paddingHorizontal: 10,
    },

});


export default Menu;