import React,  { useState, useEffect } from 'react';
import { Platform, Image, Text, View, ImageBackground, TouchableOpacity, TextInput, FlatList, Linking } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { Rating, AirbnbRating, Input, Button } from 'react-native-elements'
import * as Location from 'expo-location'
import Constants from 'expo-constants';
import * as ImagePicker from 'expo-image-picker';

import styles from './styles'
import image from '../../img/bg3.jpg'
import pizza from '../../img/pizza.png'
import ze from '../../img/ze.png'

export default function admNegocio({navigation: {goBack}}){
    
    const navigation = useNavigation()

    function navigateTocadastronegocio01(){
        navigation.navigate('cadastroNegocio1')
      }
    
    let openImagePickerAsync = async () => {
        let permissionResult = await ImagePicker.requestCameraRollPermissionsAsync();
    
        if (permissionResult.granted === false) {
          alert("Permission to access camera roll is required!");
          return;
        }
    
        let pickerResult = await ImagePicker.launchImageLibraryAsync();
        console.log(pickerResult);
      }
    
    
    return(
        <View>  

        <View style={styles.arrow}>
                <TouchableOpacity
                onPress={() => goBack()}
                >
                <Feather name="arrow-left" size={30}/>
                </TouchableOpacity>
                
                <Button
                  onPress={navigateTocadastronegocio01}
                  title="Próximo"
                  buttonStyle={styles.next}
                  type="clear"
                />
                
        </View>
            <FlatList
                style={styles.populareslist}
                data={[1 ]}
                keyExtractor={popular => String(popular)}
                showsVerticalScrollIndicator ={true}
                renderItem={() =>(
                <View style={styles.form}> 
                    <Text style={styles.editText}>
                        Clique onde deseja editar 
                    </Text>

                    <Input
                    placeholder='Nome do negócio'
                    style={styles.firstButton}
                    value={`xxxxx`}
                    label={'Nome do negócio'}
                    />
                     <Input
                    placeholder='Descrição'
                    value={`xxxxx`}
                    label={'Descrição'}

                    />
                    <Input
                    placeholder='Cidade'
                    value={`xxxxx`}
                    label={'Cidade'}
                    />
                    <Input
                    placeholder='Bairro'
                    value={`xxxxx`}
                    label={'Bairro'}
                    />
                    <Input
                    placeholder='Rua'
                    value={`xxxxx`}
                    label={'Rua'}
                    />
                    <Input
                    placeholder='Número'
                    value={`xxxxx`}
                    label={'Número'}
                    />

                     <Input
                    placeholder='Whatsapp'
                    value={`xxxxx`}
                    label={'Whatsapp'}
                    />
                     <Input
                    placeholder='facebook/xxxx'
                    value={`xxxxx`}
                    label={'Facebook'}
                    />
                    <Input
                    placeholder='instagram/xxxx'
                    value={`xxxxx`}
                    label={'Instagram'}
                    />
                    <Input
                    placeholder='Número para ligação'
                    value={`xxxxx`}
                    label={'Número para ligação'}
                    /> 
                    <Input
                    placeholder='Palavras chave'
                    value={`xxxxx, xxxxx, xxxxx, xxxxx`}
                    label={'Palavras chave'}
                    />    
                       
                    
                    <Image 
                      style={styles.imgEmpresa}
                      source={ze}
                    />

                    <TouchableOpacity onPress={openImagePickerAsync} >
                        <Text  style={styles.selectImg}>Edite a foto</Text>
                    </TouchableOpacity>
                    <Button
                    onPress={navigateTocadastronegocio01}
                    title="Próximo"
                    style={styles.next}
                    type="clear"
                    />

                 <Button
                  onPress={navigateTocadastronegocio01}
                  title="Próximo"
                  style={styles.next}
                  type="clear"
                  />

                    
                </View>
                )}
            />


        </View>  
       
            
            
    )
}