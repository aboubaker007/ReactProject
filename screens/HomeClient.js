 import React, { useState, useEffect } from "react";
 import { Text, View, FlatList, SafeAreaView, Image, TouchableOpacity,ScrollView  } from 'react-native'
import FoodCard from "../components/FoodCard";
 import { buttons,RestData } from "../constants/dummy";
 import MenuBar from "../components/MenuBar";
 import assets from "../constants/assets";
 


 const HomeClient = () => {
   const [value, setValue] = useState('All')
   const[dataList,setDatalist] = useState(RestData)
   const setValueFilter = val => {
    if(val !== 'All')
    {
     setDatalist([...RestData.filter(e => e.type === val)])
    }
    else {
     setDatalist(RestData)
    }
    setValue(value)
      
    
   }
   return (
     <ScrollView style={{
       paddingHorizontal:10,
       backgroundColor:'#F5F5F5'
     }}
     contentContainerStyle={{justifyContent:'center'}}
     nestedScrollEnabled={true}>
      <View style={{justifyContent:'center', alignItems:'center'}}>
      <Image source={assets.Restau} style={{height:200,width:200, marginBottom:30, top: 30}}/>
      </View>
       <View style={{flexDirection:'row',justifyContent:'space-between',marginHorizontal:20,marginVertical:20}}>
         {
           buttons.map(e => (
             <TouchableOpacity style={{
               borderTopRightRadius:20,
               borderBottomLeftRadius:20,
               padding:25,
               width:70,
               height:40,
               alignItems:'center',
                justifyContent:'center',
                flexDirection:'row',
                backgroundColor:'#FFFFFF',
                marginRight:5
               
               
             }}
             onPress={() => setValueFilter(e.value)}
             key={e.name}>
             <Image source={e.image} style={{height:30,width:30}}/>
             </TouchableOpacity>
           ))
         }
        
       </View>
       <FlatList data={dataList} scrollEnabled={true} keyExtractor={(e,i) => i.toString()} renderItem={({item}) => <FoodCard data={item}/>}ListFooterComponent={<View style={{height:100}}/>}/>
     </ScrollView>
      
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
