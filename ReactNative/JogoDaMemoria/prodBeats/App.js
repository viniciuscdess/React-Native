import React from 'react';
import { View, Text } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import Home from './src/pages/Home';
import JogoDaVelha from './src/pages/JogoDaVelha';
import JogoDaMemoria  from './src/pages/JogoDaMemoria';

const Drawer = createDrawerNavigator();

export default function App() {
  
 return (
  <NavigationContainer>
    <Drawer.Navigator>
      <Drawer.Screen  name='Home' component={Home}/>
      <Drawer.Screen  name='JogoDaVelha' component={JogoDaVelha}/>
      <Drawer.Screen  name='JogoDaMemoria' component={JogoDaMemoria}/>
    </Drawer.Navigator>
  </NavigationContainer>
  );
}