import React from 'react';
import {View, Image, StyleSheet} from "react-native";
import AppText from "../components/AppText";
import ListItem from "../components/lists/ListItem";

function ListingDetailsScreen({route}) {
    const listing = route.params;
    return (
        <View>
            <Image style={styles.image} source={listing.image}></Image>
            <View style={styles.detailsContainer}>
                <AppText style={styles.title}>{listing.title}</AppText>
                <AppText style={styles.price}>{listing.price}</AppText>
                <View style={styles.userContainer}>
                    <ListItem
                        image={require('../assets/mosh.jpg')}
                        title='Mosh Hamedani'
                        subTitle='5 Listings'
                    />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    detailsContainer: {
        padding: 20,
    },
    image: {
        width: '100%',
        height: 300,
    },
    price: {
        color: 'green',
        fontSize: 20,
        fontWeight: 'bold',
        marginVertical: 10,
    },
    title: {
        fontSize: 24,
        fontWeight: '500',
    },
    userContainer: {
        marginVertical: 40,
    }
});

export default ListingDetailsScreen;
