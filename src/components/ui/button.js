import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { White } from "../../styles/colors";

import AppIcon from "./icons";


const Button = ({ title, onPress, icon, style, textWhite }) => {

    return (
        <TouchableOpacity
            style={[styles.button, style]}
            onPress={onPress}
        >

            {title && <Text style={textWhite && styles.whiteText}>{title}</Text>}
            {icon && <AppIcon icon={icon} width="24" height="24" />}
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({

    button: {
        alignItems: "center",
        width: 'auto',
    },
    countContainer: {
        alignItems: "center",
        padding: 10
    },
    whiteText: {
        color: White,
    },
});

export default Button;