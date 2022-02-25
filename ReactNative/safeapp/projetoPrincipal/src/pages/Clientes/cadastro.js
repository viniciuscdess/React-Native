import React, {useState, useEffect, useContext, useRef} from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView, TouchableOpacity, StatusBar, Keyboard} from 'react-native';

import {getStatusBarHeight} from 'react-native-status-bar-height';
import {useNavigation} from '@react-navigation/native';
import DatePicker from 'react-native-datepicker';
import { TextInputMask } from 'react-native-masked-text';
import {Picker} from '@react-native-picker/picker';

import api from '../../services/api';
import Icon from 'react-native-vector-icons/Feather';
import firestore from '@react-native-firebase/firestore';
import {AuthContext} from '../../contexts/auth';
import { func } from 'prop-types';

export default function Cadastro() {
  const [estadoCivil, setEstadoCivil] = useState();
  const [nome, setNome] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [cpf, setCpf] = useState('');
  const [matricula, setMatricula] = useState('');
  const [senha, setSenha] = useState('');
  const [convenio, setConvenio] = useState();
  const [endereço, setEndereço] = useState('');
  const [telefone,  setTelefone] = useState('');
  const [comentario,  setComentario] = useState('');
  const navigation = useNavigation('PaginaClientes');
  
  const {user} = useContext(AuthContext);


  const [cep, setCep] = useState('');
  const inputRef = useRef(null);
  const [cepUser, setCepUser] = useState(null);

  //const [time, setTime] = useState('');
  //var timeStamp = new Date(time);
  //time: timeStamp

  async function cadastrar(){
    await firestore().collection('clientes')
       .add({
         //data que foi cadastrado o cliente
        created: new Date(),
        //nome de qual conta esta logado
        autor: user.nome,
        //uid da conta que esta logado
        userId: user.uid,
        //informações do cliente
        nome: nome,
        senha: senha,
        convenio: convenio,
        cpf: cpf,
        matricula : matricula,
        endereço:endereço,
        telefone: telefone,
        comentario : comentario,
        estadoCivil: estadoCivil,
        dataNascimento: dataNascimento
       })
       .then(() => {
          alert('Cliente cadastrado com sucesso!');
          setNome('');
          setDataNascimento('');
          setCpf('');
          setMatricula('');
          setSenha('');
          setConvenio('');
          setEndereço('');
          setTelefone('');
          setComentario('');
          setEstadoCivil();
       })
       .catch((error) => {
           console.log(error);
       })
       navigation.goBack();
  }
     
  function voltar(){
    navigation.navigate('Clientes');
  }

  async function BuscarCep(){
    if(cep == ''){
      alert('Digite um cep valido');
      setCep('');
      return; //
    }

    try{
      
      const response = await api.get(`/${cep}/json`);
      console.log(response.data);
      setCepUser(response.data);
      Keyboard.dismiss(); //Garantir que o teclado sera fechado!
      
    }catch(error){
      console.log('ERROR: ' + error);
    }
  }

  function LimparCep(){
    setCep('');
    inputRef.current.focus();
    setCepUser(null);
  }
  
 return (
    <View style={styles.container}>
      <ScrollView
      //tirar a barra de rolagem
      showsVerticalScrollIndicator={false}>

      <StatusBar
        backgroundColor='transparent'
        barStyle='light-content'
        translucent={true} />

      <View style={styles.header}>
        <View style={styles.viewVoltar}>
          <TouchableOpacity style={styles.botaoVoltar} onPress={voltar}>
            <Icon name="arrow-left" color="#fff" size={30}/>
          </TouchableOpacity> 
        </View>
       
        <View style={styles.viewTextoPrincipal}>
          <Text style={styles.tituloPrincipal}>Cadastro</Text>
        </View>
      </View>
      
      
      <Text style={styles.subTitulos}>Dados Pessoais</Text>
      <Text style={styles.titulos}>Nome:</Text>
      <TextInput
        style={styles.input}
        underlineColorAndroid='transparent'
        placeholder='Ex: João da Silva'
        value={nome}
        onChangeText={(texto) => setNome(texto)}
        autoCapitalize = 'sentences'
        returnKeyType='next'
        placeholderTextColor='#ddd'
        maxLength={300}
        autoCorrect={false}
      />

      <Text style={styles.titulos}>Data de Nascimento:</Text>
        <DatePicker
          style={{
            width:'90%',
            marginLeft:15,
            marginBottom:10,
            backgroundColor:'#fff'}}
          date={dataNascimento}
          value={dataNascimento}
          format='DD/MM/yy'
          minDate="10-01-1900"
          maxDate="31-12-2021"
          onDateChange={setDataNascimento}
        />
      
     
      <Text style={styles.titulos}>CPF:</Text>
      <TextInputMask
        placeholder='065.231.321-21'
        style={styles.input}
        type={'cpf'}
        value={cpf}
        onChangeText={(texto) => setCpf(texto)}
        returnKeyType={'next'}
        placeholderTextColor='#ddd'
        maxLength={300}
        autoCorrect={false}
      />

      <Text style={styles.titulos}>Telefone:</Text>
      <TextInputMask
      placeholder='(55) 43 9652-3291'
        style={styles.input}
        type={'cel-phone'}
        options={{
          maskType: 'BRL',
          withDDD: true,
          dddMask: '(99) '
        }}
        value={telefone}
        onChangeText={(texto) => setTelefone(texto)}
        placeholderTextColor='#ddd'
        maxLength={300}
        autoCorrect={false}
      />

      <Text style={styles.titulos}>Estado Civil:</Text>
      <View style={styles.picker}>
        <Picker
          selectedValue={estadoCivil}
          onValueChange={(value) =>
          setEstadoCivil(value)} >
          <Picker.Item label="Solteiro" value="solteiro" />
          <Picker.Item label="Casado" value="casado" />
          <Picker.Item label="Separado" value="separado" />
          <Picker.Item label="Divorciado" value="divorciado" />
          <Picker.Item label="Viuvo" value="viuvo" />
        </Picker>
      </View>
     
      <Text style={styles.subTitulos}>Dados Bancarios</Text>

      <Text style={styles.titulos}>Matricula:</Text>
      <TextInput
        style={styles.input}
        underlineColorAndroid='transparent'
        placeholder='Ex: 123456789000'
        value={matricula}
        onChangeText={(texto) => setMatricula(texto)}
        keyboardType='numeric'
        returnKeyType='next'
        placeholderTextColor='#ddd'
        maxLength={300}
        autoCorrect={false}
      />
      
      <Text style={styles.titulos}>Senha:</Text>
      <TextInput
        style={styles.input}
        underlineColorAndroid='transparent'
        placeholder='Ex: SenhaPadrao000'
        value={senha}
        onChangeText={(texto) => setSenha(texto)}
        returnKeyType='next'
        placeholderTextColor='#ddd'
        maxLength={300}
        autoCorrect={false}
      />

      <Text style={styles.titulos}>Convenio:</Text>
      <View style={styles.picker}>
        <Picker
          selectedValue={convenio}
          onValueChange={(value) =>
          setConvenio(value)} >
          <Picker.Item label="Prefeitura" value="prefeitura" />
          <Picker.Item label="GovernoEstado" value="governoEstado" />
        </Picker>
      </View>
      
      <Text style={styles.subTitulos}>Endereço</Text>
      <Text style={styles.titulos}>Logradouro:</Text>

      <View style={{flexDirection:'row'}}>
        <TextInput
          style={styles.inputCep}
          underlineColorAndroid='transparent'
          placeholder='Ex: 86063-250'
          value={cep}
          onChangeText={(texto) => setCep(texto)}
          keyboardType="numeric"
          ref={inputRef}
          placeholderTextColor='#ddd'
          maxLength={300}
          autoCorrect={false}
        />
        <TouchableOpacity style={styles.botaoCep2} onPress={BuscarCep}>
          <Text style={styles.textoBuscadorCep}>Buscar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botaoCep} onPress={LimparCep}>
          <Text style={styles.textoBuscadorCep}>Limpar</Text>
        </TouchableOpacity>       
      </View>
      { cepUser &&
        <View style={styles.viewCep}>
          <Text style={styles.textoCep}>CEP: {cepUser.cep}</Text>
          <Text style={styles.textoCep}>Logradouro: {cepUser.logradouro}</Text>
          <Text style={styles.textoCep}>Bairro: {cepUser.bairro}</Text>
          <Text style={styles.textoCep}>Cidade: {cepUser.localidade}</Text>
          <Text style={styles.textoCep}>Estado: {cepUser.uf}</Text>
        </View>
      }

      <Text style={styles.subTitulos}>Oberservaçao</Text>
      
      <Text style={styles.titulos}>Comentarios/Observação:</Text>
      <TextInput
        multiline = {true}
        style={styles.inputComentario}
        underlineColorAndroid='transparent'
        placeholder='Ex: Este cliente pediu para falar com a vó dele'
        value={comentario}
        onChangeText={(texto) => setComentario(texto)}
        autoCapitalize = 'sentences'
        returnKeyType='next'
        placeholderTextColor='#ddd'
        maxLength={300}
        autoCorrect={false}
      />

      <View style={styles.viewBotao}>
        <TouchableOpacity style={styles.botao} onPress={cadastrar}> 
          <Text style={styles.botaoTexto}>Cadastrar</Text>
        </TouchableOpacity>
      </View>
      
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#fff',
  },
  header:{
    backgroundColor:'#16A085',
    flexDirection:'row',
    alignItems:'center',
    paddingTop: 0 + getStatusBarHeight(),
  },
  viewVoltar:{
    justifyContent:'center',
  },
  textoVoltar:{
    fontSize:20,
    color:'#fff',
    marginLeft:5
  },
  viewTextoPrincipal:{
    justifyContent:'center',
    alignItems:'center',
    marginLeft:70
  },
  tituloPrincipal:{
    fontSize:40,
    fontWeight:'bold',
    color:'#fff',
    justifyContent:'center',
    alignItems:'center',
  },
  subTitulos:{
    fontSize:23,
    color:'#333333',
    fontWeight:'bold',
    marginLeft:15,
    marginBottom:5,
    marginTop:5,
    alignItems:'center'
  },
  titulos:{
    fontSize:16,
    color:'#333333',
    marginLeft:15,
    marginTop:2,
  },
  input:{
    borderWidth:0.7,
    borderRadius:9, 
    marginLeft:15,
    marginBottom:10,
    marginRight:10,
    fontSize:14,
    backgroundColor:'#fff',
    height:40
  },
  viewBotao:{
    height:90,
    alignItems:'center',
    justifyContent:'flex-end',
  },
  botao:{
    height:50,
    width:'80%',
    backgroundColor:'#16A085',
    alignItems:'center',
    justifyContent:'center',
    borderRadius:6,
    margin:20,
    
  },
  botaoTexto:{
    fontSize:20,
    fontWeight:'bold',
    color:'#fff'
  },
  botaoVoltar:{
    marginLeft:10
  },
  inputComentario:{
    borderWidth:0.7,
    borderRadius:9,
    marginLeft:15,
    marginBottom:10,
    marginRight:10,
    fontSize:14,
    backgroundColor:'#fff',
    height:150
  },
  dataNascimento:{
    backgroundColor:'#293241',
    width:'90%',
    color:'#fff',
    margin:90
  },
  picker:{
    marginLeft:15,
    marginBottom:10,
    marginRight:10,
    borderWidth:0.7,
    borderRadius:9,
    justifyContent:'center',
    height:45
  },
  botaoCep:{
    marginRight:2 ,
    backgroundColor:'#900',
    width: 65,
    borderRadius:5,
    alignItems:'center',
    justifyContent:'center'
    
  },
  botaoCep2:{
    marginRight:2 ,
    width: 65,
    backgroundColor:'#000077',
    borderRadius:5,
    alignItems:'center',
    justifyContent:'center'
  },
  textoBuscadorCep:{
    fontWeight:'700',
    fontSize:15,
    color: '#fff'
  },
  inputCep:{
    width: 230,
    borderWidth:0.70,
    borderRadius:5,
    marginLeft: 15,
    marginRight:5,
    height: 40
  },
  viewCep:{
    width: 300,
    height: 120,
    marginLeft: 5,
    marginTop:5,
  },
  textoCep:{
    fontSize:16,
    color:'#000',
    marginLeft:15,
    marginTop:2,
  },
})