import React from 'react';
import { View,Text } from 'react-native';

export default function Listagem({data}) {
 return (
   <View>
       <Text>{data.imagem}</Text>
   </View>
  );
}