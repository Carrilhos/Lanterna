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
       
        flex: 1
    },

    arrow1:{
        flexDirection: 'row',
        paddingHorizontal: 20,
        alignItems: 'center' ,
        backgroundColor: '#00fe22',
        justifyContent: 'space-between',
      

    },

    arrow2:{
        flexDirection: 'row',
        paddingHorizontal: 20,
        alignItems: 'center' ,
      
        backgroundColor: '#00fe22',
        justifyContent: 'space-between'

    },

    input:{
        backgroundColor: '#8AFF9A',
        color: '#000',
        width: '80%',
        height: 40,
        textAlign: 'center',
        borderRadius: 20,
        marginBottom: 32,
        marginTop: 20,
        justifyContent:'flex-start',
        marginTop: '10%'
    
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
        color: '#13131a',
        fontSize: 20
    },

    iconimg:{
        width: 40,
        height: 40,
        
        marginLeft: 30
      },

    categorias:{
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
    
})