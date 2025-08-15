import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text, Button, TextInput, StyleSheet, Alert } from 'react-native';
import { enableScreens } from 'react-native-screens';
import LoginScreen from './src/Screen/LoginScreen';

import SignupScreen from './src/Screen/SignupScreen';
import HomeScreen from './src/Screen/HomeScreen';
import AdminScreen from './src/Screen/AdminScreen';
import NewsScreen from './src/Screen/NewsScreen';
import NewsViewScreen from './src/Screen/NewsViewScreen';
import NewsEditScreen from './src/Screen/NewsEditScreen';

const Stack = createNativeStackNavigator();
enableScreens();
export default function App() {
  return (
    
  <NavigationContainer>
      <Stack.Navigator initialRouteName="LoginScreen" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="SignupScreen" component={SignupScreen} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="AdminScreen" component={AdminScreen} />
        <Stack.Screen name="NewsScreen" component={NewsScreen} />
        <Stack.Screen name="NewsViewScreen" component={NewsViewScreen} />
        <Stack.Screen name="NewsEditScreen" component={NewsEditScreen} />
      </Stack.Navigator>
    </NavigationContainer>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
