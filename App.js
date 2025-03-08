import WelcomeScreen from "./app/screens/WelcomeScreen";
import Card from "./app/components/Card";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import {GestureHandlerRootView} from "react-native-gesture-handler";
import MyAccountScreen from "./app/screens/MyAccountScreen";
import Screen from "./app/components/Screen";
import Icon from "./app/components/Icon";
import ListItem from "./app/components/ListItem";
import ListingsScreen from "./app/screens/ListingsScreen";

export default function App() {
    return (
        // <WelcomeScreen />
        //  <ViewImageScreen />
        // <ListingDetailsScreen />
        // <GestureHandlerRootView style={{flex: 1}}>
        //     {/*<MessagesScreen/>*/}
        //     <MyAccountScreen />
        // </GestureHandlerRootView>
        // <MyAccountScreen />
        <GestureHandlerRootView>
            <ListingsScreen />
        </GestureHandlerRootView>
    );
}

