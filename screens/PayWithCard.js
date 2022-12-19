import { View, Text, TextInput, TouchableOpacity,Image } from 'react-native'
import React from 'react'
import { useState,useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';
import assets from '../constants/assets';

const PayWithCard = () => {
  const Navigation=useNavigation();

  const handleAddress=() =>{
    Navigation.navigate("Address");
  }
  const handleBackk=() => {
    Navigation.goBack();
}

  return (
    <View style={{padding:50}}>
      <Text style={{fontSize:25, color:'#E69900', marginBottom:40}}>Pay with your card :</Text>
      <TouchableOpacity style ={{right:40,bottom:30}} onPress={handleBackk}>
        <Image source={assets.LeftArrow} style={{width:22,height:22}}/>
      </TouchableOpacity>
      <Text style={{fontSize:20, marginBottom:15}}>Full Name :</Text>
      <TextInput style={{borderWidth:1, height:40}}></TextInput>
      <Text style={{fontSize:20,marginTop:10, marginBottom:15}}>Card Number :</Text>
      <TextInput style={{borderWidth:1, height:40}}></TextInput>
      <Text style={{fontSize:20,marginTop:10, marginBottom:15}}>CVV2 :</Text>
      <TextInput style={{borderWidth:1, height:40}}></TextInput>
      <Text style={{fontSize:20,marginTop:10, marginBottom:5}}>Expiration date :</Text>
      <Text style={{fontSize:20,top:25,right:10,top:30}}>Month :</Text>
      <TextInput style={{borderWidth:1, height:40,width:"30%",left:70}}></TextInput>
      <Text style={{fontSize:20,bottom:40,left:180,bottom:40}}>Year :</Text>
      <TextInput style={{borderWidth:1, height:40,width:"30%",left:250,bottom:70}}></TextInput>
      <TouchableOpacity style={{width:"100%",height:50,borderWidth:1,justifyContent:'center',alignItems:'center',backgroundColor:'#E69900'}}
      onPress={handleAddress}>
        <Text style={{fontSize:20}}>Pay</Text>
      </TouchableOpacity>

    </View>
  )
}

export default PayWithCard