import { View, Text,Image,TouchableOpacity } from 'react-native'
import React from 'react'

const FoodCard = ({data,index}) => {
    const handlePress=() => {
        
    }
  
  return (
    <TouchableOpacity style={{flexDirection:'row', borderWidth:2, justifyContent:'space-around',alignItems:'center',
    borderRadius:10,marginVertical:10, height:300, width:270, borderColor:'#FFCC00',left:40, right:40,borderTopRightRadius:100,
    borderBottomLeftRadius:100

}}
    onPress={handlePress}>
        
        <View key={index} style={{ flexDirection: 'row', paddingVertical: 15,  }}>
         <View style={{
           padding: 10
         }}>
           <Image source={data.image} style={{width: 120, height: 120, borderRadius:150,bottom:70, right:5 }} />
         </View>
       </View>
       <View key={index} style={{flexDirection:'column',  justifyContent:'center'}}>
       <View style={{ paddingHorizontal: 6, justifyContent: 'center' }}>
           <Text style={{ fontSize: 25, top:30,right:80 }}>{data.name}</Text>
         </View><View style={{ paddingHorizontal: 20, justifyContent: 'center' }}>
           <Text style={{fontSize:30, bottom:80,color:'#FFCC00',fontStyle:"italic"}}>{data.price}</Text>
           </View>
         </View>
   </TouchableOpacity>      
  )
}

export default FoodCard