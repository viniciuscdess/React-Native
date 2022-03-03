import React,{useState, useEffect} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native';
import firebase from '../../services/firebaseConnection';
import ListaFiltro from './listafiltro';

import Lottie from 'lottie-react-native';
import Shop from '../../assets/animation/shop.json';

export default function Filtro() {

    const [filtros, setFiltros] = useState([]);
    const [filtros2, setFiltros2] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function dados(){
            await firebase.database().ref('filtros').child('filtrosCima').once('value', (snapshot) => {
                //setFiltros([]) zera a lista para nao duplicar toda vez q add novos produtos
                setFiltros([]);
                snapshot.forEach((childItem) => {
                    let data = {
                        key: childItem.key,
                        filtrosCima:childItem.val().filtrosCima,
                        filtro2:childItem.val().filtro2,
                    };
                    //pega todos os produtos
                    setFiltros(oldArray => [...oldArray, data]);
                });
                setLoading(false);
            })
        }
        dados();
    },[]);

  

 

 return (
   <View style={styles.container}>

      

{loading ? (
    

    <View style={{alignItems:'center', justifyContent:'center', backgroundColor:'#ececf1', height:'100%', width:'100%', marginTop:20 }}>
      
     <ActivityIndicator size={35} color='#ececf1'/>

    </View>

    

       
 
        
      ) 
    :
      <View style={{backgroundColor:'#ececf1'}}> 
         
        
         <FlatList
          showsHorizontalScrollIndicator={false}
          keyExtractor={item => item.key}
          data={filtros}
          renderItem={({item}) => ( <ListaFiltro data={item}  />  )}
          horizontal={true}
          
        />
      </View>
    
    }
       
   </View>
  );
}

const styles = StyleSheet.create({
    container:{

        height: 50
    },
    btnFiltro:{
        backgroundColor:'#B9BBC3',
        height: 35,
        width: 150,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:50,
        marginTop:10,
        marginLeft:15
    },
    textoFiltro:{
        color: '#fff',
        fontSize:18,
        fontFamily:'ArchivoNarrow-SemiBold'
    }
})

//#007f5f