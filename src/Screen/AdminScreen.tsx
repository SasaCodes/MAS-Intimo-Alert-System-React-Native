import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text, Button, TextInput, StyleSheet ,Alert } from 'react-native';
import { enableScreens } from 'react-native-screens';

const Stack = createNativeStackNavigator();
enableScreens();

const AdminScreen = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Admin Control Panel</Text>
      <View style={styles.containerButton1}><Button title="Add News " onPress={() => navigation.navigate('NewsScreen')} /></View>
      
        <Button title="News View" onPress={() => navigation.navigate('NewsViewScreen')} />

    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: '#fff',
    paddingHorizontal: 20,
    
  },
containerButton1:{
  marginTop:50,
  marginBottom:20
},
title:{
  fontSize:30,
  justifyContent: 'center',
  color:"#000000ff",
  fontWeight:500
}


});
export default AdminScreen