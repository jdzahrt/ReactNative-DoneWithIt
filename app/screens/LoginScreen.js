import React, {useState} from 'react';
import Screen from '../components/Screen'

import {StyleSheet, Image} from 'react-native';
import AppTextInput from "../components/AppTextInput";
import AppButton from "../components/AppButton";

function LoginScreen(props) {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    return (
        <Screen style={styles.container}>
            <Image
                style={styles.logo}
                source={require('../assets/logo-red.png')}/>
            <AppTextInput
                autoCapitalize={'none'}
                autoCorrect={false}
                icon='email'
                keyboardType={'email-address'}
                onChangeText={text => setEmail(text)}
                placeholder={'Email'}
                textContentType={'emailAddress'}
            />
            <AppTextInput
                autoCapitalize={'none'}
                autoCorrect={false}
                icon={'lock'}
                onChangeText={text => setPassword(text)}
                placeholder={'Password'}
                secureTextEntry={true}
                textContentType={'password'}
            />
            <AppButton title='LOGIN' onPress={() => console.log(email, password)}/>
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10
    },
    logo: {
        width: 80,
        height: 80,
        alignSelf: 'center',
        marginTop: 50,
        marginBottom: 20
    }
});

export default LoginScreen;
