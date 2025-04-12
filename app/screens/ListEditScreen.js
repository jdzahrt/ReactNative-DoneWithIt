import React from 'react';
import Screen from '../components/Screen'

import {StyleSheet, Image} from 'react-native';

import * as Yup from "yup";
import {AppForm, AppFormField, SubmitButton} from '../components/forms'
import AppFormPicker from "../components/forms/AppFormPicker";
import CategoryPickerItem from "../components/CategoryPickerItem";
import FormImagePicker from "../components/forms/FormImagePicker";
import useLocation from "../hooks/useLocation";

const validationSchema = Yup.object().shape({
    title: Yup.string().required().min(1).label('Title'),
    price: Yup.number().required().min(1).max(10000).label('Price'),
    category: Yup.object().required().label('Category'),
    description: Yup.string().optional().nullable().label('Description'),
    images: Yup.array().min(1, 'Please select at least one image').label('Images')
})

function ListEditScreen(props) {
    const location = useLocation();
    return (
        <Screen style={styles.container}>
            <Image
                style={styles.logo}
                source={require('../assets/logo-red.png')}
            />
            <AppForm
                initialValues={{
                    title: '',
                    price: '',
                    description: '',
                    category: null,
                    images: []
                }}
                onSubmit={values => console.log(location)}
                validationSchema={validationSchema}
            >
                <FormImagePicker name={'images'}/>
                <AppFormField
                    autoCapitalize={'none'}
                    autoCorrect={false}
                    keyboardTypef={'title'}
                    maxLength={255}
                    name={'title'}
                    placeholder={'Title'}
                    textContentType={'title'}
                    width={200}
                />
                <AppFormField
                    autoCapitalize={'none'}
                    autoCorrect={false}
                    maxLength={8}
                    name={'price'}
                    keyboardTypef={'price'}
                    placeholder={'Price'}
                    textContentType={'price'}
                    width={150}
                />
                <AppFormPicker
                    items={props.items}
                    name={'category'}
                    numberOfColumns={3}
                    PickerItemComponent={CategoryPickerItem}
                    placeholder={'Category'}
                    width={150}
                />
                <AppFormField
                    maxLength={255}
                    multiline
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
