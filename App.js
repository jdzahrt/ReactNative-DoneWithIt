import {NavigationContainer} from "@react-navigation/native";
import navigationTheme from "./app/navigation/NavigationTheme";
import OfflineNotice from "./app/components/OfflineNotice";
import AuthNavigator from "./app/navigation/AuthNavigator";
import AuthContext from "./app/auth/context";
import {useEffect, useState} from "react";
import AppNavigator from "./app/navigation/AppNavigator";
import {jwtDecode} from "jwt-decode";
import authStorage from "./app/auth/storage";

export default function App() {
    const [user, setUser] = useState(null);

    const restoreToken = async () =>
    {
        const token = await authStorage.getToken();
        if (!token) return;
        setUser(jwtDecode(token))
    }

    useEffect(() => {
        restoreToken()
    }, []);

    return (
        <AuthContext.Provider value={{user, setUser}}>
            <OfflineNotice/>
            <NavigationContainer theme={navigationTheme}>
                {user ? <AppNavigator /> : <AuthNavigator />}
            </NavigationContainer>
        </AuthContext.Provider>
    )
}

