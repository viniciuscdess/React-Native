import React,{useState} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';

import Icon from 'react-native-vector-icons/Feather';
import Modal from "react-native-modal";

export default function ListagemSaldo({data}) {

  const [input, setInput]  = useState('');
  const  [ isModalVisible ,  setModalVisible ]  =  useState ( false ) ;

  const [tester, setTester] = useState(false);

  const  toggleModal  =  ( )  =>  { 
      setModalVisible ( ! isModalVisible ) ; 
    } ;

    function verificarCodigoPresente(){
      if(input !== data.codigo1){
        alert('Codigo errado!');
      }
      else if(input == data.codigo1){
        setTester(true);
        setInput('');
        setModalVisible ( ! isModalVisible ) ; 
        alert('Codigo adicionado com sucesso!');
      }
    }

    

 return (
   <View style={styles.container}>

    {
      tester ?
      (
        <Text style={{fontSize:20, color:'red', marginLeft:20}}>{data.codigo1}</Text>
      )
      :
      <Text style={{fontSize:20, color:'red', marginLeft:20}}>nao tem </Text>
    }
    

     <TouchableOpacity style={styles.btnNormal} onPress={toggleModal}>
            <Text style={styles.textoBtnHome}>Resgatar vale-presente</Text>
      </TouchableOpacity>

        <Modal isVisible={isModalVisible}>

          <TouchableOpacity onPress={toggleModal}>
            <Icon size={30} color='#fff' name='x' style={{marginBottom:10, marginLeft:'90%'}}/>
          </TouchableOpacity>

          <View style={styles.viewModal}>                      
            <Text style={{fontSize:20, color:'#000' ,  fontFamily:'ArchivoNarrow-Bold'}}>Digite o codigo do vale-presente</Text>


            <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
              <TextInput placeholder='EX: ADBY1237V' style={{ width:280, marginRight:5}} value={input} onChangeText={(texto) => setInput(texto)}/>

              <TouchableOpacity style={styles.btnCodigoPresente} onPress={verificarCodigoPresente}>
                <Icon size={20} color='#fff' name='send' />
              </TouchableOpacity>

            </View>
          </View>

        </Modal>



   </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1
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