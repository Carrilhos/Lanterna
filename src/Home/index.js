import React from 'react'
import { View, Text, ImageBackground, Image, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto'

import image from '../../img/bg2.jpg'

import styles from './styles'
import { AppLoading } from 'expo';

export default function Home(){

    let [fontsLoaded] = useFonts({
        Roboto_700Bold
    })

    if (!fontsLoaded){
        return <AppLoading/>
    }

    const navigation = useNavigation()

    function navigateToPopular(){
        navigation.navigate('Populares')
    }

    function navigateToEmpresas(){
        navigation.navigate('Empresas')
    }


    return(
        <View style={styles.container}>
            <ImageBackground source={image} style={styles.image}>
                <Text style={styles.BemVindo}>
                    
                </Text>

                <View style={styles.buttonbox}> 

                    <TouchableOpacity
                    style={styles.button1}
                    onPress={navigateToPopular}
                    >
                        <Text style={styles.textbutton}>
                            Cliente
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                    style={styles.button2}
                    onPress={navigateToEmpresas}
                    >
                        <Text style={styles.textbutton}>
                            Empresa
                        </Text>
                    </TouchableOpacity>

                </View>

            </ImageBackground>
        </View>
        
    )
}

