import React from 'react';
import { Image, Text, View, ImageBackground, TouchableOpacity, TextInput, FlatList, Linking } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'


import styles from './styles'
import image from '../../img/bg3.jpg'
import pizza from '../../img/pizza.png'
import ze from '../../img/ze.png'

export default function negocio({ navigation: { goBack } }){

    const negocioName = `Bar do Zé`
    const message = `Olá Bar do Zé, estou entrando em contato após ver seu anuncio no Lanterna Zap.`
    const description = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ullamcorper, nibh in accumsan finibus, nunc ipsum gravida orci, maximus malesuada tellus lorem et metus. Maecenas mollis nibh eu arcu egestas scelerisque. Etiam lacinia facilisis nisl, id vulputate dolor luctus sit amet. Mauris et neque aliquam, malesuada tortor pretium, pellentesque lacus. Aenean pretium eros vel fringilla feugiat. Maecenas varius accumsan malesuada. Proin porttitor mattis lectus nec blandit. Proin euismod hendrerit lorem, et sagittis erat bibendum ac. Curabitur a augue turpis.
     `
    const endereço = 'Rua São José Figueiredo, 391 - Tupiniquin'

    function sendWhatsapp(){
        Linking.openURL(`whatsapp://send?phone=5553981511640&text=${message}`)
    }

    return(
        <View style={styles.container}>
       
            <View style={styles.arrow}>
                <TouchableOpacity
                onPress={() => goBack()}
                >
                <Feather name="arrow-left" size={30}/>
                </TouchableOpacity>
                
                <Text style={styles.empresa}>
                    Bar do zé
                </Text>
                <TouchableOpacity
                onPress={sendWhatsapp}
                >
                    <Ionicons name="logo-whatsapp" size={30}/>
                </TouchableOpacity>
            </View> 
            <View>
            <FlatList
                style={styles.populareslist}
                data={[1 ]}
                keyExtractor={popular => String(popular)}
                showsVerticalScrollIndicator ={true}
                renderItem={() => (                
                <View> 
                   <Image 
                   style={styles.imgEmpresa}
                   source={ze}
                   />
                <View>
                    <Text style={styles.titleDescription}>
                        Descrição
                    </Text>

                    <Text style={styles.description}>
                        {description}
                        
                    </Text>

                    <Text style={styles.endereço}>
                        {endereço}
                    </Text>
  
  
                    <View style={styles.ultimo}>
                       
                    </View>


                 
                </View>
              
                </View>
                
                
            
                )}

                />
                
                
            </View>  
    </View>
    )
}