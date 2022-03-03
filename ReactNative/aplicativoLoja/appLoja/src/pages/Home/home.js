import React,{useState, useEffect} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput, TouchableWithoutFeedback, Keyboard, ScrollView, ActivityIndicator } from 'react-native';

import Icon from 'react-native-vector-icons/Feather';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';

import Filtro from '../../components/Filtro/index';
import ComponenteRoupas from '../../components/ComponenteRoupas';


import Lottie from 'lottie-react-native';
import Animaton from '../../assets/animation/animation.json';

export default function Home() {

    const navigation = useNavigation();
  

    function configPesquisa(){
        navigation.navigate('ConfigPesquisa');
    }

    function grid(){
        navigation.navigate('ConfigPesquisa');
    }


    useEffect(() => {
        
        function teste(){
            if(testando == true){
                <ActivityIndicator size={50}  color='#900'/>
            }
        }

    },[]);


 return (
    <ScrollView>

    
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>

    
        <View style={styles.container}>

        <View style={styles.header}>
                <TouchableOpacity style={styles.btnIconeGrid} onPress={grid}>
                    <Icon name='grid' color='#006400' size={18}/>
                </TouchableOpacity>
                

                <View style={styles.viewHeaderNomeLocal}>
                    <Text style={styles.textoHeaderNome}>Olá Vinicius</Text>
                    <Text style={styles.textoHeaderLocal}>São Paulo, BR</Text>
                </View>
            
                <TouchableOpacity style={styles.btnIconeGrid}>
                    <Icon name='grid' color='#006400' size={18}/>
                </TouchableOpacity>
        </View>

         <View style={{flexDirection:'row', alignItems:"center", justifyContent:'center'}}>
            <View style={styles.viewInput}>
                
                    <Icon name='search' color='#666' size={18}/>
        
            
                <TextInput style={styles.input}  underlineColorAndroid='transparent'/>
            </View>

       
                <TouchableOpacity style={styles.btnConfig} onPress={configPesquisa}>
                    <Icon name='sliders' color='#fff' size={18}/>
                </TouchableOpacity>
            </View>
            
            <View style={{alignItems:"center", justifyContent:'center'}}>

                <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#55a630', '#2b9348', '#007f5f']} style={styles.viewPromocao}>


                <Image source={require('../../img/mulhercomsacola.png')} style={styles.imgPromocao}/>

                    <View style={styles.viewTextosPromocao}>
                        <Text style={styles.textoPromocao}> Grande Promoção </Text>
                        <Text style={styles.textoDescricaoPromocao}> Aproveita esta promoção </Text>
                        <Text style={styles.textoDescricaoPromocao}> estamos com disconto  </Text>
                        <Text style={styles.textoDescricaoPromocao}>de 50% nos produtos.  </Text>
                        
                    </View>
                

                    

                </LinearGradient>

            </View>


            <View style={{width:'100%', height:100, alignItems:'center', justifyContent:'center' }}>
                <Filtro/>
            </View>
        
            <ComponenteRoupas/>

            
       
         

            
        </View>
    </TouchableWithoutFeedback>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:'#ececf1'
    },
    header:{
        backgroundColor:'#ececf1',
        height: 120,
        alignItems:'center',
        justifyContent:'space-around',
        paddingTop:20,
        flexDirection:'row'
    },
    textoHeaderNome:{
        fontFamily:'ArchivoNarrow-Medium',
        color: '#666',
        fontSize:15
    },
    textoHeaderLocal:{
        fontFamily:'ArchivoNarrow-Medium',
        fontSize:17
    },
    btnIconeGrid:{
        backgroundColor:'#fff',
        height: 40,
        width: 40,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:50
    },
    viewHeaderNomeLocal:{
        alignItems:'center',
    },
    input:{
        backgroundColor:'#fff',
        width: 200,
        height: 40,
        fontSize:14,
        fontFamily:'ArchivoNarrow-Regular',
    },
    viewInput:{
        alignItems:'center',
        justifyContent:'space-around',
        flexDirection:'row',
        backgroundColor:'#fff',
        width: 280,
        height: 40,
        elevation:1,
        borderRadius:15, 
    },
    btnConfig:{
        backgroundColor:'#006400',
        width: 40,
        height: 40,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:10, 
        marginLeft:10
    },
    viewPromocao:{
        width: 380,
        height: 150,
        marginTop:50, 
        borderRadius:40,
        alignItems:'center',
        justifyContent:'space-around',
        flexDirection:'row'
    },
    imgPromocao:{
        height: 180,
        width: 200,
        marginBottom:30,
        marginLeft:25
    },
    viewTextosPromocao:{
        alignItems:'center',
        justifyContent:'center',
        width: 200,
        marginLeft: 10,
        marginRight:20,
        height: 100
    },
    textoPromocao:{
        color: '#fff',
        fontSize:18,
        fontWeight:'bold',
        marginLeft:30
    },
    textoDescricaoPromocao:{
        color: '#fff',
        fontSize:15,
        marginLeft:30
    }
});

//#fffffc
//#006400
//#55a630', '#2b9348', '#007f5f