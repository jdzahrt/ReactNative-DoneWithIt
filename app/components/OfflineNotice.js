import React from 'react';
import {View, StyleSheet} from "react-native";
import colors from "../config/colors";
import AppText from "./AppText";
import Constants from 'expo-constants';
import {useNetInfo} from "@react-native-community/netinfo";

function OfflineNotice(props) {
    const netInfo = useNetInfo();

    if (netInfo.type !== 'unknown' && netInfo.isInternetReachable === false)
        return (
            <View style={styles.container}>
                <AppText style={styles.text}>No internet connection</AppText>
            </View>
        );

    return null
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: colors.primary,
        height: 50,
        justifyContent: 'center',
        position: 'absolute',
        top: Constants.statusBarHeight,
        width: '100%',
        zIndex: 1
    },
    text: {

        color: colors.white,
        fontSize: 20
    }
});

export default OfflineNotice;
