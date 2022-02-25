import React, {useState, useEffect, useRef} from 'react';
import { View, Text, StyleSheet, TextInput, TouchableWithoutFeedback, Keyboard, FlatList, TouchableOpacity } from 'react-native';
import firebase  from './src/firebaseConnection';

import Listagem from './src/listagem';


export default function App() {
  const inputRef = useRef(null);
  const [tarefa, setTarefa] = useState('');
  const [task, setTask] = useState([]);
  const [key, setKey] = useState('');

  async function enviar(){
    //função adicionar tarefa
    if(tarefa !== ''){

      if(key !== ''){
        await firebase.database().ref('tarefas').child(key).update({
          tarefa:tarefa
        });
        Keyboard.dismiss();
        setTarefa('');
        setKey('');
        alert('Editado com Sucesso')
        return;
        
      }

      let tarefas = await firebase.database().ref('tarefas');
      let chave = tarefas.push().key;

      tarefas.child(chave).set({
        tarefa: tarefa

      });
      alert('Tarefa adiciona com sucesso!')
      setTarefa('');
      Keyboard.dismiss();
    }
  }

  async function excluir(key){
    await firebase.database().ref('tarefas').child(key).remove();
    alert('Excluido com Sucesso')
  }

  async function editar(data){
    setTarefa(data.tarefa)
    inputRef.current.focus();
    setKey(data.key)
  }

  useEffect(()=> {
    async function dados(){
      await firebase.database().ref('tarefas').on('value', (snapshot)=> {
        setTask([]);

        snapshot.forEach((chilItem) => {
          let data = {
            key: chilItem.key,
            tarefa: chilItem.val().tarefa,
   
          };
          setTask(oldArray => [...oldArray, data].reverse());
        })
      })
    };

    dados();

  }, []);


 return (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    <View style={styles.container}>
      
        <View style={styles.viewTitulo}>
          <Text style={styles.titulo}> App toDo</Text>
        </View>
        

        <View style={styles.viewInput}>
          <TextInput 
            placeholder='digite sua tarefa...'
            style={styles.input}
            value={tarefa}
            underlineColorAndroid="transparent"
            onChangeText={(texto) => setTarefa(texto)}
            ref={inputRef}
          />

          <TouchableOpacity style={styles.btn} onPress={enviar}>
            <Text style={styles.btnTexto}>
              +
            </Text>
          </TouchableOpacity>
        </View>
        
        <View style={styles.viewLista}>
          <FlatList
          keyExtractor={item => item.key}
          data={task}
          renderItem={ ({item}) => ( <Listagem data={item}  deletar={excluir} mudar={editar}/> )  }
          />
        </View>
     

      
    </View>
   </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent:'flex-start'
  },
  viewTitulo:{
    alignItems:'center',
    justifyContent:'center'
  },
  titulo:{
    fontSize:19,
    margin: 10,
    fontWeight:'bold',
  },
  input:{
    borderWidth:0.70,
    width: 320,
    borderRadius:5,
    fontSize:15,
    height: 50
  },
  viewInput:{
    flexDirection:'row',
    marginLeft:10,
  },
  btn:{
    backgroundColor:'#000',
    marginLeft: 10,
    width: 30,
    height: 50,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:5
  },
  btnTexto:{
    color:'#fff',
    fontSize:15,
    fontWeight:'bold'
  },
  viewLista:{
    marginTop:8
  }
});
 