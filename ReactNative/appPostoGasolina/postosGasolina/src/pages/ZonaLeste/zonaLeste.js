import React,{useState, useEffect} from 'react';
import { View, Text, StyleSheet, ScrollView, Image, FlatList  } from 'react-native';

import firebase from '../../firebaseConnection/firebaseConnection';
import Listagem from './listagem';
import {Container, ViewLista} from './styles';

console.disableYellowBox=true;

export default function ZonaOeste() {
  const [postos, setPostos] = useState([]);

  //pegando do banco de dados os postos da zonaleste
  useEffect(()=> {
    async function dados(){
      await firebase.database().ref('zonaleste').on('value', (snapshot)=> {
        setPostos([]);

        snapshot.forEach((chilItem) => {
          let data = {
            key: chilItem.key,
            nome: chilItem.val().nome,
            gasolina: chilItem.val().gasolina,
            etanol: chilItem.val().etanol,
            endereco: chilItem.val().endereco
          };
          setPostos(oldArray => [...oldArray, data]);
        })
      });
    }

    dados();

  }, []);



 return (
   <Container>
      <ViewLista>

          <FlatList
              keyExtractor={item => item.key}
              data={postos}
              renderItem={({item}) =>  <Listagem data={item}  />  }
          />

      </ViewLista>
   </Container>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor:'#fff',   
  },
 
})