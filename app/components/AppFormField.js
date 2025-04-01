import React from 'react';
import { useFormikContext } from "formik";

import AppTextInput from "./AppTextInput";
// import {ErrorMessage} from "formik";
import ErrorMessage from "./ErrorMessage";


function AppFormField({name, ...otherProps}) {
    const {setFieldTouched, setFieldValue, errors, touched} = useFormikContext();
    return (
        <>
            <AppTextInput
                onBlur={() => setFieldTouched(name)}
                onChangeText={text => setFieldValue(name, text)}
                {...otherProps}
            />
            <ErrorMessage error={errors[name]} visible={touched[name]} name={name}/>
        </>
    );
}

export default AppFormField;
