import {NavigationContainer} from "@react-navigation/native";
import navigationTheme from "./app/navigation/NavigationTheme";
import OfflineNotice from "./app/components/OfflineNotice";
import AuthNavigator from "./app/navigation/AuthNavigator";
import AuthContext from "./app/auth/context";
import {useCallback, useEffect, useState} from "react";
import AppNavigator from "./app/navigation/AppNavigator";
import authStorage from "./app/auth/storage";
import * as SplashScreen from "expo-splash-screen";
import {View} from "react-native";
import * as Sentry from '@sentry/react-native';

Sentry.init({
  dsn: 'https://9ce9fc4d7a65bac758bcabb77138dd4f@o4509271345987584.ingest.us.sentry.io/4509271358504960',

  // Configure Session Replay
  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1,
  integrations: [Sentry.mobileReplayIntegration()],

  // uncomment the line below to enable Spotlight (https://spotlightjs.com)
  // spotlight: __DEV__,
});

export default Sentry.wrap(function App() {
    const [user, setUser] = useState(null);
    const [isReady, setIsReady] = useState(false);

    const restoreUser = async () => {
        const user = await authStorage.getUser();
        if (user) setUser(user)
    }

    const prepare = async () => {
        await restoreUser();
        setIsReady(true);
    };

    useEffect(() => {
        prepare();
    }, []);

    const onLayoutRootView = useCallback(async () => {
        if (isReady) {
            // This tells the splash screen to hide immediately! If we call this after
            // `setAppIsReady`, then we may see a blank screen while the app is
            // loading its initial state and rendering its first pixels. So instead,
            // we hide the splash screen once we know the root view has already
            // performed layout.
            await SplashScreen.hideAsync();
        }
    }, [isReady]);

    if (!isReady) {
        return null;
    }

    return (
        <View style={{flex: 1}} onLayout={onLayoutRootView}>
            <AuthContext.Provider value={{user, setUser}}>
                <OfflineNotice/>
                <NavigationContainer theme={navigationTheme}>
                    {user ? <AppNavigator/> : <AuthNavigator/>}
                </NavigationContainer>
            </AuthContext.Provider>
        </View>
    )
});
