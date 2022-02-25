import React,{useState} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

export default function JogoDaVelha() {



  var [circulo , setCirculo] = useState(require('../../img/circulo.png'));
  var [x , setX] = useState(require('../../img/x.png'));
  var [x2 , setX2] = useState(require('../../img/x.png'));
  var [x3, setX3] = useState(require('../../img/x.png'));
  var [x4 , setX4] = useState(require('../../img/x.png'));
  var [x5 , setX5] = useState(require('../../img/x.png'));
  var [x6 , setX6] = useState(require('../../img/x.png'));
  var [x7 , setX7] = useState(require('../../img/x.png'));
  var [x8 , setX8] = useState(require('../../img/x.png'));
  var [x9 , setX9] = useState(require('../../img/x.png'));
  
  function quadrado1() {
    if(x !== circulo){
      setX( require('../../img/circulo.png'))
    }
    else if(x && x2 && x3 == circulo){
      alert('teste')
    }
    else{
      setX( require('../../img/x.png'))
    }       
  }
  
  function quadrado2() {
    if(x2 !== circulo){
      setX2( require('../../img/circulo.png'))
    }
    else if(x && x2 && x3 == circulo){
      alert('teste')
    }
    else{
      setX2( require('../../img/x.png'))
    } 
       
  }
  
  function quadrado3() {
    if(x3 !== circulo){
      setX3( require('../../img/circulo.png'));

    
    }
    if(x && x2 && x3 == circulo){
        alert('teste')
      }
       
  }
  
  function quadrado4() {
    if(x4 !== circulo){
      setX4( require('../../img/circulo.png'))
    }
    else{
      setX4( require('../../img/x.png'))
    } 
       
  }
  
  function quadrado5() {
    if(x2 !== circulo){
      setX5( require('../../img/circulo.png'))
    }
    else{
      setX5( require('../../img/x.png'))
    } 
       
  }
  
  function quadrado6() {
    if(x6 !== circulo){
      setX6( require('../../img/circulo.png'))
    }
    else{
      setX6( require('../../img/x.png'))
    } 
       
  }
  
  function quadrado7() {
    if(x7 !== circulo){
      setX7( require('../../img/circulo.png'))
    }
    else{
      setX7( require('../../img/x.png'))
    } 
       
  }
  
  function quadrado8() {
    if(x8 !== circulo){
      setX8( require('../../img/circulo.png'))
    }
    else{
      setX8( require('../../img/x.png'))
    } 
       
  }
  
  function quadrado9() {
    if(x9 !== circulo){
      setX9( require('../../img/circulo.png'))
    }
    else{
      setX9( require('../../img/x.png'))
    } 
       
  }

 return (
   <View style={styles.container}>

     <View style={styles.componenteum}>
            <TouchableOpacity style={styles.quadradoum} onPress={quadrado1}>
              <Image source={x} style={styles.img}/>
            </TouchableOpacity>

            <TouchableOpacity style={styles.quadradotres} onPress={quadrado2}>
              <Image source={x2} style={styles.img}/>
            </TouchableOpacity>

            <TouchableOpacity style={styles.quadradodois} onPress={quadrado3}>
              <Image source={x3} style={styles.img}/>
            </TouchableOpacity>
     </View>

     <View style={styles.componenteum}>
            <TouchableOpacity style={styles.quadradoum} onPress={quadrado4}>
              <Image source={x4} style={styles.img}/>
            </TouchableOpacity>

            <TouchableOpacity style={styles.quadradotres} onPress={quadrado5}>
              <Image source={x5} style={styles.img}/>
            </TouchableOpacity>

            <TouchableOpacity style={styles.quadradodois} onPress={quadrado6}>
              <Image source={x6} style={styles.img}/>
            </TouchableOpacity>
     </View>

     <View style={styles.componenteum}>
            <TouchableOpacity style={styles.quadradofinal1} onPress={quadrado7}>
              <Image source={x7} style={styles.img}/>
            </TouchableOpacity>

            <TouchableOpacity style={styles.quadradofinal2} onPress={quadrado8}>
              <Image source={x8} style={styles.img}/>
            </TouchableOpacity>

            <TouchableOpacity style={styles.quadradofinal3} onPress={quadrado9}>
              <Image source={x9} style={styles.img}/>
            </TouchableOpacity>
     </View>


   </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems:'center',
    justifyContent:'center'
  },
  componenteum:{
    flexDirection:'row'
  },
  quadradoum:{
    width:100,
    height: 100,
    borderRightWidth:5,
    borderColor:'#000',
    borderBottomWidth:5,
    alignItems:'center',
    justifyContent:'center'
  },
  quadradodois:{
    width:100,
    height: 100,
    borderColor:'#000',
    borderLeftWidth:5,
    borderBottomWidth:5,
    alignItems:'center',
    justifyContent:'center'
  },
  quadradotres:{
    width:100,
    height: 100,
    borderColor:'#000',
    borderBottomWidth:5,
    alignItems:'center',
    justifyContent:'center'
  },
  
  quadradofinal1:{
    width:100,
    height: 100,
    borderRightWidth:5,
    borderColor:'#000',
    alignItems:'center',
    justifyContent:'center'
  },
  quadradofinal2:{
    width:100,
    height: 100,
    borderColor:'#000',
    alignItems:'center',
    justifyContent:'center'
  },
  quadradofinal3:{
    width:100,
    height: 100,
    borderColor:'#000',
    borderLeftWidth:5,
    alignItems:'center',
    justifyContent:'center'
  },   
  img:{
    width: 50,
    height: 50
  }

})