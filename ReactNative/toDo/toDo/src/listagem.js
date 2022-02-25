import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';

import FontAwesome from 'react-native-vector-icons/MaterialIcons';


export default function Listagem({data , deletar, mudar}) {
 return (
   <View style={styles.container}>
    
       <View style={styles.componente}>

            <View style={styles.viewBotao}>
                <TouchableOpacity onPress={() => deletar(data.key)}>
                    <FontAwesome name="delete" size={18} color ='#fff'/>
                </TouchableOpacity>
            </View>


            <View style={styles.viewTexto}>   
                <TouchableWithoutFeedback onPress={() => mudar(data)}>
                    <Text style={styles.texto}>
                        {data.tarefa}
                    </Text>
                </TouchableWithoutFeedback>
            </View>



        </View>

   </View>
  );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:'#fff',
    },
    componente:{
    flex: 1,
    flexDirection:'row',
    alignItems:'center'
    },
    texto:{
        fontSize:15, 
        color:'#fff',
        paddingLeft: 10,
    },
    textoExcluir:{
        fontSize:15, 
        color:'#000',
    },
    viewBotao:{
        backgroundColor:'#000',
        height: 47,
        alignItems:'center',
        justifyContent:'center',
        width: 45,
        marginRight: 5,
        marginLeft:10,
        borderRadius:5,
    },
    viewTexto:{
        margin: 10,
        padding: 10,
        borderRadius:5,
        height: 47,
        width: 300,
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'row',
        backgroundColor:'#000'
    }
})