//Pagina que controla as rotas

import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Home from '../pages/Home/home';
import ZonaOeste from '../pages/ZonaOeste/zonaOeste';
import ZonaNorte from '../pages/ZonaNorte/zonaNorte';
import ZonaLeste from '../pages/ZonaLeste/zonaLeste';
import ZonaSul from '../pages/ZonaSul/zonaSul';


const Stack = createStackNavigator();

function Routes(){
    return(
        <Stack.Navigator>
            <Stack.Screen name='Home' component={Home} options={{headerShown:false}}/>
            <Stack.Screen name='ZonaOeste' component={ZonaOeste}/>
            <Stack.Screen name='ZonaNorte' component={ZonaNorte} />
            <Stack.Screen name='ZonaLeste' component={ZonaLeste}/>
            <Stack.Screen name='ZonaSul' component={ZonaSul} />
        </Stack.Navigator>
    );
}
export default Routes;