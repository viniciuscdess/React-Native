import React, {useState} from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';

export default function CarrinhoDeCompras({route}) {

  const navigation = useNavigation();

  const nome = route.params?.nome;
  const preco = route.params?.preco;
  const img = route.params?.img;


  function abrirMenu(){
    navigation.openDrawer();
  }


 return (
   <View style={styles.container}>

    <View style={styles.header}>
        <TouchableOpacity onPress={abrirMenu}>
          <Icon name='menu' color='#fff' size={20}/>
        </TouchableOpacity>

        <Text style={styles.textoHeader}>Carrinho de Compras</Text>
        
        <View style={{marginBottom:10}}>

          <View style={{backgroundColor:'#fff', alignItems:'center', justifyContent:"center", marginLeft:5, }}>
            <Text style={{fontSize:12,  fontWeight:'bold'}}>10</Text>
          </View>
           
          <TouchableOpacity >
            <Icon name='shopping-cart' color='#fff' size={20} />
          </TouchableOpacity>
        </View>
    
    </View>

    <View style={styles.viewCardProduto}>

      <View style={styles.viewImg}>
        <Image source={img} style={styles.img}/>
      </View>
     
      <Text style={styles.textoNomeProduto}>{nome}</Text>
      <Text style={styles.textoPreco}>R$ {preco}</Text>

      <View style={{flexDirection:'row',  marginTop:20, alignItems:'center', justifyContent:'center'}}>

        <TouchableOpacity style={styles.btnLixo}>
          <Icon color='#000' size={20} name='trash'/>
        </TouchableOpacity>

        <View style={{alignItems:'center', alignContent:'flex-end'}}>
            <View style={styles.viewContagem}>
              <TouchableOpacity>
                <Text style={styles.textoMenos}>-</Text>
              </TouchableOpacity>
              
              <Text style={styles.textoContagem}>1</Text>

              <TouchableOpacity>
                <Text style={styles.textoMais}>+</Text>
              </TouchableOpacity>
              
            </View>
        </View>
      </View>
      

  
      <Text style={styles.textoPrecoFinal}>Preço Final: <Text style={{fontSize:18, fontWeight:'bold'}}>R$ {preco} </Text></Text>

      
    </View>


   </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
  },
  header:{
    backgroundColor:'#0077b6',
    height: 100,
    alignItems:'center',
    flexDirection:'row',
    paddingTop:35,
    justifyContent:'space-around'
  },
  textoHeader:{
    fontSize:23,
    color: '#fff',
    fontFamily:'ArchivoNarrow-Bold',
  },
  viewCardProduto:{
    width: 180,
    height: 320,
    margin: 10,
    marginTop:20,
    borderRadius:5,
    backgroundColor:'#e5e5e5'
  },
  viewImg:{
    alignItems:'center',
    justifyContent:'center'
  },
  img:{
    height: 150,
    width: 150,
    marginTop:10
  },
  textoNomeProduto:{
    fontSize:16,
    color: '#000',
    marginLeft:5,
    marginTop:5,
    marginLeft:10,
    
  },
  textoPreco:{
    color:'#023e8a',
    fontSize:18,
    marginLeft:5,
    fontWeight:'bold',
    marginLeft:10
  },
  viewContagem:{
    flexDirection:'row',
    borderWidth:0.50,
    width: 100,
    alignItems:'center',
    justifyContent:'space-around',
    borderRadius:5,
    padding: 2,
    height: 32,
   
  },
  textoMenos:{
    fontSize:18,
    fontWeight:'bold'
  },
  textoContagem:{
    fontSize:18,
    fontFamily:'ArchivoNarrow-Regular',
  },
  textoMais:{
    fontSize:18,
    fontFamily:'ArchivoNarrow-Regular',
    color:'#008000'
  },
  btnLixo:{
    marginRight:10,
    borderWidth:0.50,
    width: 40,
    alignItems:'center',
    justifyContent:'center',
    height: 32,
    borderRadius:5
  },
  textoPrecoFinal:{
    fontSize:18,
    color: '#000',
    marginLeft:10,
    marginTop:10,
    fontFamily:'ArchivoNarrow-Regular',
  }
  
  
})

