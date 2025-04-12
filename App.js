import {useEffect, useState} from "react";
import Screen from "./app/components/Screen";
import * as ImagePicker from 'expo-image-picker';
import {Button, Image} from "react-native";
import ImageInput from "./app/components/ImageInput";
import ImageInputList from "./app/components/ImageInputList";

const categories = [
    {label: 'Furniture', value: 1, iconName: 'floor-lamp', backgroundColor: '#fc5c65'},
    {label: 'Clothing', value: 2, iconName: 'shoe-heel', backgroundColor: '#2bcbba'},
    {label: 'Camera', value: 3, iconName: 'camera', backgroundColor: '#fed330'},
    {label: 'Cars', value: 4, iconName: 'car', backgroundColor: '#fd9644'},
    {label: 'Sports', value: 5, iconName: 'basketball', backgroundColor: '#45aaf2'},
    {label: 'Music & Movies', value: 6, iconName: 'headphones', backgroundColor: '#4b7bec'},
    {label: 'Books', value: 7, iconName: 'book', backgroundColor: '#b700ff'},
    {label: 'Games', value: 8, iconName: 'cards', backgroundColor: '#5dd94f'},
    {label: 'Other', value: 9, iconName: 'calendar', backgroundColor: '#7b8ca1'},
]

export default function App() {
    const [imageUris, setImageUris] = useState([])

    const handleAdd = (uri) => {
        setImageUris([...imageUris, uri])
    }

    const handleRemove = (uri) => {
        setImageUris(imageUris.filter(imageUri => imageUri !== uri))
    }

    return (
        <Screen>
            <ImageInputList
                imageUris={imageUris}
                onAddImage={handleAdd}
                onRemoveImage={handleRemove}
            />
        </Screen>
    )
}

