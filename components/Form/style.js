import { StyleSheet } from 'react-native'
import color from '../contain/color';
const styles = StyleSheet.create({
    addTask : {
        bottom:30,
        paddingHorizontal:20,
        flexDirection:'row',
        width:'100%', justifyContent:'space-between', alignItems:'center' 
    },
    input :{
        height:44, width:'80%', backgroundColor: color.white, borderWidth:2, borderColor:color.secondary,
        borderRadius:20, paddingHorizontal:20, paddingVertical:10
    },
    iconWrapper : {
        width:44, height:44, backgroundColor:color.icon, borderRadius:44,
        alignItems: 'center', justifyContent:'center', borderWidth:2, borderColor:color.secondary
    }, 
    icon :{
        fontSize:28,color:'#fff', 
    }

})

export default styles;