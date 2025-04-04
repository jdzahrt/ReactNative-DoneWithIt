import {useState} from "react";
import {GestureHandlerRootView} from "react-native-gesture-handler";
import Screen from "./app/components/Screen";
import {TextInput, Text, Switch} from "react-native";
import AppTextInput from "./app/components/AppTextInput";
import AppPicker from "./app/components/AppPicker";
import LoginScreen from "./app/screens/LoginScreen";
import RegisterScreen from "./app/screens/RegisterScreen";
import AppFormPicker from "./app/components/forms/AppFormPicker";
import ListEditScreen from "./app/screens/ListEditScreen";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import MyAccountScreen from "./app/screens/MyAccountScreen";
import MessagesScreen from "./app/screens/MessagesScreen";

const categories = [
    {label: 'Furniture', value: 1},
    {label: 'Clothing', value: 2},
    {label: 'Camera', value: 3}
]

export default function App() {
    const [category, setCategory] = useState(categories[0]);

    return (
        <GestureHandlerRootView>
            {/*<LoginScreen />*/}
            <ListEditScreen items={categories} />
            {/*<ListingDetailsScreen />*/}
            {/*<MessagesScreen />*/}
            {/*<MyAccountScreen />*/}
        </GestureHandlerRootView>
    );
}

