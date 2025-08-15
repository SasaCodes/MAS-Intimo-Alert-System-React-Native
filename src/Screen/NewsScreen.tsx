import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text, Button, TextInput, StyleSheet, Alert } from 'react-native';
import { enableScreens } from 'react-native-screens';
import axios from 'axios';

const Stack = createNativeStackNavigator();

enableScreens();
const NewsScreen = ({ navigation }: any) => {

  function NewsInsert() {
    Alert.alert(message)
    if (!message.trim() || !msg_subject.trim()) {
      Alert.alert('Error', 'All fields are required!');
    }
    else {

      axios.post('http://10.0.2.2/Intimo/news.php',
        {
          subject: msg_subject,
          message: message
        })
        .then
        (function (response) {
          var responseJson = response.data;
          console.log(responseJson)
        }
        );
      Alert.alert('Alert Inserted Successfully');
    }

  }
  const [msg_subject, setText1] = useState('');
  const [message, setText2] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title} >New Message</Text>

      <Text> Subject </Text>
      <TextInput placeholder="Enter text" onChangeText={setText1} style={styles.largetextInput} value={msg_subject} />

      <Text> Message </Text>
      <TextInput placeholder="Enter text" onChangeText={setText2} style={styles.largetextInput} multiline={true} numberOfLines={10} value={message} />
      <Button title="NewsInsert" onPress={NewsInsert} />
    </View>

  )
}

const styles = StyleSheet.create({
  container:
  {
    flex: 1,
    // alignItems: 'center',
    // backgroundColor: '#fff',
    // paddingHorizontal: 20,
    alignContent: 'center'
  },

  largetextInput:
  {
    borderColor: 'blue',
    borderRadius: 10,
    borderWidth: 1,
    // paddingTop: 10,
    // paddingBottom: 10,
    // paddingHorizontal: 10,
    // fontSize: 15,
    // color: 'black',
    // maxHeight: 50,
    margin: 10,

  }, title: {
    fontSize: 30,
    color: '#000000ff',
    fontWeight: 500,
    marginBottom: 20
  },


});




export default NewsScreen