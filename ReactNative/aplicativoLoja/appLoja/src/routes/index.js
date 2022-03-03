import 'react-native-gesture-handler';
import React,{useContext, useState} from 'react';
import { View, ActivityIndicator } from 'react-native';

import AppRoutes from './app.routes';

function Routes() {
    const signed = true;
    const  loading = false;
     
     if(loading){
        return(
         <View style={{
                 flex:1,
                 justifyContent: 'center',
                 alignItems: 'center',
                 backgroundColor: '#fff'
             }}>
             <ActivityIndicator size={50} color="#16A085" />
         </View>
        )
     }
 
  return (
    signed ? <AppRoutes/> : <AuthRoutes/>
   );
 }
 
 export default Routes;