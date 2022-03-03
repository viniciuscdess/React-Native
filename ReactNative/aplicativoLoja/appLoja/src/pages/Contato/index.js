import React,{useState, useEffect} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image, FlatList, TextInput } from 'react-native';

import ListaDeDesejos from '../../components/ListaDeDesejos';
import ListagemSaldo from './listagemSaldo';

import { useNavigation } from '@react-navigation/native';

import firebase from '../../services/firebaseConnection';



export default function Contato() {

  const navigation = useNavigation();

  function voltarHome(){
    navigation.navigate('Home');
  }


    const [codigos, setCodigos] = useState(true);

    useEffect(() => {
        async function dados(){
            await firebase.database().ref('codigos').once('value', (snapshot) => {
                //setRoupas([]) zera a lista para nao duplicar toda vez q add novos produtos
                setCodigos([]);
                snapshot.forEach((childItem) => {
                    let data = {
                        key: childItem.key,
                        testando:childItem.val().testando,
                        codigo1:childItem.val().codigo1,
                    };
                    //pega todos os produtos
                    setCodigos(oldArray => [...oldArray, data]);
                   
                });
               
                
            })
           
        }
        dados();
    },[]);


 return (
   <ScrollView>
    <View style={styles.container}>



      <View style={styles.header}>
        <Text style={styles.textoHeader}>Oá, Vinicius</Text>

        <View style={styles.viewFotoUser}>
          <Image source={require('../../img/user.png')} style={{width:50, height:50}}/>
        </View>
      </View>

        <View style={styles.componente}>

          <View style={styles.viewSuaConta}>
            <TouchableOpacity style={styles.btnDivido}>
              <Text style={styles.texto}>Sua Conta</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btnDivido}>
              <Text style={styles.texto}>Seus Pedidos</Text>
            </TouchableOpacity>
          </View>
          

          <TouchableOpacity style={styles.btn}>
            <Text style={styles.texto}>Sua Lista de Desejo</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btn}>
            <Text style={styles.texto}>Comprar Novamente</Text>
          </TouchableOpacity>

        </View>


      
        <View style={styles.viewSeusPedidos}>
          <Text style={styles.textoSubtitulo}>Seus Pedidos</Text>
          
          <Text style={styles.textoSemPedidos}>Olá, você não tem pedidos recentes.</Text>

          <TouchableOpacity style={styles.btnNormal} onPress={voltarHome}>
            <Text style={styles.textoBtnHome}>Voltar à página Inicial</Text>
          </TouchableOpacity>
        </View>


        <View style={styles.viewListaDeDesejos}>
          <Text style={styles.textoSubtitulo}>Sua lista de desejos</Text>

          <ListaDeDesejos/>
                 
        </View>

        <View>

          <Text style={styles.textoSubtitulo}>Sua Conta</Text>

          <TouchableOpacity style={styles.btnNormal} >
            <Text style={styles.textoBtnHome}>Ver historico de navegação</Text>
          </TouchableOpacity>
          
        </View>
          
       <View>
       <Text style={styles.textoSubtitulo}>Continue Comprando</Text>

          <View style={styles.imgTeste}>
            <Image source={require('../../img/camisetapreta.png')} style={{width:80, height:80}}/>
            <Text style={styles.textoImg}>Camiseta Preta </Text>
          </View>

          <Text style={styles.textoHistorico}>Ver historico</Text>

       </View>

        <Text style={styles.textoSubtitulo}>Saldo de vale presente</Text>

        <Text style={{fontSize:14, color:'#006400' , marginLeft:20}}>Você ainda não tem saldo</Text>

        <FlatList
          keyExtractor={item => item.key}
          data={codigos}
          renderItem={({item}) => ( <ListagemSaldo data={item} />)}
          showsVerticalScrollIndicator={false}
        />

       

    </View>
   </ScrollView>
  );
}

//mensagem automatica, caso tenha pedido ou não. (renderezição condicional)


const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#ececf1'
  },
  header:{
    backgroundColor:'#ececf1',
    width: '100%',
    alignItems:'center',
    height: 150,
    justifyContent:'space-around',
    flexDirection:'row',
    paddingTop:40
  },
  textoHeader:{
    fontSize:25,
    color: '#000',
    fontFamily:'ArchivoNarrow-Bold'
  },
  viewFotoUser:{
    width: 70,
    height: 70,
    borderRadius:35,
    backgroundColor:'#ccc',
    alignItems:'center',
    justifyContent:'center'
  },
  componente:{
    backgroundColor:'#ececf1',
    width: '100%',
    height: 150,
    alignItems:'center',

  },
  btn:{
    borderWidth:0.70,
    borderColor:'#ccc',
    width:370,
    alignItems:'center',
    justifyContent:'center',
    height: 40,
    borderRadius:0.50,
    margin:2,
    backgroundColor:'#666',
    borderRadius:5,
  },
  btnDivido:{
    borderWidth:0.70,
    borderColor:'#ccc',
    width:185,
    alignItems:'center',
    justifyContent:'center',
    height: 50,
    borderRadius:5,
    margin:2,
    backgroundColor:'#666'
  },
  viewSuaConta:{
    flexDirection:"row",
  },
  texto:{
    fontSize:15,
    color: '#fff',
    fontFamily:'ArchivoNarrow-Bold'
  },
  viewSeusPedidos:{
    backgroundColor:'#ececf1',
    height: 150,
    width: '100%', 
  },
  textoSubtitulo:{
    fontSize:20,
    marginTop:10,
    marginLeft:20,
    fontFamily:'ArchivoNarrow-Bold'
  },
  textoSemPedidos:{
    fontSize:15,
    marginLeft:20,
    marginTop:5,
    fontFamily:'ArchivoNarrow-Regular'
  },
  btnNormal:{
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#666',
    marginTop:15,
    height: 40,
    width: 300,
    marginLeft:50,
    borderRadius:5,
    marginBottom:10
  },
  textoBtnHome:{
    fontFamily:'ArchivoNarrow-Regular',
    fontSize:16,
    color: '#fff'
  },
  viewListaDeDesejos:{
    backgroundColor:'#ececf1',
    height: 200
  },
  imgTeste:{
    margin: 10,
    width: 120,
    height: 150,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:10,
    backgroundColor:'#ccc',
    marginLeft:20
  },
  textoImg:{
    fontSize:14,
    fontFamily:'ArchivoNarrow-Regular',
    marginTop:5,
    color: '#000'
  },
  textoHistorico:{
    fontSize:16,
    marginLeft:20,
    fontFamily:'ArchivoNarrow-Bold',
    color: '#006400',
  },
  viewModal:{
    backgroundColor:'#fff',
    padding:20,
    borderRadius:10
  },
  btnCodigoPresente:{
    backgroundColor:'#000',
    width: 40,
    height: 40,
    borderRadius:10,
    alignItems:'center',
    justifyContent:'center'
  }
})