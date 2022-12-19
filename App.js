
import React , {useState} from 'react' ;
import {View,Text,StyleSheet} from 'react-native'
import HomeClient from './screens/HomeClient';
import Details from './screens/Details';
import MyCards from './screens/MyCards';
import Cart from './screens/Cart';
import Favorites from './screens/Favorites';
import { RestData } from './constants/dummy'
import { useFonts } from 'expo-font' ;
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PayWithCard from './screens/PayWithCard';
import Address from './screens/Address';
import Congrats from './screens/Congrats';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer style={{justifyContent:"center", alignItems:"center"}}>
      <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen name="HomeClient" component={HomeClient}/>
      <Stack.Screen name="Details" component={Details} />
      <Stack.Screen name="MyCards" component={MyCards} />
      <Stack.Screen name="Cart" component={Cart} />
      <Stack.Screen name="Favorites" component={Favorites} />
      <Stack.Screen name="PayWithCard" component={PayWithCard} />
      <Stack.Screen name="Address" component={Address} />
      <Stack.Screen name="Congrats" component={Congrats} />
      </Stack.Navigator>
 </NavigationContainer>
  )
}
const styles = StyleSheet.create({
  container:{
    justifyContent:"center",
    alignItems:"center",
    
  }
})


