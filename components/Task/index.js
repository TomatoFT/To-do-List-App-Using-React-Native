import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native';
import styles from './style';
const Task = () => {
    return (
        <TouchableOpacity>
        <View style={styles.item}>
        <View style={styles.square}>
        <Text style={styles.number} >01</Text>
        </View>
        <View style={styles.content}>
        <Text>Choi do</Text>
        </View>
        </View>
        </TouchableOpacity>
    )
}

export default Task;
