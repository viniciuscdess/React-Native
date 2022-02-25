import React,{useEffect, useReducer, useRef, useState} from 'react';
import { View, Text, Button, StyleSheet, Animated, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';

console.disableYellowBox=true;

export default function JogoDaMemoria() {
    const navigation = useNavigation();
    const buttonRef = useRef(null);
    const buttonRef2 = useRef(null);

    const ButtonAnimated2 = Animatable.createAnimatableComponent(TouchableOpacity);

    var [img , setImg] = useState(require('../../img/carta.png'));
    var [img2 , setImg2] = useState(require('../../img/carta.png'));
    var [img3 , setImg3] = useState(require('../../img/carta.png'));
    var [img4 , setImg4] = useState(require('../../img/carta.png'));

    var [img5 , setImg5] = useState(require('../../img/disco.png'));
    var [img6 , setImg6] = useState(require('../../img/microfone.png'));
    var [img7 , setImg7] = useState(require('../../img/carta.png'));

    // buttonRef.current.shake(); -- usar quando a pessoa errar a senha
    // buttonRef.current.flipInX();
    // setImg(require('../../img/disco.png'));
    
    var [pontuacao , setPontuacao] = useState(1);
 
  function btn(){
    if(img !== img6){
      setImg(require('../../img/microfone.png'));
      
      if(img2 && img == img6){
        alert('Você Acertou!');
        setPontuacao(pontuacao + 1);
      }
    } 
    else{
      setImg(require('../../img/carta.png'))
    }
  }
  
  function btn2(){
    if(img2 !== img6){
      setImg2(require('../../img/microfone.png'));

      if(img2 && img == img6){
        alert('Você Acertou!');
        setPontuacao(pontuacao + 1);
      }
    }
    else{
      setImg2(require('../../img/carta.png'));
    }
  }




  function btn3(){
    if(img3 !== img5){
      setImg3(require('../../img/disco.png'));

      if(img3 && img4 == img5){
        alert('Você Acertou!');
        setPontuacao(pontuacao + 1);
      }
    }
    else{
      setImg3(require('../../img/carta.png'));
    }  
  }

  function btn4(){
    if(img4 !== img5){
      setImg4(require('../../img/disco.png'));

      if(img4 && img3 == img5){
        alert('Você Acertou!');
        setPontuacao(pontuacao + 1);
      }
    }
    else{
      setImg4(require('../../img/carta.png'));
    }
    
  }
  

 return (
   <View style={styles.container}>

        <View style={{flexDirection:'row'}}>
          <ButtonAnimated2
            ref={buttonRef2}
            animation='flipInY'
            style={styles.botaoImg}
            onPress={btn}
          >
            <Image source={img} style={{width:50, height:50}}/>
          </ButtonAnimated2>

          <ButtonAnimated2
          ref={buttonRef2}
            animation='flipInY'
            style={styles.botaoImg}
            onPress={btn2}
          >
            <Image source={img2} style={{width:50, height:50}}/>
          </ButtonAnimated2>
        </View>
       

        <View style={{flexDirection:'row'}}>
          <ButtonAnimated2
            ref={buttonRef2}
            animation='flipInY'
            style={styles.botaoImg}
            onPress={btn3}
          >
            <Image source={img3} style={{width:50, height:50}}/>
          </ButtonAnimated2>

          <ButtonAnimated2
            ref={buttonRef2}
            animation='flipInY'
            style={styles.botaoImg}
            onPress={btn4}
          >
            <Image source={img4} style={{width:50, height:50}}/>
          </ButtonAnimated2>
        </View>
   

        <Text style={styles.pontuacao}>Você acertou: <Text style={{color:'red'}}>{pontuacao} vezes</Text></Text>
   </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems:'center',
    justifyContent:'center',
  },
  texto:{
    fontSize:40,
    textAlign:'center'
  },
  botao:{
    width: '70%',
    height: 30,
    backgroundColor:'#121212',
    alignItems:'center',
    justifyContent:'center'
  },
  botaoImg:{
    height:100, 
    width:80,
    color:'#000' , 
    backgroundColor:'#ccc', 
    alignItems:'center', 
    justifyContent:'center', 
    borderRadius:8, 
    margin:7
  },
  botaoImg2:{
    height:100, 
    width:80,
    color:'#000' , 
    backgroundColor:'#ccc', 
    alignItems:'center', 
    justifyContent:'center', 
    borderRadius:8, 
    margin:10
  },
  pontuacao:{
    fontSize:20,
    fontWeight:'bold',
    margin: 10
  }
})

//toggleDrawer() para abrir o menu