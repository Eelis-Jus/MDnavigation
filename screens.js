
import React from 'react';
import { Appbar, Menu } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';  
import { getHeaderTitle } from '@react-navigation/elements';


export default function CustomNavigationBar({
  navigation,
  route,
  options,
  back,
}) {
 
const title = getHeaderTitle(options, route.name);

const showButton = route.name === 'Home';

  return (
    <Appbar.Header>
        {back ? <Appbar.BackAction onPress={navigation.goBack} /> : null} 
      <Appbar.Content title={"MD Nav Demo"} />
      {showButton && (
        <Appbar.Action
          icon="arrow-right" 
          onPress={() => navigation.navigate('Details')} 
        />
      )}
    </Appbar.Header>
  );
}

