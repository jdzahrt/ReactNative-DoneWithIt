import React from 'react';
import Screen from '../components/Screen'

import {StyleSheet, Image} from 'react-native';

import * as Yup from "yup";
import {AppForm, AppFormField, SubmitButton} from '../components/forms'
import AppFormPicker from "../components/forms/AppFormPicker";

const validationSchema = Yup.object().shape({
    title: Yup.string().required().min(1).label('Title'),
    price: Yup.number().required().min(1).max(10000).label('Price'),
    category: Yup.object().required().label('Category'),
    description: Yup.string().optional().label('Description')
})

function ListEditScreen(props) {
    return (
        <Screen style={styles.container}>
            <Image
                style={styles.logo}
                source={require('../assets/logo-red.png')}
            />
            <AppForm
                initialValues={{title: '', price: ''}}
                onSubmit={values => console.log(values)}
                validationSchema={validationSchema}
            >
                <AppFormField
                    autoCapitalize={'none'}
                    autoCorrect={false}
                    name={'title'}
                    keyboardTypef={'title'}
                    placeholder={'Title'}
                    textContentType={'title'}
                />
                <AppFormField
                    autoCapitalize={'none'}
                    autoCorrect={false}
                    name={'price'}
                    keyboardTypef={'price'}
                    placeholder={'Price'}
                    textContentType={'price'}
                />
                <AppFormPicker
                    items={props.items}
                    name={'category'}
                    placeholder={'Category'}
                />
                <AppFormField
                    autoCapitalize={'none'}
                    autoCorrect={false}
                    name={'description'}
                    placeholder={'Description'}
                    textContentType={'description'}
                />
                <SubmitButton title='POST'/>
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

export default ListEditScreen;
