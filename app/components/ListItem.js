import React from 'react';
import {View, StyleSheet, Image} from "react-native";
import AppText from "./AppText";
import colors from "../config/colors";

function ListItem({title, subTitle, image}) {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={image}></Image>
            <View style={styles.detailsContainer}>
                <AppText style={styles.title}>{title}</AppText>
                <AppText style={styles.subTitle}>{subTitle}</AppText>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 15,
        backgroundColor: 'white'
    },
    detailsContainer: {
        marginLeft: 10,
        justifyContent: 'center',
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 35,
    },
    subTitle: {
        color: colors.medium
    },
    title: {
        fontWeight: 'bold',
    }
});

export default ListItem;
