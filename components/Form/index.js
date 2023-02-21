import React from 'react'
import { TextInput, View, Text } from 'react-native';
import styles from './style';

const Form = () => {
    return (
        <View style={styles.addTask}>
            <TextInput />
            <View style={styles.input}>
                <Text>+</Text>
            </View>
        </View>
    )
}

export default Form;
