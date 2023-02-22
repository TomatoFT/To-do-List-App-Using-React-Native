import React, {useState} from 'react'
import { TextInput, View, Text, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native';

import styles from './style';

const Form = () => {
    const [task, setTask] = useState('')
    const handleAsTask  = () => {
        if (task.length == 0) {
            alert(" Ban vui long nhap cong viec")
            return false
        }
        alert(task)
    }
    return (
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={styles.addTask}
                keyboardVerticalOffset={10} 
                >
                <TextInput style={styles.input} 
                placeholder="Type your task" 
                onChangeText={(text) => setTask(text)} />
                <TouchableOpacity onPress={handleAsTask}>
                    <View style={styles.iconWrapper}>
                        <Text style={styles.icon}>+</Text>
                    </View>
                </TouchableOpacity>
            </KeyboardAvoidingView>
    )
}

export default Form;
