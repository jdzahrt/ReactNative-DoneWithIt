import React, {useContext, useState} from 'react';
import Screen from '../components/Screen'

import {StyleSheet, Image} from 'react-native';

import * as Yup from "yup";
import {AppForm, AppFormField, SubmitButton, ErrorMessage} from '../components/forms'
import authAPI from "../api/auth";
import {jwtDecode} from "jwt-decode";
import AuthContext from "../auth/context";

const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label('Email'),
    password: Yup.string().required().min(4).label('Password')
})

function LoginScreen(props) {
    const authContext = useContext(AuthContext)
    const [loginFailed, setLoginFailed] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")

    const handleSubmit = async ({email, password}) => {
        const result = await authAPI.login(email, password)

        if (!result.ok) {
            setLoginFailed(true)
            setErrorMessage("Invalid email and/or password.")
            return
        } else {
            setLoginFailed(false)
            setErrorMessage("")
        }
        const user = jwtDecode(result.data)
        authContext.setUser(user)

        console.log(user)
    }

    return (
        <Screen style={styles.container}>
            <Image
                style={styles.logo}
                source={require('../assets/logo-red.png')}
            />

            <AppForm
                initialValues={{email: '', password: ''}}
                onSubmit={handleSubmit}
                validationSchema={validationSchema}
            >
                <ErrorMessage error={errorMessage} visble={loginFailed}/>
                <AppFormField
                    autoCapitalize={'none'}
                    autoCorrect={false}
                    icon={'email'}
                    name={'email'}
                    keyboardTypef={'email-address'}
                    placeholder={'Email'}
                    textContentType={'emailAddress'}
                />
                <AppFormField
                    autoCapitalize={'none'}
                    autoCorrect={false}
                    icon={'lock'}
                    name={'password'}
                    placeholder={'Password'}
                    secureTextEntry
                    textContentType={'password'}
                />
                <SubmitButton title='Login'/>
            </AppForm>
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
