import {NavigationContainer} from "@react-navigation/native";
import AppNavigator from "./app/navigation/AppNavigator";
import navigationTheme from "./app/navigation/NavigationTheme";
import NetInfo from '@react-native-community/netinfo'
import OfflineNotice from "./app/components/OfflineNotice";

export default function App() {
    // NetInfo.addEventListener(netInfo => console.log(netInfo))

    return (
        <>
            <OfflineNotice/>
            <NavigationContainer theme={navigationTheme}>
                <AppNavigator/>
            </NavigationContainer>
        </>
    )
}

