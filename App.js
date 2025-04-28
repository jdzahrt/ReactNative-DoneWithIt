import {NavigationContainer} from "@react-navigation/native";
import AppNavigator from "./app/navigation/AppNavigator";
import navigationTheme from "./app/navigation/NavigationTheme";
import NetInfo, {useNetInfo} from '@react-native-community/netinfo'
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function App() {
    NetInfo.addEventListener(netInfo => console.log(netInfo))

    const demo = async () => {
        try {
            await AsyncStorage.setItem('person', JSON.stringify({id: 1}))
            const value = await  AsyncStorage.getItem('person')
            console.log(value)
        }
        catch (e) {
            console.log(e)
        }

    }

    demo();

    return (
        <NavigationContainer theme={navigationTheme}>
            <AppNavigator />
        </NavigationContainer>
    )
}

