import React from 'react';
import colors from "../config/colors";
import {View, StyleSheet, TouchableOpacity} from "react-native";
import {MaterialCommunityIcons} from "@expo/vector-icons";

function NewListingButton({onPress}) {
    return (
        <TouchableOpacity onPress={onPress}>
        <View style={styles.container}>
            <MaterialCommunityIcons name={'plus-circle'} color={colors.white} size={40}/>
        </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: colors.primary,
        borderColor: colors.white,
        borderWidth: 10,
        borderRadius: 40,
        bottom: 20,
        height: 80,
        justifyContent: 'center',
        width: 80
    }
});

export default NewListingButton;
