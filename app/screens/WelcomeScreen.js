import React from 'react';
import {ImageBackground, StyleSheet, View, Image, Text, Button} from "react-native";
import colors from "../config/colors";
import AppButton from "../components/AppButton";

function WelcomeScreen(props) {
    return (
        <ImageBackground
            source={require('../assets/background.jpg')}
            style={styles.background}
            blurRadius='5'
        >
            <View style={styles.logoContainer}>
                <Image style={styles.logo} source={require('../assets/logo-red.png')}/>
                <Text style={styles.text}>Sell What You Don't Need</Text>
            </View>
            <View style={styles.buttonsContainer}>
                <AppButton title='login' color='primary' onPress={() => console.log('Login tapped')}>login</AppButton>
                <AppButton title='register' color='secondary'>register</AppButton>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    buttonsContainer: {
        position: 'absolute',
        bottom: 70,
        alignItems: 'center'
    },
    logo: {
        width: 100,
        height: 100,
    },
    logoContainer: {
        position: 'absolute',
        top: 70,
        alignItems: 'center'
    },
    text: {
        fontSize: 25,
        fontWeight: 'bold',
        color: colors.black,
        paddingVertical: 20
    }
});

export default WelcomeScreen;
