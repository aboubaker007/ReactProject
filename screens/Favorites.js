import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { favList } from '../constants/dummy'
import { useNavigation } from '@react-navigation/native';
import assets from '../constants/assets'
import { useState } from 'react';
import MenuBar from '../components/MenuBar';
const Favorites = () => {
    const [MyFavList, setMyFavList] = useState(favList);
    const Navigation=useNavigation();
  const handleBack=() => {
    Navigation.goBack();
  }
    
    return (
    <View style={{ backgroundColor: 'transparent', flexDirection:'column', justifyContent:'space-between' }}>
        <View style={{
            width: "100%", height: 100, top: 30, backgroundColor: '#FFDB58',
            justifyContent: 'center', alignItems: 'center'
        }}>
            <Text style={{ fontSize: 20, top: 10 }}>Favorites</Text>
            <TouchableOpacity style={{ width: 100, alignItems: 'center', height: 40, justifyContent: 'space-between', right: 150, bottom: 20 }}
                onPress={handleBack}>
                <Text style={{ left: 20, top: 5, fontSize: 20 }}>Back</Text>
                <Image source={assets.LeftArrow} style={{ height: 40, width: 40, right: 30, bottom: 27 }} />
            </TouchableOpacity>
        </View>
        <View style={{paddingVertical:50}}>
        <FlatList data={MyFavList} keyExtractor={item => `${item.id}`} 
      renderItem={(data,rowMap) => (
        <View style={{justifyContent:'space-between',flexDirection:'row',alignItems:'center',height:100,marginBottom:20,
        borderRadius:200}}>
            <Image source={data.item.image} style={{height:90,width:90,borderRadius:100, left:80}}/>
        <Text style={{fontSize:18,right:80}}>{data.item.name}</Text>
      </View>
      )}/>
</View>
<View style={{backgroundColor:'transparent',position:'absolute',top:810,left:190}}>
        <MenuBar />
      </View>
    </View>
    )
}


export default Favorites