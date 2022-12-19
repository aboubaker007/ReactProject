import { View, Text, Image,TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import MenuBar from '../components/MenuBar';
import assets from '../constants/assets';
import { CartList} from '../constants/dummy';
const Details = ({route}) => {
  const { donn,presd } = route.params;
  const Navigation=useNavigation();
  const handleHome=() => {
    Navigation.navigate('HomeClient');
  }
  const[isPressed,setIsPressed] = useState(presd);
    const handleHearts=() => {
      if(isPressed === false)
      setIsPressed(true);
      else 
      setIsPressed(false);
    }
    const [count, setCount] = useState(1);
    const decrement =() => {
      if(count>1)
      setCount(count - 1);
    }

    function addToCart(data) {
      CartList.push(data);
    
    }


  return (
    <View style={{backgroundColor:'#FFDDCC'}}>
    <View style={{backgroundColor:'#FFFFFF',height:600}}>
   <View style={{justifyContent:'center',alignItems:'center',top:60,right:150}}>
      <TouchableOpacity style={{width:100,alignItems:'center',height:40,justifyContent:'space-between'}}
            onPress={handleHome}>
        <Text style={{left:20,top:5,fontSize:20}}>Back</Text>
        <Image source={assets.LeftArrow} style={{height:40, width:40,right:30,bottom:27}}/>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleHearts} style={{left:300,bottom:40}}>
        <Image source={isPressed ? assets.heart1 : assets.heart} style={{width:40,height:40}}/>
      </TouchableOpacity>
    </View>
    <View style={{justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
      <Image source={donn.image} style={{ width:300,height:300,borderRadius:300,bottom:-40, borderColor:'#FFDDCC',borderWidth:6}} />
      <Text style={{fontSize:24,top:85}}>{donn.price}DT</Text>
      <Text style={{bottom:-8, fontSize:24}}>{donn.name}</Text>
      <Text style={{top:70,right:60,fontSize:20}}>{donn.rating}</Text>
      <Image source={assets.Star} style={{height:30,width:30,top:43,right:90}}  />
      <Text style={{fontSize:20, left:50,top:13}}> Delivery Fee : 0 DT</Text>
      <Image source={assets.Clock} style={{width:30,height:30,top:30,right:60}}/>
      <Text style={{fontSize:15,top:2,left:10}}>{donn.prep1}-{donn.prep2} mins</Text>
    </View>
    </View>
    <View style={{backgroundColor:'#FFFFFF', height:200,width:"100%"}}>
      <Text style={{fontSize:30,color:'#000000',top:50, left:50}}>Quantity </Text>
      <TouchableOpacity style={{height:30,width:30,left:225,top:20,backgroundColor:'#FFFFFF',
      alignItems:'center',justifyContent:'center', borderRadius:30, borderWidth:1, borderColor:'#000000'}}
      onPress={decrement} >
        <Text> - </Text>
      </TouchableOpacity>
      <Text style={{fontSize:30,color:'#000000',left:280,bottom:17}}>{donn.quantity=count}</Text>
      <TouchableOpacity style={{height:30,width:30,left:325,bottom:50,backgroundColor:'#FFFFFF',
      alignItems:'center',justifyContent:'center', borderRadius:30, borderWidth:1, borderColor:'#000000'}}
        onPress={() => {setCount(count+1)}}>
        <Text> + </Text>
      </TouchableOpacity>
      <TouchableOpacity style={{width:"100%",height:70,borderWidth:0.5,borderColor:'#B8B8B8',bottom:10,justifyContent:'center',alignItems:'center',
            backgroundColor:'#FFDB58'}}
            onPress={() => addToCart(donn)}>     
     <Text style={{fontSize:30, color:'#FFFFFF'}}>Add to cart</Text>
      </TouchableOpacity>
      <View style={{backgroundColor:'transparent'}}>
        <MenuBar />
      </View>
    </View>

    </View>
  )
}

export default Details 