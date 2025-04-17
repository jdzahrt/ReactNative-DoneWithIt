import React, {useEffect, useState} from 'react';
import Screen from "../components/Screen";
import {FlatList, StyleSheet, Text} from "react-native";
import Card from "../components/Card";
import colors from "../config/colors";
import routes from "../navigation/routes";
import {getListings} from "../api/listings";
import AppButton from "../components/AppButton";
import ActivityIndicator from "../components/ActivityIndicator";
import useApi from "../hooks/useApi";


function ListingsScreen({navigation}) {
    const getListingsApi = useApi(getListings)


    useEffect(() => {
        getListingsApi.request(1,2,3);
    }, []);

    return (
        <Screen style={styles.screen}>
            {getListingsApi.error && (
                <>
                    <Text>Could not retrieve the listings.</Text>
                    <AppButton title="Retry" onPress={getListingsApi.request}/>
                </>
            )}
            <ActivityIndicator visible={getListingsApi.loading}></ActivityIndicator>
            <FlatList
                data={getListingsApi.data}
                keyExtractor={listing => listing.id.toString()}
                renderItem={({item}) =>
                    <Card
                        title={item.title}
                        subTitle={'$' + item.price}
                        imageUrl={item.images[0].url}
                        onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
                    />
                }
            />
        </Screen>
    );
}

const styles = StyleSheet.create({
    screen: {
        padding: 20,
        backgroundColor: colors.light
    }
});

export default ListingsScreen;
