import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, StyleSheet, Text, Dimensions } from "react-native";
import { useSelector } from "react-redux";
import { AppButton } from "../../components/ui";
import { Black, White, TextGray } from "../../styles/colors";

const { width, height } = Dimensions.get('window')

const ChannelsHeader = () => {
    const navigation = useNavigation();

    const { channel } = useSelector(({ app }) => app);

    const closeMenu = () => {
        navigation.canGoBack() && navigation.goBack();
    }

    return (

        <View>
            <AppButton icon='close' style={[styles.closeButton]} onPress={closeMenu} />
            <Text style={styles.contentTitle}>{channel.user.vendor_name}</Text>
            <View style={styles.channelList}>
                <View style={styles.channelInfo}>
                    <View>
                        <Text style={styles.channelName}>{channel.user.name}</Text>
                    </View>
                    <View>
                        <Text style={styles.channelDescription}>{channel.user.vendor_description}</Text>
                    </View>
                </View>
                <View style={styles.galleries}>
                    <Text style={styles.galleriesTitle}>Assets</Text>

                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    contentTitle: {
        fontSize: 16,
        paddingLeft: 10,
        marginBottom: 10,
        marginTop: 10,
        color: White,
        fontWeight: '700',
        fontFamily: 'Montserrat-Regular',

    },
    closeButton: {
        width: 25,
        height: 25,
        position: "absolute",
        right: 20,
        top: 30
    },
    channelList: {
        padding: 15,
        flex: 1
    },
    channelInfo: {
        paddingBottom: 25
    },
    channelName: {
        fontSize: 18,
        color: White,
        fontWeight: '700',
        paddingBottom: 10,
        fontFamily: 'Montserrat-Regular',

    },
    channelDescription: {
        color: TextGray,
        fontFamily: 'Montserrat-Regular',
        fontSize: 12
    },
    galleries: {
        paddingTop: 25,
    },
    galleriesTitle: {
        fontSize: 18,
        fontFamily: 'Montserrat-Regular',
        fontWeight: '900',
        color: White,

    }
})


export default ChannelsHeader;
