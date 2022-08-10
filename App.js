
import React , {useState} from 'react' ;
import {View,Text,StyleSheet} from 'react-native'
import HomeClient from './screens/HomeClient';
import { RestData } from './constants/dummy'
import { useFonts } from 'expo-font' 
export default function App() {
  const [loaded] = useFonts({
    QuickBold: require("./assets/fonts/Quicksand-Bold.ttf"),
    QuickLight: require("./assets/fonts/Quicksand-Light.ttf"),
    QuickMedium: require("./assets/fonts/Quicksand-Medium.ttf"),
    QuickRegular: require("./assets/fonts/Quicksand-Regular.ttf"),
    QuickSemiBold: require("./assets/fonts/Quicksand-SemiBold.ttf"),
  });
  if (!loaded) return null;
  return (
 <View style={styles.container}>
  <HomeClient />
 </View>
  )
}
const styles = StyleSheet.create({
  container:{
    justifyContent:"center",
    alignItems:"center",
    
  }
})


