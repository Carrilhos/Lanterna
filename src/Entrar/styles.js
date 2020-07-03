import React from "react";
import {StyleSheet} from "react-native";

import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto'
import { bold } from "colorette";



export default StyleSheet.create({
    image:{
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
        
    },

    container:{
        backgroundColor: '#00fe22',
        flex: 1
    },

    BemVindo:{
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: "center",
        fontSize: 40,
        marginTop: 150,
        fontFamily: 'Roboto_700Bold',
        
    },

    button1:{
        backgroundColor: "#ddffef",
        borderRadius: 30,
        marginHorizontal: 70,
        marginBottom: 20,
        padding: 20,
        marginTop: 150


    },

    button2:{
        backgroundColor: "#ddffef",
        borderRadius: 30,
        marginHorizontal: 70,
        marginBottom: 20,
        padding: 20,
       

    },


    textbutton:{
        textAlign: 'center',
        fontSize: 15
    },
   
      input: {
        width: 200,
        height: 44,
        padding: 10,
        borderWidth: 1,
        borderColor: '#069D52',
        backgroundColor: '#ddffef',
        marginBottom: 10,
        borderRadius: 20,
        
        
      },

    form:{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        paddingTop: 300
    }
})