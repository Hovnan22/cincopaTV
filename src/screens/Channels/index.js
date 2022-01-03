import React, { useEffect } from "react";
import { View, StyleSheet, Text } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { useDispatch, useSelector } from 'react-redux';

import { removeUsers, setChannel, setIsLoading } from "../../actions/app";
import { Channel } from "../../components/channels";
import { AppContainer } from "../../components/ui";
import { CHANNEL_PAGE, PAIR_CODE } from "../../navigation/screens";
import StorageService from "../../services/storage";
import { Black } from "../../styles/colors";

const Channels = ({ navigation }) => {
    const dispatch = useDispatch();
    const { channels, channel, isLoading } = useSelector(({ app }) => app);

    const channelDelete = async (id) => {
        let newChannels = channels;
        delete newChannels[id];
        StorageService.removeUser(id);
        dispatch(removeUsers(newChannels));
        if (!Object.keys(newChannels).length) {
            navigation.navigate(PAIR_CODE);
        }
    }

    const channelOpen = async (uuid) => {
        dispatch(setIsLoading(true));
        await dispatch(setChannel(uuid));
        if (!isLoading) {
            navigation.navigate(CHANNEL_PAGE);
        }
        // $.ajax({
        //     url: 'https://3genrib1y0.execute-api.us-east-1.amazonaws.com/public/users/' + userId + '/channels',
        //     type: "GET",
        //     dataType: 'json',
        //     success: function (res) {
        //         if (res.success) {
        //             if (res.galleries.length > 0) {

        //                 app.navigateTo('main');
        //                 for (var i = 0; i < res.galleries.length; i++) {
        //                     app.addUserToStorage(res.user)
        //                     app.addChannelToList(res.galleries[i].uuid, res.galleries[i]);
        //                     app.current_chunnel_id = userId;
        //                     app.drawChannels(userId, res.galleries);

        //                 }
        //             }
        //         } else {
        //             if (res.error == "Expired") {
        //                 // app.removeUserlFromList(userId);
        //                 app.expired(userId)
        //             } else if (res.error == "NotFound") {

        //                 if (app.users) {
        //                     app.navigateTo('channel-list');
        //                     $.each(app.users, function (index, el) {
        //                         app.getUsersList(el);
        //                     });
        //                 } else {
        //                     app.navigateTo('addChannel')
        //                 }
        //             }
        //             $('.pair-message').text(res.message || 'Issue with pair code.');
        //         }
        //     },
        //     error: function (err) {
        //         if (app.onlineStatus == "offline") {
        //             app.showErrorAlert('There is no internet connection, please check', null, 'Connection Error', 'Ok');

        //         } else {
        //             alert(JSON.stringify(err));
        //         }
        //     }
        // })
    }

    return (
        <AppContainer>
            <View >
                <Text style={styles.header}>My Chanel List</Text>
                {Object.keys(channels).length > 0 && <FlatList
                    style={styles.channels}
                    data={Object.entries(channels)}
                    keyExtractor={(item, index) => {
                        return index;
                    }}
                    renderItem={({ item }) => <Channel channel={item[1]}
                        deleteChannel={channelDelete}
                        openChannel={() => channelOpen(item[0])}

                    />
                    }
                />}
            </View>
        </AppContainer>
    )
}

const styles = StyleSheet.create({
    channels: {
        padding: 10,
    },
    header: {
        fontSize: 16,
        paddingLeft: 10,
        marginBottom: 10,
        marginTop: 10,
        color: Black,
        fontWeight: '700',
    }
})


export default Channels;
