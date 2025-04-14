import {NavigationContainer} from "@react-navigation/native";
import AppNavigator from "./app/navigation/AppNavigator";
import navigationTheme from "./app/navigation/NavigationTheme";

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
    return (
        <NavigationContainer theme={navigationTheme}>
            <AppNavigator />
        </NavigationContainer>
    )
}

