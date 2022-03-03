import React,{useState, useEffect} from 'react';
import { View, Text, StyleSheet, Image, ScrollView, Animated, TouchableOpacity, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { List } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';


export default function ProdutoUnico({route}) {

  const navigation = useNavigation();

  //pegando produtos por route
  const nome = route.params?.nome;
  const preco = route.params?.preco;
  const codigoProduto = route.params?.codigoProduto;
  const tamanho = route.params?.tamanho;
  const desconto = route.params?.desconto;
  const [imagem , setImgem] = useState(route.params?.img);


  //para fazer as contas do preco do produto
  var [precoComDesconto, setPrecoComDesconto] = useState(1);
  var [valorDesconto, setValorDesconto] = useState(1);
  var [quantidade , setQuantidade] = useState(1);
  var [valorDaCompra, setValorDaCompra] = useState(preco * quantidade);


  const [expanded, setExpanded] = useState(true);
  const handlePress = () => setExpanded(!expanded);

  //ver o tamanho da roupa que serve no usario
  function encontreSeuTamanho(){
    alert('Em manutenção');
  }

  //para adicionar ao carrinho
  function addCarrinho(){
    navigation.navigate('CarrinhoDeCompras', {nome:route.params?.nome, preco:route.params?.preco, img:route.params?.img })
  }

  //aumentar a quantidade de produtos
  function aumentar(){
    
    var quantMais = quantidade + 1;
    setQuantidade (quantidade + 1);
    
    cacular(quantMais);

  }

  //funcao para calcular quanto vai dar mais de um produto
  function cacular(quant){
      setValorDaCompra((preco - valorDesconto) * quant);
  }

  //diminuir a quantidade de produtos
  function diminuir(){
    var quantMenos = quantidade - 1;
    setQuantidade (quantidade - 1);
    cacular(quantMenos);
  }


  //escolher as cores das camisetas
  function trocarCorVermelha(){
    setImgem(require('../../img/camisetavermelha.png'))
  }

  function trocarCoPreta(){
    setImgem(require('../../img/camisetapreta.png'))
  }

  function trocarCorAmarela(){
    setImgem(require('../../img/camisetamarela.png'))
  }

  function trocarCorBranca(){
    setImgem(require('../../img/camiseta.png'))
  }

  
  //useEffect - executa o desconto e o preco do produto com a tela incia
  useEffect(() => {
    function calculaPorcetagem(){
      var vlrDesconto = ((desconto / 100) * preco);
      var descontinho = preco - vlrDesconto;
      setPrecoComDesconto(descontinho);
      setValorDesconto(vlrDesconto);
      
    }
    calculaPorcetagem();
    cacular(1);
  })

 return (
   <ScrollView>
    

    <View style={styles.container}>

        <View style={styles.viewImg}>
          <Image source={imagem} style={styles.img}/>
        </View>

        
        <View style={styles.viewPromocao}>
          <Text style={styles.textoPromocao}>{desconto}% OFF</Text>
        </View>

        <Text style={styles.nomeDoProduto}>{nome}</Text>
        <Text style={styles.codigoDoProduto}>{codigoProduto}</Text>

        <View style={styles.viewPrecoEcor}>

          <View style={{flexDirection:'row', marginBottom:5}}>
            <TouchableOpacity style={styles.viewCorPreta} onPress={trocarCoPreta}>

            </TouchableOpacity>

            <TouchableOpacity style={styles.viewCorVermelha} onPress={trocarCorVermelha}>

            </TouchableOpacity>

            <TouchableOpacity style={styles.viewCorAmarela} onPress={trocarCorAmarela}>

            </TouchableOpacity>

            <TouchableOpacity style={styles.viewCorBranca} onPress={trocarCorBranca}>

            </TouchableOpacity>
          </View>
          

          <View>
            <Text style={styles.textoPrecoNormal} >De: R${preco}</Text>
            <Text style={styles.textoValorComDesconto}>Por: R$ {precoComDesconto}</Text>
          </View>
            
         
        </View>

      
        <Text style={styles.nomeCor}>Cor: PRETA</Text>

        <View style={styles.viewTamanho}>
          <View style={styles.viewTamanhoLetra}>
            <Text style={styles.textoTamanhoLetra}> {tamanho} </Text>
          </View>
        
          <TouchableOpacity style={styles.viewEncontreSeuTamanho} onPress={encontreSeuTamanho}>
              <Icon name='straighten' size={20} color='#4361ee'/>
              <Text style={styles.textoEncontreSeuTamanho}> Encontre seu tamanho </Text>
          </TouchableOpacity>
        </View>

        <List.Section>
            <List.Accordion
              title="Detalhes Do Produto" style={styles.listAcordion} titleStyle={{color:'#666', fontSize:18}}   >

              <List.Item 
                title="Camiseta masculina confeccionada em algodão super cotton, malha com peso maior e espessura mais grossa. Em modelagem comfort, que confere um caimento mais solto e mais largo, o modelo possui mangas curtas, decote redondo e barra reta. Clássicas e indispensáveis no guarda-roupas masculino, as camisetas Hering combinam com shorts, bermudas e calças, seja para looks   casuais ou esportivos. Invista!" 
              titleNumberOfLines={50}
              titleStyle={{fontSize:15}}
              />

            </List.Accordion>

            <List.Accordion
              title="Caractéristicas" style={styles.listAcordion} titleStyle={{color:'#666', fontSize:18}
              }  descriptionStyle={{color:'#900'}}  >

                <List.Item 
                  title="Caracteristicas do produto" 
                  titleNumberOfLines={20}
                  titleStyle={{fontSize:0.50, color:'#fff' }}
                />

                <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                  <Text style={{marginLeft:15, fontSize:17}}>Cor: </Text>
                  <Text style={{marginRight:15, fontSize:17}}> Preta</Text>
                </View>

                <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                  <Text style={{marginLeft:15, fontSize:17}}>Peso e dimensões: </Text>
                  <Text style={{marginRight:15, fontSize:17}}> 0.001 Kg</Text>
                </View>

                <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                  <Text style={{marginLeft:15, fontSize:17}}>Peça e Material: </Text>
                  <Text style={{marginRight:15, fontSize:17}}> 100% Algodão</Text>
                </View>
                

            </List.Accordion>
        </List.Section>

       

        <View style={styles.viewAddSacolaEPreco}>
          
          <View style={styles.viewPreco}>
           
            <View style={styles.viewQuantidade}>
              <TouchableOpacity style={styles.botaoMenos} onPress={diminuir}>
                <Text style={styles.textoMenos}> - </Text>
              </TouchableOpacity>

              <View style={styles.viewQuantidadeContagem}>
                <Text style={styles.textoContagem}> {quantidade} </Text>
              </View>

              <TouchableOpacity style={styles.botaoMais} onPress={aumentar}>
                <Icon name='add' size={17} color='#008000'/>
              </TouchableOpacity>
            </View>
            
            <View style={styles.viewPrecoFinal}>
              <Text style={styles.textoPrecoFinal}>R$ {valorDaCompra}</Text>
            </View>
           
          </View>

          <TouchableOpacity style={styles.viewAddSacola } onPress={addCarrinho}>
            <Text style={styles.textoAddSacola}>Adicionar à carrinho</Text>
          </TouchableOpacity>

          
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
  viewImg:{
    alignItems:'center',
    justifyContent:'center',
    marginTop:30,
  },
  img:{
    height: 300, 
    width: 300
  },
  viewPromocao:{
    backgroundColor:'#008000',
    width: 80,
    height: 30,
    alignItems:'center',
    justifyContent:'center',
    marginLeft:10,
    borderRadius:2,
    marginTop:10
  },
  textoPromocao:{
    fontSize:14,
    color: '#fff'
  },
  nomeDoProduto:{
    fontSize:20,
    fontWeight:'bold',
    color: '#000',
    marginTop:10,
    marginLeft:10
  },
  codigoDoProduto:{
    fontSize:14,
    marginLeft:10,
    color: '#666'
  },
  viewPrecoEcor:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between'
  },
  viewCorPreta:{
    backgroundColor:'#000',
    width: 40,
    height: 40,
    marginLeft:10,
    marginTop:10,
    borderRadius:3,
  },
  viewCorVermelha:{
    backgroundColor:'red',
    width: 40,
    height: 40,
    marginLeft:10,
    marginTop:10,
    borderRadius:3,
  },
  viewCorAmarela:{
    backgroundColor:'yellow',
    width: 40,
    height: 40,
    marginLeft:10,
    marginTop:10,
    borderRadius:3,
  },
  viewCorBranca:{
    backgroundColor:'#fff',
    width: 40,
    height: 40,
    marginLeft:10,
    marginTop:10,
    borderRadius:3,
    borderWidth:1
  },
  textoPrecoNormal:{
    fontSize:18,
    marginRight:10,
    fontWeight:'bold',
    color: '#000',
    marginTop:5,
    textDecorationLine: 'line-through',
  },
  textoValorComDesconto:{
    color: '#900',
    fontSize:20,
    fontWeight:'bold',
    marginRight:5
  },
  nomeCor:{
    fontSize:15,
    marginLeft:10,
    color: '#666',
    marginTop:2
  },
  viewTamanho:{
    borderTopWidth:1,
    borderBottomWidth:1,
    width: '100%',
    height: 100,
    borderColor:'#ccc',
    marginTop:10,
  },
  viewTamanhoLetra:{
    width: 40,
    height: 40,
    marginTop:5,
    marginLeft:10,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#ccc',
    borderRadius:3
  },
  textoTamanhoLetra:{
    fontSize:16
  },
  viewEncontreSeuTamanho:{
    marginTop:20,
    marginLeft:10,
    flexDirection:'row'
  },
  textoEncontreSeuTamanho:{
    fontSize:15,
    color: '#4361ee',
    marginLeft:5
  },
  viewDetalheDoProdutoEcaracteristicas:{
    width: '100%',
    height: 50,
    alignItems:'center',
    borderBottomWidth:1,
    borderColor: '#ccc',
    flexDirection:'row'
  },
  textoDetalhesdoProdutoEcaracteristicas:{
    fontSize:17,
    marginLeft:5,
    color: '#777'
  },
  viewAddSacolaEPreco:{
    height: 100, 
    alignItems:'center',
    justifyContent:'space-between',
    flexDirection:'row'
  },
  viewAddSacola:{
    backgroundColor:'#008000',
    height: 50,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:5,
    width: 200,
    marginRight:10,
  },
  viewPreco:{
    height: 70,
    alignItems:'center',
    justifyContent:'center',
    marginLeft:30,
    width: 100,
    borderRadius:5,
    marginTop:5
  },
  textoPrecoFinal:{
    fontSize:18,
    color: '#000',
    fontWeight:'bold'
  },
  textoAddSacola:{
    fontSize:16,
    color: '#fff'
  },
  viewQuantidade:{
    flexDirection:'row',
    width:150,
    height: 30,
    borderWidth:1,
    borderColor:'#ccc',
    borderRadius:5,
    marginBottom:10
  },
  botaoMenos:{
    width:49,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#fff'
  },
  botaoMais:{
    width:49,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#fff'
  },
  viewQuantidadeContagem:{
    width:50,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#fff'
  },
  textoMenos:{
    fontSize:17,
    color: '#000'
  },
  viewPrecoFinal:{
    width:150,
    alignItems:'center',
    justifyContent:'center'
  },

  listAcordion:{
    backgroundColor:'#fff'
  },
  textoDetalhesDoProduto:{
    fontSize:15
  },

})