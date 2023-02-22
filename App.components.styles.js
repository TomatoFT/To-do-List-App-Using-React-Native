import { StyleSheet } from "react-native";
import color from './components/contain/color';

const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
            backgroundColor: color.background,
          },
          headerText: {
            fontSize:24, color:color.primary, fontWeight:"bold"
          },
          items: {
            marginTop:25
          }, 
          body:{
            flex:1, paddingTop:50, paddingHorizontal:18, paddingBottom:50
          },  
    }
)

export default styles;