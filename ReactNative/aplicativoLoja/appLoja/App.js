import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {Collapse,CollapseHeader, CollapseBody, AccordionList} from 'accordion-collapse-react-native';


import Routes from './src/routes';
 
export default function App() {
  return (
    <NavigationContainer>
        <StatusBar
            backgroundColor='transparent'
            barStyle='dark-content'
            translucent={true}
          />
     
         <Routes/>
      
    </NavigationContainer>
   );
 }