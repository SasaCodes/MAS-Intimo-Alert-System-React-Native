import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const NewsEditScreen = ({props,route,navigation }:any) => {
    const subject = route.params?.subject
    return (
    <View>
      <Text>{subject}</Text>
    </View>
  )
}

export default NewsEditScreen