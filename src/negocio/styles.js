import React from "react";
import {StyleSheet} from "react-native";

import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto'
import { bold } from "colorette";
import { color } from "react-native-reanimated";



export default StyleSheet.create({
    image:{
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
        
        
    },

    container:{
       
        flex: 1,
       
    },

    arrow:{
        flexDirection: 'row',
        paddingHorizontal: 20,
        alignItems: 'center' ,
        justifyContent: 'space-between',
        backgroundColor: '#4bff64',
        
 

    },

    input:{
       
        color: '#000',
      
        textAlign: 'center',
        borderRadius: 20,
        marginBottom: 32,
        marginTop: 38,
        justifyContent:'flex-start',
        textAlign: 'center',
        fontSize: 30
        
        
    },
    empresa:{
       
        color: '#000',
      
        textAlign: 'center',
        borderRadius: 20,
        marginBottom: 32,
        marginTop: 38,
        justifyContent:'flex-start',
        textAlign: 'center',
        fontSize: 30,
        fontWeight: 'bold'
        
        
    },

    popularlist:{
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '30%',
        
    
        
    },

    popular:{
        alignItems: 'center',
        backgroundColor: '#E8FFEB',
        marginBottom: 15,
        padding: 15,
        marginHorizontal: '25%',
        justifyContent: 'space-between',
        flexDirection: 'row',
        borderRadius: 30
    },

    populartext:{
        color: '#13131a'
    },

    iconimg:{
        width: 40,
        height: 40,
        marginLeft: 30
      },

    categorias:{
        alignItems: 'center',
        backgroundColor: '#E8FFEB',
        marginBottom: 15,
        padding: 15,
        justifyContent: 'space-between',
        flexDirection: 'row',
        borderRadius: 30,
       
    },

    categoriastext:{
        color: '#13131a',
        fontSize: 20,
        
        
    },
    imgEmpresa:{
        width: 400,
        height: 250,
    },

    description:{
        backgroundColor: '#cef2d3',
        marginHorizontal: '5%',
        marginTop: '5%',
        borderRadius: 30,
        fontSize: 15,
        padding: 10,
        borderColor: '#000',
        borderStyle: 'solid'
       
        
    },

    titleDescription:{
        textAlign: 'center',
        fontSize: 20,
        marginTop: '5%',
        padding: 5,
        
        fontStyle: 'italic'

    },

    endereço:{
        marginBottom: 150,
        textAlign: 'center',
        backgroundColor: '#cef2d3',
        marginHorizontal: '5%',
        marginTop: '5%',
        borderRadius: 30,
        padding: 10,
        borderColor: '#000',
        borderStyle: 'solid'
       


    }
    
})



//marginBottom: 150