import React,{useState, useEffect} from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function ListaPaginaInicial({data}) {

  const navigation = useNavigation();
  var [preco, setPreco] = useState(data.preco);
  var [parcela, setParcela] = useState(data.parcela);
  var [valorMes, setValorMes] = useState(1);
  
  var [likeada, setLikeada] = useState((require('../../img/vazio.png')));
  var [coracao, setCoracao] = useState(require('../../img/coracao.png'));

  useEffect(() => {
    async function loadData(){
      await AsyncStorage.getItem('likeada').then((value) => {
        setLikeada(value);
      })
    }
    loadData();
  },[]);




  //dar e retirar o like de um produto
  async function like(){
  
    if(likeada !== coracao){
     
      setLikeada(require('../../img/coracao.png'));
      await AsyncStorage.setItem('likeada', likeada);
    }
    else if(likeada == coracao){
      
      setLikeada(require('../../img/vazio.png'));
      await AsyncStorage.setItem('likeada', likeada);
    }
  }

  //ir para pagina do produto unico, passando o nome e as caracteristicas do produto
 function verProduto(){
  navigation.navigate('Detalhe do produto', {nome:data.nome, preco:data.preco, marca:data.marca, desconto:data.desconto, codigoProduto:data.codigoProduto, tamanho:data.tamanho, img:data.img});
  }
  
 

  //quando abrir a tela ele vai calcular o preco do produto e em quantas vezes da pra parcelar
  useEffect(() => {
    function valorParcela(){
      var precoParcela = preco / parcela;
  
      setValorMes(precoParcela);
  }
  valorParcela();
  })



  useEffect(() => {
    function mandaProdutos(){
      navigation.navigate('Filtros',{id: data.id,nome:data.nome, preco:data.preco, marca:data.marca, desconto:data.desconto, codigoProduto:data.codigoProduto, tamanho:data.tamanho, img:data.img, categoria:data.categoria});
    }
    mandaProdutos();
  },[]);


 return (
  <View style={styles.container}>
    


    <TouchableOpacity style={styles.card} onPress={verProduto}>

      <View style={styles.viewFavorito}>
        <Text style={styles.textoMarca}>{data.marca}</Text>

        <TouchableOpacity onPress={like}>
         <Image source={likeada} style={{height:30, width:30, marginTop:2}}/>
        </TouchableOpacity>
        
      </View>

    
      <View style={styles.viewImg}>
        {<Image source={data.img} style={styles.img}/>}
      </View>
      

      <View style={styles.viewProdutoPreco}>
        <Text style={styles.textoNomeDoProduto}>{data.nome}</Text>
        <Text style={styles.textoPreco}>R${data.preco} </Text>
        
        <TouchableOpacity >
        <Text style={styles.texoParcela}>ou {data.parcela}x de R${valorMes}</Text>
        </TouchableOpacity>

      </View>

    </TouchableOpacity>                 
    
      

  </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
  },
  card:{
    width: 180,
    height: 320,
    margin: 10,
    marginTop:20,
    borderRadius:5,
    backgroundColor:'#e5e5e5'
  },
  viewFavorito:{
    alignItems:'center',
    justifyContent:'space-between',
    flexDirection:'row',
    marginTop:2,
    marginRight:2
  },
  textoMarca:{
    fontSize:14,
    color: '#666',
    marginLeft:5,
    fontFamily:'ArchivoNarrow-Bold',
  },
  viewImg:{
    alignItems:'center',
    justifyContent:'center'
  },
  img:{
    height: 150,
    width: 150,
    marginTop:5
  },
  viewProdutoPreco:{
    alignItems:'flex-start',
    justifyContent:'flex-end',
    marginTop:50
  },
  textoNomeDoProduto:{
    fontSize:18,
    color: '#000',
    marginLeft:5,
    marginTop:5,
    marginLeft:10,
    fontFamily:'ArchivoNarrow-Medium'
  },
  textoPreco:{
    color:'#023e8a',
    fontSize:18,
    marginLeft:5,
    marginLeft:10,
    fontWeight:'bold'
  },
  texoParcela:{
    fontSize:13,
    marginLeft:5,
    color: '#666',
    marginLeft:10,
    fontFamily:'ArchivoNarrow-Medium'
  }
})

{/* <Text style={styles.textoMarca}>{data.marca}</Text>
<Text style={styles.textoPreco}>Por: <Text style={styles.valorPreco}>R${data.preco}</Text></Text> */}