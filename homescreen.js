import React , {useLayoutEffect}from "react"
import { StyleSheet,View,Text } from "react-native"
import { Appbar, Menu } from 'react-native-paper';
import { getHeaderTitle } from '@react-navigation/elements';
import  Ionicons  from '@expo/vector-icons/Ionicons'
export default function HomeScreen({navigation}){

  return(
        <View style={styles.container}>
         <Text>HomeScreen</Text>   
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