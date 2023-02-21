import { StyleSheet } from 'react-native'
const styles = StyleSheet.create({
    addTask : {
        bottom:30,
        paddingHorizontal:20,
        flexDirection:'row',
        width:'100%', justifyContent:'space-between', alignItems:'center' 
    },
    input :{
        height:44,
        width:'80%', backgroundColor: '#fff', borderWidth:2, borderColor:'#72E945',
        borderRadius:20, paddingHorizontal:20, paddingVertical:10
    }

})

export default styles;