import React from 'react'
import { View, Text, ImageBackground, Image, TouchableOpacity, TextInput, Button } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto'
import { Input, PricingCard, Icon } from 'react-native-elements';

import image from '../../img/bg.jpg'

import styles from './styles'
import { AppLoading } from 'expo';
import { Feather } from '@expo/vector-icons';

export default function Entrar(){

    const navigation = useNavigation()

    function navigationToGerenciar(){
        navigation.navigate('gerenciarEmpresa')
    }

    return(
        <View style={styles.container}>
            <ImageBackground source={image} style={styles.image}>
               <View style={styles.form}>
                   <Input
                   placeholder={'Whatsapp'}
                   placeholderTextColor={'#000'}
                   dataDetectorTypes={'phoneNumber'}
                   keyboardType={'number-pad'}
                   textContentType={'telephoneNumber'}
                   style={styles.input}
                   rightIcon={
                    <Feather
                    name='user'
                    size={18}
                    />
                }
                   />
                    <Input
                   placeholder={'Senha'}
                   placeholderTextColor={'#000'}
                   secureTextEntry={true}
                   textContentType={'password'}
                   style={styles.input}
                   rightIcon={
                       <Feather
                       name='lock'
                       size={18}
                       />
                   }
                   />
                   <Button
                   title={'Login'}
                   style={styles.submit}
                   color={'#36ffa0'}
                   onPress={navigationToGerenciar}
                   />

                  
               </View>
            </ImageBackground>
        </View>
        
    )
}

