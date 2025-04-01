import React from 'react';
import Screen from '../components/Screen'
import {Formik} from "formik";

import {StyleSheet, Image} from 'react-native';
import AppTextInput from "../components/AppTextInput";
import AppButton from "../components/AppButton";
import * as Yup from "yup";
import ErrorMessage from "../components/ErrorMessage";
import AppFormField from "../components/AppFormField";

const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label('Email'),
    password: Yup.string().required().min(4).label('Password')
})

function LoginScreen(props) {
    return (
        <Screen style={styles.container}>
            <Image
                style={styles.logo}
                source={require('../assets/logo-red.png')}
            />
            <Formik
                initialValues={{email: '', password: ''}}
                onSubmit={values => console.log(values)}
                validationSchema={validationSchema}
            >
                {({handleSubmit, setFieldValue, errors, setFieldTouched, touched}) => (
                    <>
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
                        <AppButton
                            title='Login'
                            onPress={handleSubmit}
                        />
                    </>
                )}
            </Formik>
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
