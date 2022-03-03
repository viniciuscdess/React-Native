import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';
import Slider from '@react-native-community/slider';
import CheckBox from '@react-native-community/checkbox';



export default function ConfigPesquisa() {
    const [toggleCheckBox, setToggleCheckBox] = useState(false)
    const navigation = useNavigation();

    function voltar(){
        navigation.goBack();
    }

    function limpar(){
        alert('Em manutenção!');
    }


 return (
    <ScrollView>
    <View style={styles.container}>

            <View style={styles.header}>
                <TouchableOpacity onPress={voltar}>
                    <Icon name='chevron-left' color='#000' size={25}/>
                </TouchableOpacity>
                
                <Text style={styles.textoHeader}>FILTROS</Text>

                <TouchableOpacity onPress={limpar}>
                    <Text style={styles.textoLimpar}>Limpar</Text>
                </TouchableOpacity>
            </View>
            
            <Text style={styles.textoDivisão}>
                Modo de entrega
            </Text>

            <View style={styles.viewModoDeEntrega}>
                <TouchableOpacity style={styles.btnModoDeEntrega}>
                    <Text style={styles.textoBotoes}>Entrega</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btnModoDeEntrega}>
                    <Text style={styles.textoBotoes}>Pra retirar</Text>
                </TouchableOpacity>
            </View>

            <Text style={styles.textoDivisão}>
                Ordenar por
            </Text>

            <View style={styles.viewOrdernar}>

                <View style={{alignItems:'center', justifyContent:'center'}}>
                    <TouchableOpacity style={styles.viewCirculoOrdenar}>
                        <Icon name='shuffle' color='#006400' size={25}/>
                    </TouchableOpacity>
                    <Text style={styles.textoOrdernar}>Ordenação</Text>
                    <Text style={styles.textoOrdernar}>aleatoria</Text>
                </View>

                <View style={{alignItems:'center', justifyContent:'center'}} >
                    <TouchableOpacity style={styles.viewCirculoOrdenar} >
                        <Icon name='clock' color='#006400' size={25} />
                    </TouchableOpacity>
                    <Text style={styles.textoOrdernar} >Tempo de</Text>
                    <Text style={styles.textoOrdernar} >entrega</Text>
            
                </View>

                <View style={{alignItems:'center', justifyContent:'center'}}>
                    <TouchableOpacity style={styles.viewCirculoOrdenar}>
                        <Icon name='package' color='#006400' size={25}/>
                    </TouchableOpacity>
                    <Text style={styles.textoOrdernar}>Taxa de</Text>
                    <Text style={styles.textoOrdernar}>entrega</Text>
                </View>


            </View>

            <View style={styles.viewOrdernar}>

                <View style={{alignItems:'center', justifyContent:'center'}}>
                    <TouchableOpacity style={styles.viewCirculoOrdenar}>
                        <Icon name='dollar-sign' color='#006400' size={25}/>
                    </TouchableOpacity>
                    <Text style={styles.textoOrdernar}>Preço</Text>
                    
                </View>

                <View style={{alignItems:'center', justifyContent:'center'}} >
                    <TouchableOpacity style={styles.viewCirculoOrdenar} >
                        <Icon name='map-pin' color='#006400' size={25} />
                    </TouchableOpacity>
                    <Text style={styles.textoOrdernar} >Distância</Text>
                
            
                </View>

                <View style={{alignItems:'center', justifyContent:'center'}}>
                    <TouchableOpacity style={styles.viewCirculoOrdenar}>
                        <Icon name='star' color='#006400' size={25}/>
                    </TouchableOpacity>
                    <Text style={styles.textoOrdernar}>Avaliação</Text>
                    
                </View>


            </View>


            <Text style={styles.textoDivisão}>Distância</Text>
            <Text style={styles.textoDistanciaKM}>Menos de 48km</Text>

            <View style={styles.viewDistancia}>
                <Text style={{marginLeft:20}}>1km</Text>
                <Text style={{marginRight:20}}>100km</Text>
            </View>

            <View style={{alignItems:'center', justifyContent:'center'}}>
                <Slider
                    style={{width: 380, height: 40}}
                    minimumValue={0}
                    maximumValue={1}
                    minimumTrackTintColor="#006400"
                    maximumTrackTintColor="#666"
                />
            </View>
        
            <Text style={styles.textoDivisão}>Taxa de Entrega</Text>
            <View style={styles.viewModoDeEntrega}>
                <TouchableOpacity style={styles.btnValorEntrega}>
                    <Text style={styles.textoBotoes}>Gratís</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btnValorEntrega}>
                    <Text style={styles.textoBotoes}>até R$ 5,00</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btnValorEntrega}>
                    <Text style={styles.textoBotoes}>até R$ 10,00</Text>
                </TouchableOpacity>
            </View>

            <Text style={styles.textoDivisão}>Filtros Especiais</Text>
            <View style={styles.viewFiltrosEspeciais}>
                
                <View style={{flexDirection:'row', alignItems:'center', }}>
                    <View style={styles.viewIconEstrela}>
                        <Icon name='star' size={20} color='#000'/>
                    </View>

                    <Text style={styles.textoFiltrosEspeciais}>Super-Restaurantes</Text>
                </View>
  

                <CheckBox
                    disabled={false}
                    value={toggleCheckBox}
                    onValueChange={(newValue) => setToggleCheckBox(newValue)}
                    style={{marginRight:10}}
                />
            </View>

            <View style={styles.viewFiltrosEspeciais}>
                
                <View style={{flexDirection:'row', alignItems:'center', }}>
                    <View style={styles.viewIconEstrela}>
                        <Icon name='package' size={20} color='#000'/>
                    </View>

                    <Text style={styles.textoFiltrosEspeciais}>Entrega Parceira</Text>
                </View>
  

                <CheckBox
                    disabled={false}
                    value={toggleCheckBox}
                    onValueChange={(newValue) => setToggleCheckBox(newValue)}
                    style={{marginRight:10}}
                />
            </View>

            <View style={styles.viewFiltrosEspeciais}>
                
                <View style={{flexDirection:'row', alignItems:'center', }}>
                    <View style={styles.viewIconEstrela}>
                        <Icon name='map-pin' size={20} color='#000'/>
                    </View>

                    <Text style={styles.textoFiltrosEspeciais}>Entrega Rastreável</Text>
                </View>
  

                <CheckBox
                    disabled={false}
                    value={toggleCheckBox}
                    onValueChange={(newValue) => setToggleCheckBox(newValue)}
                    style={{marginRight:10}}
                />
            </View>

            <View style={styles.viewFiltrosEspeciais}>
                
                <View style={{flexDirection:'row', alignItems:'center', }}>
                    <View style={styles.viewIconEstrela}>
                        <Icon name='map' size={20} color='#000'/>
                    </View>

                    <Text style={styles.textoFiltrosEspeciais}>Aceita agendamento</Text>
                </View>
  

                <CheckBox
                    disabled={false}
                    value={toggleCheckBox}
                    onValueChange={(newValue) => setToggleCheckBox(newValue)}
                    style={{marginRight:10}}
                />
            </View>


    </View>
   </ScrollView>
  );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:'#fff',
    },
    header:{
        backgroundColor:'#fff',
        height: 100,
        width: '100%',
        alignItems:'center',
        justifyContent:'space-around',
        flexDirection:'row',
        paddingTop:20
    },
    textoHeader:{
        fontSize:22,
        fontFamily:'ArchivoNarrow-Bold',
        color: '#000'
    },
    textoLimpar:{
        fontSize:16,
        color: '#666',
        fontFamily:'ArchivoNarrow-SemiBold'
    },
    textoDivisão:{
        fontSize:20,
        marginLeft:15,
        marginTop:20,
        fontFamily:'ArchivoNarrow-Bold',
    },
    viewModoDeEntrega:{
        flexDirection:'row',
        marginLeft:15,
        marginTop:10
    },
    btnModoDeEntrega:{
        borderWidth:0.70,
        width: 80,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:10,
        marginRight:10,
        height: 25,
        borderColor:'#ccc'
    },
    viewOrdernar:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-around',
        marginBottom:15
    },
    viewCirculoOrdenar:{
        backgroundColor:'#00640055',
        width: 70,
        height: 70,
        borderRadius:50,
        alignItems:'center',
        justifyContent:'center',
        marginTop: 10,
        marginLeft:10,
        marginRight:10,
        marginBottom:5
    },
    textoOrdernar:{
        fontSize:15,
        fontFamily:'ArchivoNarrow-SemiBold',
        color: '#006400'
    },
    btnValorEntrega:{
        borderWidth:0.70,
        width: 100,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:10,
        marginRight:10,
        height: 25,
        borderColor:'#ccc'
    },
    textoBotoes:{
        fontSize:15,
        fontFamily:'ArchivoNarrow-Regular'
    },
    textoDistanciaKM:{
        marginLeft:15,
        color: '#666'
    },
    viewDistancia:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    },
    viewDistanciaKm:{
        width: 300,
        backgroundColor:'#fff',
        height: 5,
        marginTop:10
    },
    viewFiltrosEspeciais:{
        flexDirection:'row',
        marginLeft:15,
        backgroundColor:'#fff',
        height: 50,
        alignItems:'center',
        justifyContent:'space-between'
    },
    viewIconEstrela:{
        marginRight:10,
    },
    textoFiltrosEspeciais:{
        fontSize:18,
        fontFamily:'ArchivoNarrow-Regular'
    }

})