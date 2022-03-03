import React,{useState, useEffect} from 'react';
import { View, Text, StyleSheet, FlatList, Button, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';

import Modal from "react-native-modal";

import ProdutoFiltradoLista from './produtoFiltradoLista';
import firebase from '../../services/firebaseConnection';

import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';

export default function ProdutoFiltrado({route}) {
    const navigation = useNavigation();
    const id = route.params?.id;
    const filtro2 = route.params?.filtro2;
    const [filtros, setFiltros] = useState(route.params?.filtro);
    const [coisas, setCoisas] = useState([]);

    const  [ isModalVisible ,  setModalVisible ]  =  useState ( false ) ;

    const  toggleModal  =  ( )  =>  { 
        setModalVisible ( ! isModalVisible ) ; 
      } ;

    useEffect(() => {
        async function dados(){
            await firebase.database().ref('produtos').orderByChild('filtro').equalTo(filtro2).once('value', (snapshot) => {
                //setFiltros([]) zera a lista para nao duplicar toda vez q add novos produtos
                setCoisas([]);
                snapshot.forEach((childItem) => {
                    let data = {
                        key: childItem.key,
                        filtro:childItem.val().filtro,
                        nome:childItem.val().nome,
                        valor:childItem.val().valor,
                    };
                    //pega todos os produtos
                    setCoisas(oldArray => [...oldArray, data]);
                })
            })
        }
        dados();
    },[]);

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
                })
            })
        }
        dados();
    },[]);



    function maisFiltros(){
        alert('Em manutenção');
    }

    function voltarHome(){
        navigation.navigate('Home');
    }

   

 return (
   <View style={styles.container}>

       <View style={styles.header}>
            <TouchableOpacity onPress={voltarHome}>
                <Icon name='arrow-left' color='#000' size={25}/>
            </TouchableOpacity>

           
            <Text style={styles.textoHeader}>Filtros</Text>

            <TouchableOpacity onPress = { toggleModal }>
                <Text style={styles.texoMaisFiltros}>mais filtros</Text>
            </TouchableOpacity>

           
                <Modal isVisible={isModalVisible} >
                    <View style={styles.viewModal}>
                        
                        <Text style={{fontSize:40, color:'red'}}>EM MANUTENÇÃO!</Text>
                        <Icon name='alert-triangle' size={80} color='red'/>
                    </View>
                    <Button title="Fechar modal" onPress={toggleModal} />
                </Modal>
       </View>
    
        <FlatList
            showsHorizontalScrollIndicator={false}
            keyExtractor={item => item.key}
            data={coisas}
            renderItem={({item}) => ( <ProdutoFiltradoLista data={item} route={route} />  )}
            numColumns={2}
            showsVerticalScrollIndicator={false}
        />
      

   </View>
  );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:'#ececf1'
    },
    header:{
        backgroundColor:'#ececf1',
        height: 100,
        alignItems:'center',
        justifyContent:'space-around',
        flexDirection:'row',
        borderBottomWidth:0.50,
        borderColor:'#ccc',
        paddingTop:35
    },
    textoHeader:{
        fontSize:20,
        fontFamily:'ArchivoNarrow-Bold'
    },
    texoMaisFiltros:{
        fontSize:18,
        color: '#666',
        fontFamily:'ArchivoNarrow-Bold',
    },
    viewModal:{
        backgroundColor:'#fff',
        width: 360,
        height: 500,
        borderRadius:10,
        alignItems:'center',
        marginBottom:10,
        justifyContent:'center'
    }
})