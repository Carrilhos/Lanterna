import React from 'react';
import { Image, Text, View, ImageBackground, TouchableOpacity, TextInput, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

import styles from './styles'
import image from '../../img/bg5.jpg'
import pizza from '../../img/pizza.png'

export default function listEmpresas({ navigation: { goBack } }){

    const navigation = useNavigation()

    function navigateToEmpresa(){
        navigation.navigate('negocio')
    }    

    return(
        <View style={styles.container}>
        <ImageBackground source={image} style={styles.image}>
            <View style={styles.arrow}>
            <TouchableOpacity
              onPress={() => goBack()}
            >
            <Feather name="arrow-left" size={30}/>
            </TouchableOpacity>

            <TextInput
              style={styles.input}
              placeholder={'Pesquisa'}
              placeholderTextColor='#000'
            />
        </View>   
        
        

        <FlatList
                style={styles.populareslist}
                data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,13]}
                keyExtractor={popular => String(popular)}
                showsVerticalScrollIndicator ={true}
                renderItem={() => (                
                <View > 
                    <TouchableOpacity
                    onPress={navigateToEmpresa}
                    >
                    <View style={styles.categorias}>
                        

                      <Text style={styles.categoriastext}>
                            Empresas
                        </Text>

                    </View>
                    </TouchableOpacity>
                </View>
            )}

                />

        </ImageBackground>
        </View>
    )

}