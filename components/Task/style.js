import { StyleSheet } from 'react-native'
const styles = StyleSheet.create({
    item: {
        color: 'black', backgroundColor: '#fff', flexDirection:'row', marginBottom:15, paddingVertical:10, 
        paddingHorizontal:20, borderRadius:50, justifyContent:'space-between'
      },

      square : {
        backgroundColor:'#9AECF6', width:40 , height:30,borderRadius:30, 
        alignItems:'center', justifyContent:'center'
      },
      number: {
        color:'#fff', fontWeight:'bold', fontSize:16
      },
      content : {
        width:'80%', fontSize:12
      }

})

export default styles;