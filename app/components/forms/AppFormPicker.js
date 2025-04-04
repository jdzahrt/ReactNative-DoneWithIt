import React from 'react';
import AppPicker from "../AppPicker";
import ErrorMessage from "./ErrorMessage";
import {useFormikContext} from "formik";

function AppFormPicker({items, name, placeholder, width}) {
    const {errors, setFieldValue, values, touched} = useFormikContext();
    return (
        <>
            <AppPicker
                items={items}
                placeholder={placeholder}
                name={name}
                onSelectItem={(item) => setFieldValue(name, item)}
                selectedItem={values[name]}
                width={width}
            />
            <ErrorMessage error={errors[name]} name={name} visible={touched[name]}/>
        </>
    );
}

export default AppFormPicker;
