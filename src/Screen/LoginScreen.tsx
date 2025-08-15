import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text, Button, TextInput, StyleSheet ,Alert ,Image} from 'react-native';
import { enableScreens } from 'react-native-screens';
import axios from 'axios';

const Stack = createNativeStackNavigator();

enableScreens();
const LoginScreen = ({navigation}:any) => {

function profile()
{
  axios.post('http://10.0.2.2/Intimo/login.php', 
    {
      username: text1,
      password: text2
    })
    .then(function (response) {
      var state=response.data.state;
      var responseData=response.data.status;
      console.log(responseData)
      switch(responseData) 
      {
        case "success":
          if(state=="admin"){
            Alert.alert("Admin Login")
            navigation.navigate('AdminScreen');
          }
          if(state=="user"){
            Alert.alert("user Login")
            navigation.navigate('HomeScreen');
          }
          break;
        case "fail":
          Alert.alert("Login Fail")
          break;
      }
  });
}

//  http://10.0.2.2/Intimo/login.php
//   var x=10;
//   if(x==10){
// //navigation.navigate('SignupScreen');
// var y=text1;
//    Alert.alert(y)
//   }
//   else{
//     Alert.alert("PAssword incorrect")
//   }
 
// }





const [text1, setText1] = useState('');
  const [text2, setText2] = useState('');
 
  return (
    <View style={styles.container}>
      <Image source={require('../../src/Img/logo.jpg')} style={styles.logo}  />
      <Text style={styles.title} >Login</Text>
      <TextInput placeholder="Email"  onChangeText={setText1}   style={styles.input}  value={text1}  />
      <TextInput placeholder="Password"  onChangeText={setText2}   style={styles.input} value={text2} />
      <Button title="Login" onPress={profile}  color="#fd0000ff" />
    </View>
 
  )
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
   
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    
  },

  input:
  {
    padding:10,
    borderBlockColor:"red",
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: 50,
    backgroundColor: '#f1f1f1',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 20,
    marginTop:10
  },
  logo:{
     width: 200, 
     height: 200,
     marginTop:50,
     marginBottom:30,
  },
  button: {
    marginTop: 20,
    width: 200,
    alignSelf: 'center',
  },
  title:{
    fontSize:30,
    color: '#000000ff',
    fontWeight:500,
    marginBottom:20
  },
  

});





export default LoginScreen