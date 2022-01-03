import React from 'react';
import { Text, StyleSheet, Dimensions } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { Black, Gray, White } from '../../styles/colors';


const { width } = Dimensions.get('window');
const vw = width / 100;


const PairInput = ({ bindTouchPairInput, data }) => (

    <TouchableOpacity activeOpacity={1} style={styles.pair__inputs} onPress={() => bindTouchPairInput()}>
        <Text style={data ? styles.pair__black : styles.pair__inputGray} >{data ? data : "●"}</Text>
    </TouchableOpacity>
)

const styles = StyleSheet.create({

    pair__inputs: {
        width: 15 * vw,
        height: 15 * vw,
        margin: '1%',
        fontSize: 16,
        backgroundColor: White,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
    },
    pair__inputGray: {
        color: Gray,
    },
    pair__black: {
        color: Black
    }
})

export default PairInput;
