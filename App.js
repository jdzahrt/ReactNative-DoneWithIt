import {useState} from "react";
import {GestureHandlerRootView} from "react-native-gesture-handler";
import Screen from "./app/components/Screen";
import {TextInput, Text, Switch} from "react-native";
import AppTextInput from "./app/components/AppTextInput";
import AppPicker from "./app/components/AppPicker";
import LoginScreen from "./app/screens/LoginScreen";

const categories = [
    {label: 'Furniture', value: 1},
    {label: 'Clothing', value: 2},
    {label: 'Camera', value: 3}
]

export default function App() {
    const [category, setCategory] = useState(categories[0]);

    return (
        <GestureHandlerRootView>
            <LoginScreen />
        </GestureHandlerRootView>
    );
}

