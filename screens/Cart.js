import { View, Text, Image,TouchableOpacity,FlatList,ScrollView } from 'react-native'
import React from 'react'
import MenuBar  from '../components/MenuBar'
import assets from '../constants/assets'
import { CartList } from '../constants/dummy'
import { useState } from 'react'
import { SwipeListView } from 'react-native-swipe-list-view';
import { useNavigation } from '@react-navigation/native';
import { CardAnimationContext } from '@react-navigation/stack'
const Cart = ({route,donn}) => {
  const [MyCartList, setMyCartList] = useState(CartList)
  const Navigation=useNavigation();
  const handleHome=() => {
    Navigation.goBack();
  }
  const handleCards=() => {
    Navigation.navigate("MyCards",{paiement: CalculTotal(MyCartList)})
  }
  function updateQuantityHandler(newQty, id) {
    const newMyCartList=MyCartList.map(cl =>(
      cl.id ===id ? {...cl,quantity:newQty} : cl
    ))
    setMyCartList(newMyCartList)
  }
  function removeMyCartHandler(id) {
    let newMyCartList = [...MyCartList]
   const index = newMyCartList.findIndex(cart => cart.id === id)
   newMyCartList.splice(index,1)
   setMyCartList(newMyCartList)
  }
function CalculTotal(data) {
  let sum = data.reduce((a,v) => a= a+ v.price*v.quantity,0);
  return sum;
}
  /*
  const [count, setCount] = useState(quan);
  const [prix,setPrix] = useState(don.price*count);
    const decrement =() => {
      if(count>1)
      {
      setCount(count - 1);
      setPrix(prix > 0 ? prix - don.price : don.price);
      }
    }
  const increment =() => {
    setCount(count + 1);
    setPrix(prix + don.price);
  }*/

  return (
    <ScrollView style={{backgroundColor:'transparent'}}>
      <View style={{width:"100%",height:100,top:30,backgroundColor:'#FFDB58'
      ,justifyContent:'center',alignItems:'center'}} >
      <Text style={{fontSize:20, top:10 }}>My Cart</Text>
      <TouchableOpacity style={{width:100,alignItems:'center',height:40,justifyContent:'space-between',right:150,bottom:20}}
            onPress={handleHome}>
        <Text style={{left:20,top:5,fontSize:20}}>Back</Text>
        <Image source={assets.LeftArrow} style={{height:40, width:40,right:30,bottom:27}}/>
      </TouchableOpacity>
      </View>
      <View style={{paddingVertical:25,top:30,height:10}}>
        <Image source={assets.Chariot} style={{height:40, width:40,bottom:20 }} />
        <Text style={{left:40,top:20,fontSize:13,position:'absolute'}}> Order summary</Text>
        <TouchableOpacity style={{left:350, bottom:45}}>
          <Text style={{fontSize:10, position:'absolute'}}> Remove all</Text>
        </TouchableOpacity>
      </View>
      <View style={{paddingTop:40}}>
      <FlatList data={MyCartList} keyExtractor={item => `${item.id}`} 
      renderItem={(data,rowMap) => (
        
        <View style={{justifyContent:'space-between',flexDirection:'row',alignItems:'center', borderWidth:1,height:100,marginBottom:20,
        borderRadius:50}}>
        <Image source={data.item.image} style={{height:70,width:70,borderRadius:100, left:10}}/>
        <Text style={{left:0,fontSize:14}}>{data.item.name}</Text>
        <TouchableOpacity style={{height:20,width:20,right:0,alignItems:'center',justifyContent:'center', borderRadius:30, borderWidth:1, borderColor:'#B8B8B8'}}
         onPress={() => data.item.quantity > 1 ? updateQuantityHandler(data.item.quantity - 1, data.item.id) : data.item.quantity}>
          <Text style={{bottom:2}}> - </Text>
        </TouchableOpacity>
        <Text style={{fontSize:20,bottom:2,right:10}}>{data.item.quantity}</Text>
        <TouchableOpacity style={{height:20,width:20,right:20,alignItems:'center',justifyContent:'center', borderRadius:30, borderWidth:1, borderColor:'#B8B8B8'}}
         onPress={() => updateQuantityHandler(data.item.quantity+1, data.item.id)}>
          <Text style={{bottom:2}}> + </Text>
        </TouchableOpacity>
        <Text style={{right:20,bottom:2,fontSize:20}}>{data.item.price*data.item.quantity}DT</Text>
        <TouchableOpacity style={{width:40,height:40,right:10,top:6}}
        onPress={() => removeMyCartHandler(data.item.id)}>
          <Image source={assets.Trash} style={{width:30,height:30}}/>
        </TouchableOpacity>
        </View> 
        
       )}
       />
       </View>
       <View style={{justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
        <Text style={{fontSize:20, right:100}}>SubTotal :</Text>
        <Text style={{fontSize:20, bottom:25}}>{CalculTotal(MyCartList)} DT</Text>
        <Text style={{fontSize:20, right:60,bottom:15}}>Delivery fee :   0 DT</Text>
        <Text style={{fontSize:20, right:50, color:'#FFDB58',bottom:10}}>Total :             {CalculTotal(MyCartList)} DT </Text>
        <TouchableOpacity style={{width:"100%",height:50, backgroundColor:"#FFDB58", justifyContent:'center',alignItems:'center'}}
        onPress={handleCards}>
          <Text>Place your Order</Text>
        </TouchableOpacity>
       </View>
       </ScrollView>
      
      
  )
}

export default Cart
/*
      <View style={{bottom:50,left:10,justifyContent:'space-between',flexDirection:'row',alignItems:'center'}}>
      <Image source={don.image} style={{height:90,width:90,borderRadius:100}}/>
      <Text style={{left:0,fontSize:14}}>{don.name}</Text>
      <TouchableOpacity style={{height:20,width:20,right:0,alignItems:'center',justifyContent:'center', borderRadius:30, borderWidth:1, borderColor:'#B8B8B8'}}
      onPress={decrement} >
        <Text style={{bottom:2}}> - </Text>
      </TouchableOpacity>
      <Text style={{fontSize:20,bottom:2,right:10}}>{count}</Text>
      <TouchableOpacity style={{height:20,width:20,right:20,alignItems:'center',justifyContent:'center', borderRadius:30, borderWidth:1, borderColor:'#B8B8B8'}}
        onPress={increment}>
        <Text style={{bottom:2}}> + </Text>
      </TouchableOpacity>
      <Text style={{right:20,bottom:2,fontSize:20}}>{prix}$</Text>
      <TouchableOpacity style={{width:40,height:40,right:10,top:6}}>
        <Image source={assets.Trash} style={{width:30,height:30}}/>
      </TouchableOpacity>
      </View>
*/
