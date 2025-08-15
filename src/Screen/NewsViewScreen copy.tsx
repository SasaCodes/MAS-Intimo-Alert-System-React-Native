import { View, Text, FlatList, Alert } from 'react-native';
import React, { useEffect, useState } from 'react';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import axios from 'axios';
const NewsViewScreen = ({navigation}:any) => {
 // const array = ['A', 'B', 'C', 'D'];
const [array, setArray] = useState([]);
const [array2, setArray2] = useState([]);
 axios.post('http://10.0.2.2/Intimo/News_View.php')
    .then(function (response)
    {
     // console.log(response.data.ID)
      setArray(response.data.subject) // ✅ update the original array
      setArray2(response.data.ID) 
      
    });

  function RenderEdit(index:any){
    
    
     navigation.navigate('NewsEditScreen',{
      subject:index,
    })
  
  }
 

  return (
    <SafeAreaView>

      <FlatList data={array2} renderItem={({item, index}) => {
        return (
        <View>
          <Text  
          style={{padding: 20}}
            onPress={() =>RenderEdit(item)}
          >{index + 1}. {item} </Text>
        </View>
        )
      }}  keyExtractor={(item, index) => `${item}-${index}`} />

    </SafeAreaView>
  )
}

export default NewsViewScreen



// onPress={() => Alert.alert(item)