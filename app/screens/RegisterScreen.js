import React from 'react';
import Screen from '../components/Screen'

import {StyleSheet, Image} from 'react-native';

import * as Yup from "yup";
import {AppForm, AppFormField, SubmitButton} from '../components/forms'
import usersApi from "../api/users";
import authAPI from "../api/auth";
import useAuth from "../auth/useAuth";
import useApi from "../hooks/useApi";
import ActivityIndicator from "../components/ActivityIndicator";
import ErrorMessage from "../components/forms/ErrorMessage";

const validationSchema = Yup.object().shape({
    user: Yup.string().required().label('Name'),
    email: Yup.string().required().email().label('Email'),
    password: Yup.string().required().min(4).label('Password')
})

function RegisterScreen(props) {
    const registerApi = useApi(usersApi.addUser)
    const loginApi = useApi(authAPI.login)
    const {logIn} = useAuth()
    const [error, setError] = React.useState(null)

    const handleSubmit = async (user) => {
        console.log('hitting submit')
        const result = await registerApi.request(user)
        console.log(result.data)
        if (!result.ok) {
            setError(result.data.error)
            console.log(result)
            return
        }

        const {data: authToken} = await loginApi.request(
            user.email,
            user.password
        )
        console.log('auttoken', authToken)
        logIn(authToken)

    }

    return (
        <>
            <ErrorMessage error={error}/>
            <ActivityIndicator visible={registerApi.loading || loginApi.loading}/>
            <Screen style={styles.container}>

                <Image
                    style={styles.logo}
                    source={require('../assets/logo-red.png')}
                />
                <AppForm
                    initialValues={{email: '', password: '', user: ''}}
                    onSubmit={handleSubmit}
                    validationSchema={validationSchema}
                >
                    <AppFormField
                        autoCapitalize={'none'}
                        autoCorrect={false}
                        icon={'human-male'}
                        name={'user'}
                        keyboardTypef={'user-name'}
                        placeholder={'Name'}
                        textContentType={'userName'}
                    />
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
                        minLength={5}
                        name={'password'}
                        placeholder={'Password'}
                        secureTextEntry
                        textContentType={'password'}
                    />
                    <SubmitButton title='Register'/>
                </AppForm>
            </Screen>
        </>
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

export default RegisterScreen;
