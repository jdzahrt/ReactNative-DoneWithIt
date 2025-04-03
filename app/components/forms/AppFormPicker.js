import React from 'react';
import AppPicker from "../AppPicker";
import ErrorMessage from "./ErrorMessage";
import {useFormikContext} from "formik";

function AppFormPicker({items, name, placeholder}) {
    const {errors, setFieldValue, values} = useFormikContext();
    return (
        <>
            <AppPicker
                items={items}
                placeholder={placeholder}
                name={name}
                onSelectItem={(item) => setFieldValue(name, item)}
                selectedItem={values[name]}
            >

            </AppPicker>
            <ErrorMessage error={errors[name]} name={name}/>
        </>
    );
}

export default AppFormPicker;
