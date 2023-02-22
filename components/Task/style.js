import { StyleSheet } from 'react-native'
import color from '../contain/color';

const styles = StyleSheet.create({
    item: {
        color: 'black', backgroundColor: color.white, flexDirection:'row', marginBottom:15, paddingVertical:10, 
        paddingHorizontal:20, borderRadius:50, justifyContent:'space-between'
      },
      square : {
        backgroundColor: color.primary, width:40 , height:30,borderRadius:30, 
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