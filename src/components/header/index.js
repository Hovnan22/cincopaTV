import React, { useState, useCallback } from "react";
import { useNavigation } from "@react-navigation/core";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import { PAIR_CODE } from "../../navigation/screens";

import { AppButton } from "../ui";
import Menu from "./menu";

const { width, height } = Dimensions.get('window');



const AppHeader = () => {
    const navigation = useNavigation();

    const [openMenu, setOpenMenu] = useState(false);
    const navigateToPairCode = useCallback(() => {
        navigation.navigate(PAIR_CODE)
    })
    const onOpenMenu = useCallback(() => {
        setOpenMenu(true);
    })
    return (
        <View style={styles.container}>
            <AppButton icon="menu" onPress={onOpenMenu} />
            <Text style={styles.title}>CincopaTV</Text>
            <AppButton icon="plus" onPress={navigateToPairCode} />
            {openMenu && (<Menu setOpenMenu={setOpenMenu} />)}

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
        backgroundColor: 'red',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 1,
    },
    menuItem: {
        width: width * 2 / 3,
        backgroundColor: 'blue',
        height,
        zIndex: 100,
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },
    title: {
        fontSize: 20,
        color: '#fff',
        fontWeight: '800',
    },
    container: {
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center',
        justifyContent: "space-between",
        width,
        paddingHorizontal: 10,
        // backgroundColor: 'red'
    }
});


export default AppHeader;