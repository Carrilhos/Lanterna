import React,  { useState, useEffect}  from 'react';
import {Linking,SectionList , Image, Text, View, ImageBackground, TouchableOpacity, TextInput, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { Input, Button, PricingCard } from 'react-native-elements';
import * as ImagePicker from 'expo-image-picker';

import {Picker} from 'react-native'


import styles from './styles'
import image from '../../img/bg3.jpg'
import pizza from '../../img/pizza.png'
import cadastroNegocio1 from '../cadastroNegocio1';

function Gerenciar() {

  const navigation = useNavigation()

  function navigateToHome(){
    navigation.navigate('Home');
  }

  const vip = 1

  function navigateToAdm(){
    if (vip == 1){
      navigation.navigate('admNegocio')
    }
  }

  const message = `Olá, gostaria de ser vip!`
    


  function sendWhatsapp(){
    Linking.openURL(`whatsapp://send?phone=556699816530&text=${message}`)
  }


  return (
    <View style={styles.container}>
         <ImageBackground source={image} style={styles.image}>
           <View style={styles.arrow1}>
            <TouchableOpacity
              onPress={navigateToHome}
            >
            <Feather name="arrow-left" size={30}/>

            </TouchableOpacity>
            <Text style={styles.id}>
                Negócios
            </Text>


        </View>   
       
        
        <FlatList
                style={styles.populareslist}
                data={[1]}
                keyExtractor={popular => String(popular)}
                showsVerticalScrollIndicator ={true}
                renderItem={() => (                
                <View> 


                    <TouchableOpacity
                    onPress={navigateToAdm}
                    >
                    <View style={styles.categorias}>

                      <Text style={styles.categoriastext}>
                            Seus Negócios
                        </Text>

                    </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                    onPress={navigateToAdm}
                    >
                    <View style={styles.categorias}>

                      <Text style={styles.categoriastext}>
                            Seus Negócios
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

function addNegocio() {
    
  
  
  const navigation = useNavigation()
  
  function navigateToHome(){
    navigation.navigate('Home');
  }

  function navigateToCategoria(){
    navigation.navigate('Categoria');
  }

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


  return (

    
    
      <View style={styles.container}>
         <ImageBackground source={image} style={styles.image}> 
         <View style={styles.arrow2}>
            <TouchableOpacity
              onPress={navigateToHome}
            >
            <Feather name="arrow-left" size={30}/>
            </TouchableOpacity>
            <Text style={styles.id}>
                Cadastre serviço/Estabelecimento
            </Text>

           
        </View>   
        
      

        <FlatList
                style={styles.populareslist}
                data={[1]}
                keyExtractor={popular => String(popular)}
                showsVerticalScrollIndicator ={true}
                renderItem={() => (                
                <View style={styles.form}> 
                    <Input
                    placeholder='Nome do negócio'
                    style={styles.firstButton}
                    />
                    <Input
                    placeholder='Descrição'
                    />
                    <Input
                    placeholder='CEP'
                    />
                    <Input
                    placeholder='Bairro'
                    />
                    <Input
                    placeholder='Rua'
                    />
                    <Input
                    placeholder='Número'
                    />
                     <Input
                    onBlur={() => {}}
                    name = "wpp"
                    placeholder='Whatsapp  --  xx xxxxx-xxxx'
                    />
                      
                      <Text style={styles.sugerido}>
                        Copie e cole o link das redes sociais.
                      </Text>
                     <Input
                    placeholder='facebook/xxxx'
                    />
                    <Input
                    placeholder='instagram/xxxx'
                    />
                    <Input
                    placeholder='Número para ligação'
                    />
                    <Input
                    placeholder='palavras chaves com virgula'
                    />

                    <Text style={styles.sugerido}>
                      Tamanho minimo para melhor vizualização: 400x250px
                    </Text>

                    <TouchableOpacity onPress={openImagePickerAsync} >
                        <Text  style={styles.selectImg}>Escolha uma foto</Text>
                    </TouchableOpacity>
                    
                  <Button
                  onPress={navigateTocadastronegocio01}
                  title="Próximo"
                  style={styles.next}
                  type="clear"
                  />

                 

                   
                </View>
            )}

                />

        </ImageBackground>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
    return (
      
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
  
              if (route.name === 'Gerenciar') {
                iconName = focused
                  ? 'ios-business'
                  : 'ios-business';
              } else if (route.name === 'Cadastrar Negocio') {
                iconName = focused ? 'ios-add' : 'ios-add';
              }
  
              // You can return any component that you like here!
              return <Ionicons name={iconName} size={35} color={color} />;
            },
          })}
          tabBarOptions={{
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
          }}
        >
          <Tab.Screen name="Gerenciar" component={Gerenciar} />
          <Tab.Screen name="Cadastrar Negocio" component={addNegocio} />
        </Tab.Navigator>
   
    );
  }
