import { View, Text,TextInput,TouchableOpacity,Image } from 'react-native'
import React from 'react'
import assets from '../constants/assets';
import { useNavigation } from '@react-navigation/native';
const Address = () => {
    const Navigation=useNavigation();
    const handleBack=() => {
        Navigation.goBack();
    }
    const handleCongrats=() => {
        Navigation.navigate("Congrats")
    }
  return (
    <View style={{padding:50}}>
      <Text style={{fontSize:25, color:'#E69900', marginBottom:40}}>Address :</Text>
      <TouchableOpacity style={{right:40,bottom:30}} onPress={handleBack}>
        <Image source={assets.LeftArrow} style={{width:22,height:22}}/>
      </TouchableOpacity>
      <Text style={{fontSize:20, marginBottom:15}}>Full Name :</Text>
      <TextInput style={{borderWidth:1, height:40}}></TextInput>
      <Text style={{fontSize:20,marginTop:10, marginBottom:15}}>City :</Text>
      <TextInput style={{borderWidth:1, height:40}}></TextInput>
      <Text style={{fontSize:20,marginTop:10, marginBottom:15}}>Street :</Text>
      <TextInput style={{borderWidth:1, height:40}}></TextInput>
      <TouchableOpacity style={{width:"100%",height:50,marginTop:40,borderWidth:1,justifyContent:'center',alignItems:'center',backgroundColor:'#E69900'}}
      onPress={handleCongrats}>
        <Text style={{fontSize:20}}>Validate</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Address