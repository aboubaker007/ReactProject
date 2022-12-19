import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useState } from 'react';
import assets from '../constants/assets';

const PaymentCard = ({data}) => {
    const[isActive,setIsActive] = useState(false);
    const handleCircle=() => {
        if (isActive == false)
        {
            setIsActive(true)
        }
        else
        setIsActive(false);
    }
  return (
    <View style={{justifyContent:'center',alignItems:'center'}}>
        <Image source={data.Image} style={{height:110,width:120, borderRadius:100}}/>
        <TouchableOpacity style={{left:100,bottom:70}} onPress={handleCircle}>
        <Image source={isActive ? assets.Circle2 : assets.Circle1} style={{width:23,height:23}}/>
        </TouchableOpacity>
        </View>
  )
}

export default PaymentCard