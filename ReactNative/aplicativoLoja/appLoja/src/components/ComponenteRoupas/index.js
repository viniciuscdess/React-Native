import React,{useState, useEffect} from 'react';
import { View, Text, StyleSheet, FlatList, ActivityIndicator, Image } from 'react-native';

import firebase from '../../services/firebaseConnection';
import ListaRoupas from './listaRoupas';
import Filtro from '../Filtro/index';
import Lottie from 'lottie-react-native';
import Shop from '../../assets/animation/shop.json';

export default function ComponenteRoupas() {

    

    const [roupas, setRoupas] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function dados(){
            await firebase.database().ref('produtos').once('value', (snapshot) => {
                //setRoupas([]) zera a lista para nao duplicar toda vez q add novos produtos
                setRoupas([]);
                snapshot.forEach((childItem) => {
                    let data = {
                        key: childItem.key,
                        nome:childItem.val().nome,
                        marca:childItem.val().marca,
                        valor:childItem.val().valor,
                        filtro:childItem.val().filtro,
                    };
                    //pega todos os produtos
                    setRoupas(oldArray => [...oldArray, data]);
                   
                });
               
                setLoading(false);
            })
           
        }
        dados();
    },[]);

 return (
   <View style={styles.container}>



{loading ? (
    

    <View style={{alignItems:'center', justifyContent:'center', backgroundColor:'#ececf1',  }}>
         <Lottie  resizeMode='contain' style={{width:200, height:200}} source={Shop} autoPlay loop/>
    </View>

    

       
 
        
      ) 
    :
      <View style={{backgroundColor:'#ececf1'}}> 
         
        
         <FlatList
                    keyExtractor={item => item.key}
                    data={roupas}
                    renderItem={({item}) => ( <ListaRoupas data={item} />)}
                    numColumns={2}
                    showsVerticalScrollIndicator={false}
                    
                />
      </View>
    
    }
      
            
        
        
       
   </View>
  );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:'#ececf1'
    }
})