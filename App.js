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
    {label: 'Furniture', value: 1, iconName: 'floor-lamp', backgroundColor: '#fc5c65'},
    {label: 'Clothing', value: 2, iconName: 'shoe-heel', backgroundColor: '#2bcbba'},
    {label: 'Camera', value: 3, iconName: 'camera', backgroundColor: '#fed330'},
    {label: 'Cars', value: 4, iconName: 'car', backgroundColor: '#fd9644'},
    {label: 'Sports', value: 5, iconName: 'basketball', backgroundColor: '#45aaf2'},
    {label: 'Music & Movies', value: 6, iconName: 'headphones', backgroundColor: '#4b7bec'},
    {label: 'Books', value: 7, iconName: 'book', backgroundColor: '#b700ff'},
    {label: 'Games', value: 8, iconName: 'cards', backgroundColor: '#5dd94f'},
    {label: 'Other', value: 9, iconName: 'calendar', backgroundColor: '#7b8ca1'},
]

export default function App() {
    const [category, setCategory] = useState(categories[0]);

    return (
        <GestureHandlerRootView>
            {/*<LoginScreen />*/}
            <ListEditScreen items={categories}/>
            {/*<ListingDetailsScreen />*/}
            {/*<MessagesScreen />*/}
            {/*<MyAccountScreen />*/}
        </GestureHandlerRootView>
    );
}

