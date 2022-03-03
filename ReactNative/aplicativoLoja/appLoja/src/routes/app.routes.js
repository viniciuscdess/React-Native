//quando estiver logado

import React from 'react';
import { View, Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';

import Home from '../pages/Home/home';
import ConfigPesquisa from '../pages/Home/configPesquisa';

import Explorar from '../pages/Produtos/explorar';
import ProdutoUnico  from '../pages/Produtos/produtoUnico';

import Contato from '../pages/Contato';

import CarrinhoDeCompras from '../pages/Carrinho/carrinhoDeCompras';

import ProdutoFiltrado from '../components/Filtro/produtoFiltrado';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


const icons = {
  Home:{
    name:'home'
  },
  Explorar:{
    name:'list-alt'
  },
  CarrinhoDeCompras:{
    name:'shopping-cart'
  },
  Contato:{
    name:'user'
  },

};


function StackScreen() {
  return(
    <Stack.Navigator initialRouteName='Explorar'>
        <Stack.Screen name='Explorar' component={Explorar}  options={{headerShown:false}} /> 
         <Stack.Screen name='Detalhe do produto' component={ProdutoUnico}  options={{headerShown:true}} /> 
  </Stack.Navigator>
  )

}

function StackScreenHome() {
  return(
    <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' component={Home}  options={{headerShown:false}} /> 
         <Stack.Screen name='ConfigPesquisa' component={ConfigPesquisa}  options={{headerShown:false}} />     
         <Stack.Screen name='ProdutoFiltrado' component={ProdutoFiltrado}  options={{headerShown:false}} />     
  </Stack.Navigator>
  )

}

function AppRoutes() {
  
 return (

    <Tab.Navigator  
        tabBarOptions={{
          style:{backgroundColor:'#ccc'},
          showLabel:false ,
          keyboardHidesTabBar:true,

          activeTintColor:'#006400',
          inactiveTintColor:'#666',

          tabStyle:{
            paddingBottom:5
          },
          
     
       
     }}
      screenOptions={({route}) =>
        ({
          tabBarIcon: ({color, size}) =>
          {
            const { name } = icons[route.name];
            return <Icon name={name} color={color} size={size} />
          }
        })}

     >
      <Tab.Screen  name='Home' component={StackScreenHome} options={{headerShown:false}}/>
      <Tab.Screen  name='Explorar' component={StackScreen} options={{headerShown:false}}/>   
      <Tab.Screen  name='CarrinhoDeCompras' component={CarrinhoDeCompras} options={{headerShown:false}}/>
      <Tab.Screen  name='Contato' component={Contato} options={{headerShown:false}}/>
    </Tab.Navigator>

  );
}

export default AppRoutes;