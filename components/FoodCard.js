import { View, Text,Image,TouchableOpacity } from 'react-native'
import React from 'react';
import assets from "../constants/assets";
import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { favList } from '../constants/dummy';

const FoodCard = ({data,index}) => {
  const Navigation= useNavigation();
  const [MyFavList, setMyFavList] = useState(favList);
    const handlePress=() => {
      
        Navigation.navigate('Details',{donn : data, presd:isActive});
    }
    const[isActive,setIsActive] = useState(false);
    function removeMyFavHandler(id) {
      let newMyFavList = [...MyFavList]
     const index = newMyFavList.findIndex(cart => cart.id === id)
     newMyFavList.splice(index,1)
     setMyFavList(newMyFavList)
    }
    function handleHeart(data) {
      if(isActive === false)
      {
      setIsActive(true);
      MyFavList.push(data);
      }
      else 
      {
      setIsActive(false);
      }
    }
  return (

    <TouchableOpacity style={{flexDirection:'row', borderWidth:2, justifyContent:'space-around',alignItems:'center',
    marginVertical:20, height:250, width:230, borderColor:'#FFFFFF', backgroundColor:'#FFFFFF',marginHorizontal:30,borderRadius:30,
    shadowColor: "#565350",shadowOffset: {height: 10,right:10,bottom:10},shadowOpacity: 1,shadowRadius: 9.51,
    elevation: 24

}}
    onPress={handlePress}>
        
        <View key={index} style={{ flexDirection: 'row', paddingVertical: 15,  }}>
         <View style={{
           padding: 10
         }}>
           <Image source={data.image} resizeMode="cover" style={{width: 120, height: 120, borderRadius:150,bottom:80, right:20,borderWidth:3,borderColor:'#EDEDED' }} />
         </View>
       </View>
       <View key={index} style={{flexDirection:'column',  justifyContent:'center'}}>
       <View style={{ paddingHorizontal: 8, justifyContent: 'center' }}>
           <Text style={{ fontSize: 20, top:70,right:60 }}>{data.name}</Text>
         </View>
         <View style={{ paddingHorizontal: 20, justifyContent: 'center' }}>
           <Text style={{fontSize:30, top:5,right:60,color:'#FFCC00',fontStyle:"italic"}}>{data.price} DT</Text>
           </View>
         </View>
         <View>
          <TouchableOpacity style={{borderwidth:1,backgroundColor: "#FFFFFF",height:50,width:60,justifyContent:'center',
        alignItems:'center',bottom:90,right:30,borderTopRightRadius:30,borderBottomLeftRadius:30}}
        onPress={() => handleHeart(data)}>

            <Image source={isActive ? assets.heart1 : assets.heart} style={{height:25,width:25,borderRadius:5}} />
          </TouchableOpacity>
         </View>
         
   </TouchableOpacity>      
  )
}

export default FoodCard