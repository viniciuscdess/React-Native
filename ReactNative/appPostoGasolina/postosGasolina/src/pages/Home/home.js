import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, TouchableOpacity,StatusBar, Image, FlatList } from 'react-native';
import {useNavigation} from '@react-navigation/native';

import firebase from '../../firebaseConnection/firebaseConnection';

import Listagem from './listagem';

export default function Home() {
  const navigation = useNavigation();
  
  function navegarZO(){
    navigation.navigate('ZonaOeste')
  }
  
  function navegarZN(){
    navigation.navigate('ZonaNorte')
  }
  
  function navegarZL(){
    navigation.navigate('ZonaLeste')
  }
  
  function navegarZS(){
    navigation.navigate('ZonaSul')
  }

  const [postos, setPostos] = useState([]);

  useEffect(()=> {
    async function dados(){
      await firebase.database().ref('data').on('value', (snapshot)=> {
        setPostos([]);

        snapshot.forEach((chilItem) => {
          let data = {
            key: chilItem.key,
            dia: chilItem.val().dia,
          };
          setPostos(oldArray => [...oldArray, data]);
        })
      });
    }
    dados();
  }, []);


 return (
   
  <View style={styles.container}>
  <StatusBar backgroundColor='#cccccc' barStyle="light-content" translucent={false} />

   

    <View style={styles.header}>
      <Text style={styles.textoHeader}>Postos de Gasolina</Text>
    </View>

    <View style={styles.componente}>

      <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-around'}}>
        <TouchableOpacity style={styles.viewZona} onPress={navegarZO}>
        <Image source={require('../../img/posto.png')} style={{width:50, height:50}}/>
            <Text style={styles.texto}>Zona Oeste</Text>
            <Text style={styles.textoQuantidade}>4 postos</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.viewZona} onPress={navegarZN}>
        <Image source={require('../../img/posto.png')} style={{width:50, height:50}}/>
            <Text style={styles.texto}>Zona Norte</Text>
            <Text style={styles.textoQuantidade}>4 postos</Text>
        </TouchableOpacity>
      </View>
      
      <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-around'}}>
        <TouchableOpacity style={styles.viewZona} onPress={navegarZL}>
        <Image source={require('../../img/posto.png')} style={{width:50, height:50}}/>
            <Text style={styles.texto}>Zona Leste</Text>
            <Text style={styles.textoQuantidade}>4 postos</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.viewZona} onPress={navegarZS}>
            <Image source={require('../../img/posto.png')} style={{width:50, height:50}}/>
            <Text style={styles.texto}>Zona Sul</Text>
            <Text style={styles.textoQuantidade}>4 postos</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        keyExtractor={item => item.key}
        data={postos}
        renderItem={({item}) =>  <Listagem data={item}  /> }
      />

    </View>
    

    
  </View>
  );
};

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor:'#ffffff',
  },
  componente:{
    flex:1,
    justifyContent:'flex-start',
    backgroundColor:'#e5e5e5',
    marginTop:10,
    alignItems:'center'
  },
  header:{
    backgroundColor:'#ffffff',
    alignItems:'center',
    justifyContent:'center',
    padding: 5,
    paddingTop:10
  },
  textoHeader:{
    fontSize:20,
    fontWeight:'bold',
    padding: 10,
    
  },
  viewZona:{
    backgroundColor:'#ffffff',
    width:140,
    height:160,
    margin: 15,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:4,
    elevation:2,
    
  },
  texto:{
    fontWeight:'bold',
    fontSize:14,
    
  },
  textoQuantidade:{
    fontSize:12,
    padding: 5,
    color: '#cccccc'
  },
  textoAtualizacao:{
    fontSize:12,
    padding: 5,
    color: '#878787'
  },

});