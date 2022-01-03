import React from "react";
import { View, StyleSheet, Text, Dimensions } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { useSelector } from "react-redux";
import { ChannelItem, ChannelsHeader } from "../../components/channel";
import { AppButton } from "../../components/ui";
import { Black, White, TextGray } from "../../styles/colors";

const { width, height } = Dimensions.get('window')

const ChannelPage = ({ navigation }) => {
    const { channel } = useSelector(({ app }) => app);

    const closeMenu = () => {
        navigation.canGoBack() && navigation.goBack();
    }

    return (
        <View style={styles.content}>

            <FlatList
                data={channel.galleries}
                keyExtractor={(item) => item.gallery_fid}
                renderItem={({ item }) => (<ChannelItem channel={item} />)}
                ListHeaderComponent={ChannelsHeader}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    content: {
        paddingTop: 10,
        backgroundColor: Black,
        width,
        height: height
    },
    contentTitle: {
        fontSize: 16,
        paddingLeft: 10,
        marginBottom: 10,
        marginTop: 10,
        color: White,
        fontWeight: '700',
        fontFamily: 'Montserrat-Regular',

    },
    channels: {
        padding: 10,
    },
    closeButton: {
        width: 25,
        height: 25,
        position: "absolute",
        right: 20,
        top: 30
    },
    header: {
        fontSize: 16,
        paddingLeft: 10,
        marginBottom: 10,
        color: White,
        fontWeight: '600',
        fontFamily: 'Montserrat-Regular',
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
        fontWeight: '700'

    }
})


export default ChannelPage;
