import React,{useState, useEffect} from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';

import firebase from '../../firebaseConnection/firebaseConnection';
import {Container, ViewNomePostos, ViewImg, ViewValores, ViewArea, NomeDoPosto, Texto, Valor} from './styles';


export default function Listagem({data}) {

  
 return (
   <Container>
     <ScrollView showsVerticalScrollIndicator={false}>
    
    <ViewNomePostos>
      <NomeDoPosto> 
        {data.endereco} 
      </NomeDoPosto>
    </ViewNomePostos>
   

    <ViewValores>

    <ViewArea>
      <ViewImg>
        <Image source={require('../../img/etanol.png')}/>
        <Valor> R${data.etanol} </Valor>
      </ViewImg>

      <Texto>Etanol</Texto>
    </ViewArea>

      <ViewArea>

        <ViewImg>
        <Image source={require('../../img/gasolina.png')}/>
          <Valor> R${data.gasolina} </Valor>
        </ViewImg>
       
        <Texto>Gasolina</Texto>
      </ViewArea>

    </ViewValores>

     </ScrollView>
   </Container>
  );
}