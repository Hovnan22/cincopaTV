import React from "react";
import { StyleSheet, TextInput, View } from "react-native";

const Input = ({ value, onChange, placeholder, secureTextEntry }) => {
    return (
        <View>
            <TextInput
                style={styles.input}
                onChangeText={onChange}
                value={value}
                placeholder={placeholder}
                secureTextEntry={secureTextEntry}
                placeholderTextColor="#5f5f5f"
            />
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        color: "#000",
        borderRadius: 15
    },
});


export default Input;