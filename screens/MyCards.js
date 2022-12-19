import { View, Text,Image,FlatList,TouchableOpacity,ScrollView } from 'react-native'
import React from 'react'
import { Cards } from '../constants/dummy'
import { useState } from 'react'
import assets from '../constants/assets'
import { PaymentCard } from '../components'
import { useNavigation } from '@react-navigation/native';
const MyCards = ({route}) => {
    const Navigation=useNavigation();
    const { paiement } = route.params;
    const [MyCardList, setMyCardList] = useState(Cards);
    const[isActive,setIsActive] = useState(false);
    const handleCircle=() => {
        if (isActive == false)
        {
            setIsActive(true)
        }
        else
        setIsActive(false);
    }
    const handleBack=() => {
        Navigation.goBack();
    }
    const handlePay=() => {
        Navigation.navigate("PayWithCard")
    }
    const handleAddress=() =>{
      Navigation.navigate("Address");
    }
  return (
    <ScrollView style={{padding:30, marginTop:20, height:"100%", width:"100%"}}>
      <Text style={{fontSize:23, color:'#E69900',marginBottom:20}}>Choose a payment method :</Text>
      <TouchableOpacity onPress={handleBack}>
        <Image source={assets.LeftArrow} style={{width:22,height:22}}/>
      </TouchableOpacity>
      <View>
    <FlatList data={MyCardList}  keyExtractor={item => `${item.id}`} renderItem={({item}) =><PaymentCard data={item} /> }/>
    <View style={{marginTop:60}}>
    <Text style={{fontSize:20, bottom:50, left:100}}>Your bill is : {paiement} DT</Text>
    <TouchableOpacity style={{width:'40%',height:60,borderWidth:1, alignItems:'center',justifyContent:'center',flexDirection:'row',left:200, backgroundColor:'#FFFFFF'}}
    onPress={handleAddress}>
    <Image source={assets.Cash} style={{height:50,width:50, borderRadius:100,right:10}}/>
    <Text style={{fontSize:18}}>Cash</Text>
    </TouchableOpacity>
    <TouchableOpacity style={{width:"40%",height:60, borderWidth:1,bottom:60, alignItems:'center',justifyContent:'center',flexDirection:'row', backgroundColor:'#FFFFFF'
    }} onPress={handlePay}>
    <Image source={assets.Carta} style={{height:50,width:50,right:10}}/>
    <Text style={{fontSize:18}}>Choose</Text>
    </TouchableOpacity>
    </View>
    </View>
    </ScrollView>
  )
}

export default MyCards