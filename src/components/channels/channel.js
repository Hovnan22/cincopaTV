import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";

import { Black, transparentBlack, White } from '../../styles/colors';
import { AppIcon } from "../ui";



const Channel = ({ channel, deleteChannel, openChannel }) => (
    <TouchableOpacity activeOpacity={1} style={styles.container} onPress={() => openChannel()} >
        <Text style={styles.channelText}>{channel.vendor_name}-{channel.name}</Text>
        <TouchableOpacity onPress={() => deleteChannel(channel.uuid)} activeOpacity={1} style={styles.removeButton}>
            <AppIcon icon='delete' width="24" height="24" />
        </TouchableOpacity>
    </TouchableOpacity>
)

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        paddingVertical: 12,
        marginTop: 5,
        borderColor: transparentBlack,
        borderWidth: 1,
        borderRadius: 5,
        backgroundColor: White,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    channelText: {
        fontFamily: 'Montserrat-Regular',
        color: Black,
        fontSize: 15,
    },
    removeButton: {
        padding: 10
    }
})

export default Channel;
