import React from 'react';
import { View, Text, Button, Image, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import {Container, Titulo, Texto, Imagem, Card, ViewAlinhandoImg, Header, ViewImagem, Copy, TextoProgresso} from './styles';

console.disableYellowBox;

export default function Home() {
    const navigation = useNavigation();

    function manutencao(){
      alert('Em manutenção');
    }

    function navegarJogoDavelha(){
      navigation.navigate('JogoDaVelha')
    }

    function navegarJogoDaMemoria(){
      //navigation.navigate('Ferramentas')
      navigation.navigate('JogoDaMemoria')
    }

 return (
   <Container>
      
      <Header>
        <TouchableOpacity onPress={() => alert('Em manutenção')}>
          <Icon name='tune' color='#999' size={22}/>
        </TouchableOpacity>
        

        <View style={{flexDirection:'row', alignItems:'center'}}>
          
            <Icon name='stars' color='#909' size={20} />
         
          
            <Titulo style={{paddingLeft:5}}>
                Prod.Beats
            </Titulo>
        </View>
      
        <TouchableOpacity onPress={() => alert('Em manutenção')}>
          <Icon name='search' color='#999' size={22}/>
        </TouchableOpacity>
        
      </Header>
 
      <TextoProgresso>In progress</TextoProgresso>


          <Card>
            <ViewAlinhandoImg>

              <ViewImagem>
                <Imagem source={require('../../img/carta.png')}/>
              </ViewImagem>

              <Texto>Jogo da memoria</Texto>
            </ViewAlinhandoImg>

            <TouchableOpacity onPress={navegarJogoDaMemoria}>
              <Icon name='arrow-right' size={45} color='#000'/>
            </TouchableOpacity>
           
          </Card>

          <Card>
            <ViewAlinhandoImg>

              <ViewImagem>
                <Imagem source={require('../../img/x.png')}/>
              </ViewImagem>

              <Texto>Jogo da velha</Texto>
            </ViewAlinhandoImg>

            <TouchableOpacity onPress={navegarJogoDavelha}>
              <Icon name='arrow-right' size={45} color='#000'/>
            </TouchableOpacity>
           
          </Card>

          <Card>
            <ViewAlinhandoImg>

              <ViewImagem>
              <Icon name='warning' size={45} color='#FF0000'/>
              </ViewImagem>

              <Texto>Manutenção</Texto>
            </ViewAlinhandoImg>

            <TouchableOpacity onPress={manutencao}>
              <Icon name='arrow-right' size={45} color='#000'/>
            </TouchableOpacity>
           
          </Card>
          
            <View style={{alignItems:'flex-end', justifyContent:'flex-end'}}>
              <Copy> ©NephewCompany</Copy>
            </View>
           
     
          
   </Container>
  );
}

//toggleDrawer() para abrir o menu