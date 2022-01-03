import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Text, StyleSheet, TouchableOpacity, View } from "react-native";
import FastImage from 'react-native-fast-image';
import { GALLERY } from "../../navigation/screens";

import { DarkGray, TextGray, White } from '../../styles/colors';



const ChannelItem = ({ channel }) => {
    const navigation = useNavigation();

    const navigateToGallery = () => {
        navigation.navigate(GALLERY, {
            fid: channel.gallery_fid
        });
    }
    return (
        <TouchableOpacity activeOpacity={1} style={styles.container} onPress={navigateToGallery} >
            <FastImage
                style={{ width: '100%', height: 220 }}
                source={{
                    uri: 'https://www.cincopa.com/media-platform/api/thumb.aspx?size=large&fid=' + channel.gallery_fid,
                    priority: FastImage.priority.normal,
                }}
                resizeMode={FastImage.resizeMode.cover}
            />
            <View style={styles.channelInfo}>
                <Text numberOfLines={1} style={styles.name}>{channel.name}</Text>
                <Text numberOfLines={2} style={styles.description}>{channel.description}</Text>
            </View>

        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        margin: 7,
        padding: 10,
        borderColor: DarkGray,
        borderWidth: 1,
        borderRadius: 5,
        backgroundColor: DarkGray,
        flex: 1,
        flexDirection: 'column',
    },
    channelInfo: {
        paddingVertical: 5,
        paddingRight: 5
    },
    name: {
        fontSize: 16,
        fontFamily: 'Montserrat-Regular',
        color: White,
        fontWeight: '700',
    },
    description: {
        lineHeight: 16,
        fontSize: 14,
        overflow: "hidden",
        color: TextGray
    }

})

export default ChannelItem;
