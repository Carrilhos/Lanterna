import React from 'react'
import { NavigationContainer, StackActions } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator()

import Home from './Home'
import Populares from './Populares'
import Empresas from './Empresas'
import Login from './Entrar'
import Cadastro from './Cadastro'
import Categoria from './categoria'
import listEmpresas from './listEmpresas'
import negocio from './negocio'
import gerenciarEmpresa from './gerenciarEmpresa'
import cadastroNegocio1 from './cadastroNegocio1'
import cadastroNegocio2 from './cadastroNegocio2'
import cadastroNegocio3 from './cadastroNegocio3'
import admNegocio from './admNegocio'
import gerenciarEmpresaFree from './gerenciarEmpresaFree'



export default function Routes(){
    return(
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown:false}} >  
                
                <Stack.Screen name="Home" component={Home}/>
                <Stack.Screen name="Populares" component={Populares}/>
                <Stack.Screen name="Empresas" component={Empresas}/>
                <Stack.Screen name="Login" component={Login}/>
                <Stack.Screen name="Cadastro" component={Cadastro}/>
                <Stack.Screen name="Categoria" component={Categoria}/>
                <Stack.Screen name="listEmpresas" component={listEmpresas}/>
                <Stack.Screen name="negocio" component={negocio}/>
                <Stack.Screen name="gerenciarEmpresa" component={gerenciarEmpresa}/>
                <Stack.Screen name="cadastroNegocio1" component={cadastroNegocio1}/>
                <Stack.Screen name="cadastroNegocio2" component={cadastroNegocio2}/>
                <Stack.Screen name="cadastroNegocio3" component={cadastroNegocio3}/>
                <Stack.Screen name="admNegocio" component={admNegocio}/>
                <Stack.Screen name="gerenciarEmpresaFree" component={gerenciarEmpresa}/>

             
            </Stack.Navigator>
        </NavigationContainer>
    )
}