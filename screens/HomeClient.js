 import React, { useState, useEffect } from "react";
 import { Text, View, FlatList, SafeAreaView, Image, TouchableOpacity  } from 'react-native'
import FoodCard from "../components/FoodCard";
 import { buttons,RestData } from "../constants/dummy";




 const HomeClient = () => {
   const [value, setValue] = useState('All')
   const[dataList,setDatalist] = useState(RestData)
   const setValueFilter = val => {
    if(val !== 'All')
    {
     setDatalist([...RestData.filter(e => e.name === val)])
    }
    else {
     setDatalist(RestData)
    }
    setValue(value)
   }
   const renderItem= ({item, index}) => {
     return(
       <View style={{flexDirection:'row'}}>
        <View key={index} style={{ flexDirection: 'row', paddingVertical: 15,  }}>
         <View style={{
           padding: 10
         }}>
           <Image source={item.image} style={{width: 150, height: 150, borderRadius:150 }} />
         </View>
       </View>
       <View key={index} style={{flexDirection:'column',  justifyContent:'center'}}>
       <View style={{ paddingHorizontal: 6, justifyContent: 'center' }}>
           <Text style={{ fontSize: 30 }}>{item.name}</Text>
         </View><View style={{ paddingHorizontal: 20, justifyContent: 'center' }}>
           <Text style={{fontSize:20,marginTop:10}}>{item.price}</Text>
           </View>
         </View>
         </View>
        
     )       
    
   }
   return (
     <SafeAreaView style={{
       paddingHorizontal:10,
       justifyContent:'center'
     }}>
      <View>
        <Text style={{fontSize:22,color:'#FF215E',marginTop:30, paddingTop:20}}>
          Favorites
        </Text>
      </View>
       <View style={{ padding:20,flexDirection:'row'}}>
         {
           buttons.map(e => (
             <TouchableOpacity style={{
               borderWidth:0.5,
               borderColor:'#00FFFF',
               backgroundColor:'#FFDD33',
               padding:20,
               
             }}
             onPress={() => setValueFilter(e.value)}>
               <Text style={{fontSize:12}}>{e.value}</Text>
             </TouchableOpacity>
           ))
         }
        
       </View>
       <FlatList data={dataList} keyExtractor={(e,i) => i.toString()} renderItem={({item}) => <FoodCard data={item}/>}/>
     </SafeAreaView>
      
   ) 
 }
 export default HomeClient;

//import { View, Text , StyleSheet,Button,TouchableOpacity, Touchable} from 'react-native'
//import React from 'react'


//export default function HomeClient({propData,func}) {
  //const FilterAsian = ()=>{
    //func(propData.filter(e=>e.name=="asian"));
    //console.log("click")
  //}
 // const [value,setValue] = useState('All')
  
  //return (
    //<View >
     //{propData.map((e,key)=>(
      //<>
      //<Text>
        //{e.name}
      //</Text>
      
      //</>
      
       
     //)
     
     //)}
    //<TouchableOpacity onPress={FilterAsian}>
      //<Text>enzel</Text>
    //</TouchableOpacity>
     
    //</View>
  //)
//}

//const styles = StyleSheet.create({
 // container:{
   // flex:1,
    //justifyContent:"center",
    //alignItems:"center"
  //}
//})
//
