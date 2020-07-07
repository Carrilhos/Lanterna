import React,  { useState, useEffect } from 'react';
import { Share ,Platform, Image, Text, View, ImageBackground, TouchableOpacity, TextInput, FlatList, Linking } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { Rating, AirbnbRating } from 'react-native-elements'
import * as Location from 'expo-location'
import Constants from 'expo-constants';

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

    function openFacebook(){
        Linking.canOpenURL("fb://").then(supported => {
            if (supported) {
              return Linking.openURL("fb://");
            } else {
              return Linking.openURL("https://www.facebook.com/");
            }
          })
        
    }

    function openInstagram(){
        Linking.canOpenURL("instagram://").then(supported => {
            if (supported) {
              return Linking.openURL("instagram://");
            } else {
              return Linking.openURL("https://www.instagram.com/");
            }
          })
        
    }

    function openInstagram(){
        Linking.openURL(`https://www.instagram.com/`)
    }

    function openTel(){
        Linking.openURL(`tel:999999999`)
    }
    

    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);

    useEffect(() => {
        if (Platform.OS === 'android' && !Constants.isDevice) {
          setErrorMsg(
            'Opa, você aparentemente está usando um emulador'
          );
        } else {
          (async () => {
            let { status } = await Location.requestPermissionsAsync();
            if (status !== 'granted') {
              setErrorMsg('A permissão precisa ser ativada');
            }
    
            let location = await Location.getCurrentPositionAsync({});
            setLocation(location);

           
          })();
        }
      });

    
      let text = 'Waiting..';
      if (errorMsg) {
        text = errorMsg;
      } else if (location) {
        text = JSON.stringify(location);
      }

      function calc(lat1, lon1, lat2, lon2){
            let R = 6371
            let dLat = (lat2 - lat1) * (Math.PI / 180)
            let dLon = (lon2 - lon1) * (Math.PI / 180)

            a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(lat1 * (Math.PI / 180)) * Math.cos(lat2 * (Math.PI / 180)) * Math.sin(dLon / 2) * Math.sin(dLon / 2)
            let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
            let d = R * c

	    return d
    }

    const onShare = async () => {
        try {
          const result = await Share.share({
            message:
              "Achei o bar do zé no lanterna zap!",
          });
          if (result.action === Share.sharedAction) {
            if (result.activityType) {
              // shared with activity type of result.activityType
            } else {
              // shared
            }
          } else if (result.action === Share.dismissedAction) {
            // dismissed
          }
        } catch (error) {
          alert(error.message);
        }
      };

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
  
                    <View style={styles.rating}>

                        <AirbnbRating

                        count={5}
                        reviews={["Péssimo", "Ruim", "Ok", "Bom", "Excelente!"]}
                        defaultRating={5}
                        size={40}
                        />
                    </View>
                    <View style={styles.ratingRead}>
                    
                        <Text style={styles.avaliacao}> 
                          Avaliações!
                        </Text>
                   
                    <Rating
                    imageSize={40}
                    readonly ={true}
                    startingValue={5}
                    style={styles.estrela}
                    
                    />

                    </View>

                    

                    

                    <View style={styles.redessociais}>
                        
                         <TouchableOpacity
                        onPress={openTel}
                        >
                            <Feather
                                name="phone"
                                size={40}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={sendWhatsapp}
                        >
                            <Ionicons 
                                name="logo-whatsapp" 
                                size={40}
                            />
                        </TouchableOpacity>
                        
                        
                       
                       
                    </View>

                    <View style={styles.redessociais1}>
                        
                    <TouchableOpacity
                            onPress={onShare}
                            >
                        <Feather 
                            name="share-2" 
                            size={35}
                            style={styles.iconShared}
                        />
                    </TouchableOpacity>

                    </View>

                    
                 
                </View>
                        
            </View>
                
                
            
                )}

                />
                
                
            </View>  
    </View>
    )
}


