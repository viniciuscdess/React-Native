import React,{useState} from 'react';
import { View, FlatList, Image, Text } from 'react-native';

import ListagemListaDeDesejos from './listagemListaDeDesejos';

export default function ListaDeDesejos() {

    const [lista, setLista] = useState([
        {id:'1', nome:'Camiseta Preta', detalhe:'camiseta preta lisa infantil', img:require('../../img/camisetapreta.png') },
        {id:'2', nome:'Camiseta Amarela', detalhe:'camiseta amarela infantil', img:require('../../img/camisetamarela.png') },
        {id:'3', nome:'Camiseta Vermelha', detalhe:'camiseta vermelha lisa ', img:require('../../img/camisetavermelha.png') }
    ]);


 return (
   <View>
     
        <FlatList
          showsHorizontalScrollIndicator={false}
          keyExtractor={item => item.key}
          data={lista}
          renderItem={({item}) => ( <ListagemListaDeDesejos data={item}  />  )}
          horizontal={true}
        />
   </View>
  );
}