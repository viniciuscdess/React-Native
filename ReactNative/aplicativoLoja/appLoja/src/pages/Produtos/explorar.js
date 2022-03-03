import React,{useState} from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather'
import { useNavigation } from '@react-navigation/native';

import { Container, Listagem,Texto, Header,TextoHeader,Bottao } from './styles';
import Filtro from '../../components/Filtro/index';



console.disableYellowBox = true;

export default function Explorar() {
  const navigation = useNavigation();

  //lista de produtos e caracteristicas dos produtos(preço, marca etc...)
  const [produtos, setProdutos] = useState([
    {id:'1', nome:'Camiseta Infantil Preta  ', preco:30, marca:'Hering', desconto:50, codigoProduto:'5D61NM2EN2', tamanho:'P', img: require('../../img/camisetapreta.png'), parcela:3, valorMes:0},
    {id:'2', nome:'Camiseta Branca ', preco:30, marca:'Vans', desconto:30, codigoProduto:'1D32CC2MN2', tamanho:'M', img: require('../../img/camiseta.png'),parcela:4, valorMes:0},
    {id:'3', nome:'Camiseta Amarela ', preco:30.00, marca:'Adidas', desconto:10, codigoProduto:'5A22DC2LN2', tamanho:'GG', img: require('../../img/camisetamarela.png'),parcela:5, valorMes:0},
    {id:'4', nome:'Camiseta Vermelha ', preco:30.00, marca:'Nike', desconto:50, codigoProduto:'5K762A22CN8', tamanho:'M',img: require('../../img/camisetavermelha.png') ,parcela:2, valorMes:0, categoria:'camiseta'},
    {id:'5', nome:'calça ', preco:30.00, marca:'Nike', desconto:50, codigoProduto:'5K762A22CN8', tamanho:'M',img: require('../../img/calca.png') ,parcela:2, valorMes:0, categoria:'calc'},
    
  ]);

  //lista de filtros
  const [filtros, setFiltros] = useState([
    {id:'1', name:'Filtrar' , icone:<Icon name='sliders' size={18} color='#023e8a'/>},
    {id:'2', name:'calca'},
    {id:'3', name:'camisetas estampadas '},
    {id:'4', name:'casacos '},
    {id:'5', name:'chinelos '},
    {id:'6', name:'calca'},

  ]);

  //abrir o menu do drawer
  function abrirMenu(){
    navigation.openDrawer();
  }

  //abrir seu carrinho pessoal
  function abrirCarrinho(){
    navigation.navigate('CarrinhoDeCompras')
  }

 return (
    <Container>

      
      <Header>
        <Bottao onPress={abrirMenu}>
          <Icon name='menu' color='#fff' size={20}/>
        </Bottao>
       
        <TextoHeader>Explorar</TextoHeader>

        <Bottao onPress={abrirCarrinho}>
          <Icon name='shopping-cart' color='#fff' size={20}/>
        </Bottao>
 
      </Header>



    <Filtro/>
       


     

    </Container>
  );
}
//horizontal={true}