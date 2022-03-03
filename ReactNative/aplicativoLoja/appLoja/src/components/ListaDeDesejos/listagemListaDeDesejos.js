import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default function ListagemListaDeDesejos({data}) {
 return (
   <View style={styles.container}>

     <View style={styles.card}>
      

      <Image source={data.img} style={{width:80, height:80}}/>
      <Text style={styles.textoNome}>{data.nome}</Text>
      
     </View>
   
   </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
  },
  card:{
    margin: 10,
    width: 120,
    height: 150,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:10,
    backgroundColor:'#ccc',
    marginLeft:20

  },
  textoNome:{
    fontSize:14,
    fontFamily:'ArchivoNarrow-Regular',
    marginTop:5,
    color: '#000'
  }
})