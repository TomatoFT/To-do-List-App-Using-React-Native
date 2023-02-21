import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import Task from './components/Task';
import Form from './components/Form';

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
        </ScrollView>        
        </View>
        <Form/>    
      <StatusBar style="auto"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EDF6F6',
  },
  headerText: {
    fontSize:24, color:'#91CBE1', fontWeight:"bold"
  },
  items: {marginTop:25}, 
  body:{
    paddingTop:50, paddingHorizontal:18
  },
  tail:{
    paddingBottom:50, paddingHorizontal:18
  },
  
});
