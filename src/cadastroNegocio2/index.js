import React,  { useState }  from 'react';
import {SectionList , Image, Text, View, ImageBackground, TouchableOpacity, TextInput, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { Input, Button } from 'react-native-elements';
import * as ImagePicker from 'expo-image-picker';

import {Picker} from 'react-native'

import styles from './styles'

export default function cadastroNegocio1({ navigation: { goBack } }){

    const [selectedValue, setSelectedValue] = useState("Categoria - X");

    
    const navigation = useNavigation()
    function navigateTocadastronegocio03(){
        navigation.navigate('cadastroNegocio3')
      }
    return (
        <View style={styles.container}>
    
        <View style={styles.arrow2}>
           <TouchableOpacity
             onPress={() => goBack()}
           >
           <Feather name="arrow-left" size={30}/>
           </TouchableOpacity>
           <Text style={styles.id}>
               Escolha uma subcategoria
           </Text>
        </View>  

        <View style={styles.picker}>
            <Picker
                selectedValue={selectedValue}
                style={{ height: 50, width: 150 }}
                onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
            >
            <Picker.Item label="Categoria - X" value="Categoria - X" />
            <Picker.Item label="Categoria - A" value="Categoria - A" />
            <Picker.Item label="Categoria - B" value="Categoria - B" />
            <Picker.Item label="Categoria - C" value="Categoria - C" />
            <Picker.Item label="Categoria - D" value="Categoria - D" />
            <Picker.Item label="Categoria - E" value="Categoria - E" />
            <Picker.Item label="Categoria - F" value="Categoria - F" />

            </Picker>

            <Button
                  onPress={navigateTocadastronegocio03}
                  title="Próximo"
                  style={styles.next}
                  type="clear"
                  buttonStyle={{marginTop: 40}}
            />
        </View>


       </View> 
    )
}