import React,{useState, useEffect} from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';



export default function Listagem({data}) {
 return (
   <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
    
        <Text style={{fontSize:15, color:'#000'}}>Ultima Atualização {data.dia}</Text>

     </ScrollView>
   </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
   
  },
  viewNomePostos:{
    alignItems:'center',
    justifyContent:'center',
    borderBottomWidth:0.50,
    margin:10
  },
  nomeDoPosto:{
    paddingTop:10,
    fontSize:18,
    fontWeight:'bold',

  },
  viewValores:{
    flexDirection:'row',
    justifyContent:'space-around'
  },
  viewArea:{
    paddingTop:10,
    margin: 10,
    borderWidth:1,
    width:150,
    height:105,
    borderRadius:5,
    alignItems:'center',
    justifyContent:'center',
    
  },
  valor:{
    fontSize:16,
    fontWeight:'bold'
  },
  viewImg:{
    alignItems:'center',
    justifyContent:'center',
    flexDirection:'row'
  },
  texto:{
    fontSize:15
  },


  
})