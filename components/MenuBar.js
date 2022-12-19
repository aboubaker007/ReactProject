import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import assets from '../constants/assets'
const MenuBar = (navigation) => {
    const Navigation=useNavigation();
    const handleHome=() => {
        Navigation.navigate('HomeClient');
      }
      const handleProfile = () => {
        Navigation.navigate('Profile');
      }
      const handleCart=() => {
        Navigation.navigate('Cart');
      }
      const handleFav =() => {
        Navigation.navigate('Favorites');
      }
  return (
    
       <View style={{width:"100%",height:55,bottom:10,justifyContent:'center',alignItems:'center',borderWidth:1,borderColor:'#E0E0E0'}}>
          <TouchableOpacity style={{width:30, height:30, right:170,justifyContent:'center',alignItems:'center',top:40}}
          onPress={handleHome}>
            <Image source={assets.Home} style={{width:40,height:40}}/>
          </TouchableOpacity>
          <TouchableOpacity style={{width:52, height:52,justifyContent:'center',alignItems:'center',top:0,
            backgroundColor:'#FFFFFF',borderRadius:50}}
            onPress={handleCart}>
            <Image source={assets.Cart} style={{width:30,height:30}}/>
          </TouchableOpacity>
          <TouchableOpacity style={{width:30, height:30,justifyContent:'center',alignItems:'center',bottom:25,left:150,bottom:40,
            borderRadius:50}} onPress={handleFav}>
            <Image source={assets.heart2} style={{width:50,height:50}}/>
          </TouchableOpacity>
          
        </View>
  )
}

export default MenuBar