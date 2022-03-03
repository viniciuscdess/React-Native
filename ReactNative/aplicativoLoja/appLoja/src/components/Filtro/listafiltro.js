import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function ListaFiltro({data}) {
    const navigation = useNavigation();

    function filtrar(){
        navigation.navigate('ProdutoFiltrado', {filtro2: data.filtro2});
    }

 return (
   <View style={styles.container}>
         <TouchableOpacity style={styles.btnFiltro} onPress={filtrar}>
            <Text style={styles.textoFiltro}>{data.filtro2}</Text>
        </TouchableOpacity>
        
   </View>
  );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        
        height: 60
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