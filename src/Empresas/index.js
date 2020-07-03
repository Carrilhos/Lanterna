import React from 'react'
import { View, Text, ImageBackground, Image, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto'

import image from '../../img/bg2.jpg'

import styles from './styles'
import { AppLoading } from 'expo';

export default function Empresas(){

    let [fontsLoaded] = useFonts({
        Roboto_700Bold
    })

    if (!fontsLoaded){
        return <AppLoading/>
    }

    const navigation = useNavigation()

    function navigateToLogin(){
        navigation.navigate('Login')
    }

    function navigateToCadastro(){
        navigation.navigate('Cadastro')
    }


    return(
        <View style={styles.container}>
            <ImageBackground source={image} style={styles.image}>
                <Text style={styles.BemVindo}>
                    
                </Text>

                <View style={styles.buttonbox}> 

                    <TouchableOpacity
                    style={styles.button1}
                    onPress={navigateToLogin}
                    >
                        <Text style={styles.textbutton}>
                            Entrar
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                    style={styles.button2}
                    onPress={navigateToCadastro}
                    >
                        <Text style={styles.textbutton}>
                            Cadastrar-se
                        </Text>
                    </TouchableOpacity>

                </View>

            </ImageBackground>
        </View>
        
    )
}

