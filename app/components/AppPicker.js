import React, {useState} from 'react';
import {Button, FlatList, Modal, StyleSheet, TouchableWithoutFeedback, View} from "react-native";

import {MaterialCommunityIcons} from '@expo/vector-icons'
import defaultStyles from '../config/styles'
import AppText from "./AppText";
import Screen from "./Screen";
import PickerItem from "./PickerItem";

function AppPicker({
                       icon,
                       items,
                       numberOfColumns = 1,
                       onSelectItem,
                       PickerItemComponent = PickerItem,
                       placeholder,
                       selectedItem,
                       width = '100%'
                   }) {
    const [modalVisible, setModalVisible] = useState(false)

    return (<>
        <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
            <View style={[styles.container, {width}]}>
                {icon && <MaterialCommunityIcons name={icon}
                                                 size={20}
                                                 color={defaultStyles.colors.medium}
                                                 style={styles.icon}/>}
                <AppText style={styles.text}>{selectedItem ? selectedItem.label : placeholder}</AppText>
                <MaterialCommunityIcons
                    name={"chevron-down"}
                    size={20}
                    color={defaultStyles.colors.medium}/>
            </View>
        </TouchableWithoutFeedback>
        <Modal visible={modalVisible} animationType={"slide"}>
            <Screen>
                <Button title={"Close"} onPress={() => setModalVisible(false)}></Button>
                <FlatList data={items}
                          numColumns={numberOfColumns}
                          keyExtractor={(item) => item.value.toString()}
                          renderItem={({item}) => (
                              <PickerItemComponent item={item}
                                                   label={item.label}
                                                   onPress={() => {
                                                       setModalVisible(false)
                                                       onSelectItem(item)
                                                   }}/>
                          )}
                />
            </Screen>
        </Modal>
    </>);
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: defaultStyles.colors.light,
        borderRadius: 25,
        flexDirection: 'row',
        padding: 15,
        marginVertical: 10
    }, icon: {
        marginRight: 10
    }, text: {
        flex: 1, color: defaultStyles.colors.medium
    }
})

export default AppPicker;
