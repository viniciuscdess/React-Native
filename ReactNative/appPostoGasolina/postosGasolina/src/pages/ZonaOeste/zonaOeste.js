import React,{useState, useEffect} from 'react';
import { View, Text, StyleSheet, ScrollView, Image, FlatList } from 'react-native';

import firebase from '../../firebaseConnection/firebaseConnection';
import Listagem from './listagem';
import {Container, ViewLista} from './styles';

console.disableYellowBox=true;

export default function ZonaOeste() {
  const [postos, setPostos] = useState([]);

  useEffect(()=> {
    async function dados(){
      await firebase.database().ref('zonaoeste').on('value', (snapshot)=> {
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
  titulo:{
    fontSize:25,
    fontWeight:'bold',
  },
  endereco:{
    fontSize:17,
    color:'#0A0A0A',
  },
  viewEndereco:{
    borderTopWidth:2, 
    borderColor:'#ccc',
    marginRight: 10,
    marginLeft: 10,
    marginTop:10,
    width:300,
    alignItems:'center',
    justifyContent:'center'
  },
  viewTitulo:{
    alignItems:'center',
    justifyContent:'center',
    margin:10
  },
  postosZO:{
    fontSize:15,
    color:'#000'
  }, 
  postosZS:{
    fontSize:15,
    color:'#0A0A0A'
  },  
  postosZN:{
    fontSize:15,
    color:'#0A0A0A'
  },  
  postosZL:{
    fontSize:15,
    color:'#0A0A0A'
  },  
  gasolinaValorZO:{
    fontSize:20,
    fontWeight:'bold',
    color:'#0A0A0A'
  },  
  etanolValorZO:{
    fontSize:20,
    fontWeight:'bold',
    color:'#0A0A0A',
    paddingLeft: 5,
  },  
  postosValorZS:{
    fontSize:20,
    fontWeight:'bold',
    color:'#0A0A0A'
  },  
  postosValorZN:{
    fontSize:20,
    fontWeight:'bold',
    color:'#0A0A0A'
  },  
  postosValorZL:{
    fontSize:20,
    fontWeight:'bold',
    color:'#0A0A0A'
  },  
  containerZO:{
    width: 180,
    height: 120,
    borderRadius:5,
    margin: 5,
    alignItems:'center',
    justifyContent:'center',
    borderWidth:0.70,
    borderColor:'#0A0A0A'
  },
  containerZS:{
    width: 180,
    height: 120,
    borderRadius:5,
    margin: 5,
    alignItems:'center',
    justifyContent:'center',
    borderWidth:0.70,
    borderColor:'#0A0A0A'
  },
  containerZN:{
    width: 180,
    height: 120,
    borderRadius:5,
    margin: 5,
    alignItems:'center',
    justifyContent:'center',
    borderWidth:0.70,
    borderColor:'#0A0A0A'
  },
  containerZL:{
    width: 180,
    height: 120,
    borderRadius:5,
    margin: 5,
    alignItems:'center',
    justifyContent:'center',
    borderWidth:0.70,
    borderColor:'#0A0A0A'
  },
})