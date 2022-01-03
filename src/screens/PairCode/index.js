import React, { useEffect, useRef, useState } from "react";
import { View, Text, StyleSheet, TextInput, FlatList } from "react-native";
import { PairInput } from "../../components/pair";

import { Black, Gray } from "../../styles/colors";
import { PairChannel, setIsLoading, setSuccess, setError } from "../../actions/app";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { CHANNELS } from "../../navigation/screens";
import { AppContainer } from "../../components/ui";


const PairCode = () => {
    const dispatch = useDispatch();
    const navigation = useNavigation()

    const [pairValue, setPairValue] = useState('');
    const { isLoading, success, errorMessage } = useSelector(({ app }) => app);

    const [pairInputValue, setPairInputValue] = useState(() => {
        let val = [];
        for (let i = 0; i < 6; i++) {
            val[i] = {
                value: '',
                id: i
            };
        }

        return val;
    });

    const inputRef = useRef();

    const bindTouchPairInput = () => {
        inputRef.current.focus()
    }



    useEffect(() => {

        if (pairValue && pairValue.length === 1) {
            dispatch(setError(''));
            dispatch(setSuccess(false));
        }
        setPairInputValue(() => {
            let val = [];
            for (let i = 0; i < 6; i++) {
                val[i] = {
                    value: pairValue && pairValue[i] ? pairValue[i] : '',
                    id: i
                };
            }
            return val;
        })
        if (pairValue && pairValue.length === 6) {
            dispatch(setIsLoading(true));
            dispatch(PairChannel(pairValue));
            if (success && !isLoading) {
                navigation.navigate(CHANNELS);
                setPairValue('');
            } else if (errorMessage && !isLoading) {
                setPairValue('');
            }
        }

    }, [pairValue, success, isLoading, errorMessage])

    return (
        <AppContainer>
            <View >
                <Text style={styles.title}>Type pair code </Text>
                <TextInput
                    maxLength={6}
                    style={styles.input}
                    keyboardType="numeric"
                    onChangeText={setPairValue}
                    value={pairValue}
                    ref={inputRef}
                />
                <FlatList
                    numColumns={6}
                    data={pairInputValue}
                    renderItem={({ item }) => <PairInput key={toString(item.id)} data={item.value} bindTouchPairInput={bindTouchPairInput} />}
                    keyExtractor={item => item.id}
                />
                {
                    errorMessage ? (<Text style={styles.error}>{errorMessage}</Text>) : null
                }

            </View>
        </AppContainer>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        paddingLeft: 10,
        marginBottom: 10,
        marginTop: 10,
        color: Black,
    },
    input: {
        position: 'absolute',
        top: -200,
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    error: {
        color: Gray
    }
})

export default PairCode;
