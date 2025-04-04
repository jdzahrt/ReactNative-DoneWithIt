import React from 'react';
import {View, StyleSheet, Image, TouchableOpacity, TouchableHighlight} from "react-native";
import AppText from "../AppText";
import colors from "../../config/colors";
import {Swipeable} from 'react-native-gesture-handler';
import Icon from "../Icon";
import {MaterialCommunityIcons} from "@expo/vector-icons";

function ListItem({title, subTitle, image, IconComponent, onPress, renderRightActions}) {
    return (
        <Swipeable renderRightActions={renderRightActions}>
            <TouchableHighlight
                underlayColor={colors.medium}
                onPress={onPress}>
                <View style={styles.container}>
                    {IconComponent}
                    {image && <Image style={styles.image} source={image}></Image>}
                    <View style={styles.detailsContainer}>
                        <AppText style={styles.title}>{title}</AppText>
                        {subTitle && <AppText style={styles.subTitle}>{subTitle}</AppText>}
                    </View>
                    {/*<Icon name={'chevron-right'} style={styles.chevron}></Icon>*/}
                    <MaterialCommunityIcons
                        name="chevron-right"
                        size={25}
                        color={colors.medium}
                        style={styles.chevron}
                    />
                </View>
            </TouchableHighlight>
        </Swipeable>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 15,
        backgroundColor: colors.white
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
    },
    chevron: {
        marginLeft: 'auto',
    }
});

export default ListItem;
