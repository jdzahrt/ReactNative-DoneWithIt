import React from 'react';
import {View, StyleSheet} from "react-native";

function Test(props) {
    return (
        <View style={styles.container}></View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default Test;
