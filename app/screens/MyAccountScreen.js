import React from 'react';
import {View, StyleSheet, TouchableOpacity, Text, FlatList} from "react-native";

import Screen from "../components/Screen";
import ListItem from "../components/lists/ListItem";
import colors from "../config/colors";
import Icon from "../components/Icon";
import ListItemSeparator from "../components/ListItemSeparator";

const menuItems = [
    {
        title: 'My Listings',
        icon: {
            name: 'format-list-bulleted',
            backgroundColor: colors.primary
        }
    },
    {
        title: 'My Messages',
        icon: {
            name: 'email',
            backgroundColor: colors.secondary
        }
    }
]

function MyAccountScreen(props) {
    return (
        <Screen style={styles.screen}>
            <View style={styles.container}>
                <ListItem
                    title="Jesse"
                    subTitle="email"
                    image={require('../assets/mosh.jpg')}
                />
            </View>
            <View style={styles.container}>
                <FlatList
                    data={menuItems}
                    keyExtractor={menuItem => menuItem.title}
                    ItemSeparatorComponent={ListItemSeparator}
                    renderItem={({item}) =>
                        <ListItem
                            title={item.title}
                            IconComponent={
                                <Icon
                                    name={item.icon.name}
                                    backgroundColor={item.icon.backgroundColor}
                                />
                            }
                        />
                    }
                />
            </View>
            <ListItem
                title={'Log Out'}
                IconComponent={
                    <Icon
                        name={'logout'}
                        backgroundColor='#ffe66d'
                    />
                }
            />
        </Screen>
        // <View style={{backgroundColor: '#f2f2f2', flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        //     <View style={styles.listingsContainer}>
        //         <TouchableOpacity>
        //             <View style={styles.listings}>
        //                 <MaterialCommunityIcons name="format-list-bulleted" color={'white'} size={30}/>
        //             </View>
        //         </TouchableOpacity>
        //         <TouchableOpacity>
        //             <View style={styles.messages}>
        //                 <MaterialCommunityIcons name="email" color={'white'} size={30}/>
        //             </View>
        //         </TouchableOpacity>
        //     </View>
        //     <TouchableOpacity>
        //         <View style={styles.logout}>
        //             <MaterialCommunityIcons name="logout" color={'white'} size={30}/>
        //         </View>
        //     </TouchableOpacity>
        // </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 20
    },
    listingsContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20
    },
    listings: {
        padding: 20,
        backgroundColor: '#f93e16',
        marginVertical: 10,
        borderRadius: 35
    },
    messages: {
        padding: 20,
        backgroundColor: '#4fd9cc',
        marginVertical: 10,
        borderRadius: 35
    },
    logout: {
        padding: 20,
        backgroundColor: '#eccd0b',
        borderRadius: 35
    },
    screen: {
        backgroundColor: colors.light
    }
});

export default MyAccountScreen;
