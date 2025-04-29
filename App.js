import {NavigationContainer} from "@react-navigation/native";
import navigationTheme from "./app/navigation/NavigationTheme";
import OfflineNotice from "./app/components/OfflineNotice";
import AuthNavigator from "./app/navigation/AuthNavigator";
import AuthContext from "./app/auth/context";
import {useState} from "react";
import AppNavigator from "./app/navigation/AppNavigator";

export default function App() {
    const [user, setUser] = useState(null);
    return (
        <AuthContext.Provider value={{user, setUser}}>
            <OfflineNotice/>
            <NavigationContainer theme={navigationTheme}>
                {user ? <AppNavigator /> : <AuthNavigator />}
            </NavigationContainer>
        </AuthContext.Provider>
    )
}

