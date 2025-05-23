import React from 'react';
import {View, StyleSheet, Image, TouchableHighlight} from "react-native";
import AppText from "../AppText";
import colors from "../../config/colors";
import {Swipeable} from 'react-native-gesture-handler';
import {MaterialCommunityIcons} from "@expo/vector-icons";

function ListItem({title, subTitle, image, IconComponent, onPress, renderRightActions}) {
    return (
        <Swipeable renderRightActions={renderRightActions}>
            <TouchableHighlight
                underlayColor={colors.medium}
                onPress={onPress}
            >
                <View style={styles.container}>
                    {IconComponent}
                    {image && <Image style={styles.image} source={image}></Image>}
                    <View style={styles.detailsContainer}>
                        <AppText style={styles.title} numberOfLines={1}>{title}</AppText>
                        {subTitle && <AppText style={styles.subTitle} numberOfLines={2}>{subTitle}</AppText>}
                    </View>
                    <MaterialCommunityIcons
                        color={colors.medium}
                        name="chevron-right"
                        size={25}
                        style={styles.chevron}
                    />
                </View>
            </TouchableHighlight>
        </Swipeable>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flexDirection: 'row',
        padding: 15,
        backgroundColor: colors.white
    },
    detailsContainer: {
        flex: 1,
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
    },
    chevron: {
        marginLeft: 'auto',
    }
});

export default ListItem;
