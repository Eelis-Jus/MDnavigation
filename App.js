import 'react-native-gesture-handler'; 
import React from 'react';
import { PaperProvider} from 'react-native-paper';
import { StyleSheet} from 'react-native';
import CustomNavigationBar from './screens';
import  SecondScreen  from './secondscreen'
import  HomeScreen  from './homescreen'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


export default function App() {

  const Stack = createStackNavigator();


  return (
    <PaperProvider>
    <NavigationContainer>
    <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          header: (props) => <CustomNavigationBar {...props} />,
        }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={SecondScreen} />
      </Stack.Navigator>
  </NavigationContainer>
  </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
