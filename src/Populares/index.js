import React from 'react';
import { Image, Text, View, ImageBackground, TouchableOpacity, TextInput, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'


import styles from './styles'
import image from '../../img/bg3.jpg'
import pizza from '../../img/pizza.png'

function Populares() {

  const navigation = useNavigation()

  function navigateToHome(){
    navigation.navigate('Home');
  }

  function navigateToCategoria(){
    navigation.navigate('Categoria');
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

            <TextInput
              style={styles.input}
              placeholder={'Pesquisa'}
              placeholderTextColor='#000'
            />
        </View>   
       
        
        <FlatList
                style={styles.populareslist}
                data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
                keyExtractor={popular => String(popular)}
                showsVerticalScrollIndicator ={true}
                renderItem={() => (                
                <View > 
                    <TouchableOpacity
                    onPress={navigateToCategoria}
                    >
                    <View style={styles.popular}>
                        
                        <Image 
                        source={pizza}
                        style={styles.iconimg}
                        />

                        <Text style={styles.populartext}>
                            Popular
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

function Categorias() {
  
  
  const navigation = useNavigation()
  
  function navigateToHome(){
    navigation.navigate('Home');
  }

  function navigateToCategoria(){
    navigation.navigate('Categoria');
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
                    onPress={navigateToCategoria}
                    >
                    <View style={styles.categorias}>
                        

                      <Text style={styles.categoriastext}>
                            Categoria
                        </Text>

                    </View>
                    </TouchableOpacity>
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
  
              if (route.name === 'Populares') {
                iconName = focused
                  ? 'ios-star'
                  : 'ios-star-outline';
              } else if (route.name === 'Categorias') {
                iconName = focused ? 'ios-list-box' : 'ios-list';
              }
  
              // You can return any component that you like here!
              return <Ionicons name={iconName} size={size} color={color} />;
            },
          })}
          tabBarOptions={{
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
          }}
        >
          <Tab.Screen name="Populares" component={Populares} />
          <Tab.Screen name="Categorias" component={Categorias} />
        </Tab.Navigator>
   
    );
  }
