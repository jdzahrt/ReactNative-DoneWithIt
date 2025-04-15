import React from 'react';
import {View, StyleSheet, Image, TouchableWithoutFeedback} from "react-native";
import colors from "../config/colors";
import AppText from "./AppText";

function Card({title, subTitle, imageUrl, onPress}) {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={styles.card}>
                <Image style={styles.image} source={{uri: imageUrl}}/>
                <View style={styles.detailsContainer}>
                    <AppText>{title}</AppText>
                    <AppText style={styles.subTitle}>{subTitle}</AppText>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#f8f4f4',
        padding: 20,
        overflow: 'hidden'
    },
    image: {
        width: '100%',
        height: 200,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25
    },
    detailsContainer: {
        padding: 20,
        backgroundColor: colors.white,
        borderBottomRightRadius: 25,
        borderBottomLeftRadius: 25
    },
    title: {
        marginBottom: 10,
    },
    subTitle: {
        color: colors.secondary,
        fontWeight: 'bold'
    }
});

export default Card;
