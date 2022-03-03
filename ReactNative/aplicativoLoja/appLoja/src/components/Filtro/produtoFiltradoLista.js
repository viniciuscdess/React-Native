import React,{useEffect, useState} from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';

import Filtro from './index';
import ComponenteRoupas from '../ComponenteRoupas';

import Icon from 'react-native-vector-icons/Feather';
import LinearGradient from 'react-native-linear-gradient';


export default function ProdutoFiltradoLista({data, route}) {
    const filtro2 = route.params?.filtro2;
 
    const filtro = data.filtro;

    return (
        <View style={styles.container}>


           
            
           
                    <View style={styles.card}>
                        <Image source={require('../../img/mulhermodeloverde.png')} style={styles.img}/>
                    </View>
    
                    <Text style={styles.textoNomeRoupa}>{data.nome}</Text>
    
                    <View style={styles.viewNomeValorIcon}>
                       
                        <Text style={styles.textoValor}>R$ {data.valor}.00</Text>
                        <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#55a630', '#2b9348', '#006400']} style={styles.viewIcon}>
                            <Icon name='heart' color='#fff' size={14}/>
                        </LinearGradient>
                   
                    </View>
        
    
        </View>
      );
    }
    
    const styles = StyleSheet.create({
        container:{
            flex: 1,
            backgroundColor:'#ececf1'
        },
        card:{
            width: 160,
            height: 250,
            margin: 10,
            marginTop:20,
            borderRadius:40,
            backgroundColor:'#B9BBC3',
            alignItems:'center',
            justifyContent:'flex-end',
            marginLeft:20
        },
        img:{
            height: 240,
            width: 100
        },
        viewNomeValorIcon:{
            flexDirection:'row'
     
        },
        textoNomeRoupa:{
            fontSize:18, 
            marginLeft:35,
            fontFamily:'ArchivoNarrow-Medium'
        },
        viewIcon:{
            marginLeft:50,
            borderRadius:50,
            height: 20,
            width: 20,
            alignItems:'center',
            justifyContent:'center'
        },
        textoValor:{
            fontSize:13, 
            marginLeft:35
        }
    })