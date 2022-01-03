import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { createStackNavigator } from '@react-navigation/stack';

import { PairCode, Channels, Content, ChannelPage, Gallery } from '../screens';
import { PAIR_CODE, CHANNELS, CONTENT, CHANNEL_PAGE, GALLERY } from './screens';
import { mainBlue } from '../styles/colors';
import AppHeader from '../components/header';
import { AppService } from '../services';

const Stack = createStackNavigator();

const Root = () => {
    const channels = useSelector(({ app }) => app.channels);
    const [load, setLoad] = useState(false);
    const [firstScreen, setFirstScreen] = useState({
        name: PAIR_CODE,
        component: PairCode,
    })
    const [secundScreen, setSecundScreen] = useState({
        name: CHANNELS,
        component: Channels,
    })

    useEffect(() => {
        (async () => {
            await AppService.init();
            setLoad(true)
        })()
    }, [])

    useEffect(() => {
        if (Object.keys(channels).length) {
            setSecundScreen({
                name: PAIR_CODE,
                component: PairCode,
            });
            setFirstScreen({
                name: CHANNELS,
                component: Channels,
            });
        }
    }, [channels])


    return (
        load && <Stack.Navigator
            screenOptions={{
                headerShown: true,
                headerStyle: {
                    backgroundColor: mainBlue,
                },
                headerTintColor: '#fff',
                headerTitleAlign: 'center',
                headerTitleStyle: {
                    display: 'none'
                },
                headerLeft: () => <AppHeader />
            }}
        >

            <Stack.Screen {...firstScreen} />
            <Stack.Screen {...secundScreen} />
            <Stack.Screen name={CONTENT} component={Content} />
            <Stack.Screen name={CHANNEL_PAGE} component={ChannelPage}
                options={{ headerShown: false, }} />
            <Stack.Screen name={GALLERY} component={Gallery}
                options={{ headerShown: false, }} />
        </Stack.Navigator >
    )
}

export default Root;
