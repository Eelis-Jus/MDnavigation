import React from "react"
import { StyleSheet,View,Text} from "react-native"


export default function SecondScreen({navigation}){ 
    
    return(
        <View style={styles.container}>
         <Text>SecondScreen</Text>   
        </View>
    )
}

const styles=StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      },
});