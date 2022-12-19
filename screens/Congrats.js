import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import assets from '../constants/assets'
import { useNavigation } from '@react-navigation/native'

const Congrats = () => {
    const Navigation=useNavigation();
    const handleHome=() => {
        Navigation.navigate("HomeClient")
    }
  return (
    <View style={{padding:50,backgroundColor:'#FFFFFF',height:"100%",width:"100%",justifyContent:'center',alignItems:'center'}}>
      <Image source={assets.Check} style={{height:200, width:200}}/>
      <Text style={{fontSize:32}}>Congratulations your order is submitted </Text>
      <Text style={{fontSize:32}}>Enjoy</Text>
      <TouchableOpacity style={{top:100}} onPress={handleHome}>
        <Image source={assets.Home1} style={{width:22,height:22, width:70,height:70}}/>
      </TouchableOpacity>
    </View>
  )
}

export default Congrats