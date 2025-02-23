import {
    Platform,
    SafeAreaView,
    StatusBar, View, StyleSheet
} from "react-native";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";

export default function App() {
    // const {height, width} = useWindowDimensions()
    return (
       // <WelcomeScreen/>
        <ViewImageScreen/>
    );
}

