import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Task from './components/Task';
import Form from './components/Form';
import styles from './App.components.styles';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <Text style={styles.headerText}>ToDo list</Text>
        <ScrollView style={styles.items}> 
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
        {/* <Form /> */}
        </ScrollView>
      {/* <StatusBar style="auto"/> */}
      </View> 
      <Form/>  
    </View>
    
  );
}


