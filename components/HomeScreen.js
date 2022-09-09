import React, {useState} from 'react';
import {View, Text,TextInput, Button} from 'react-native'
export default function About ({navigation}) { 
    const [username, setUsername] = useState(''); 
    const [Password, setPassword] = useState(''); 
    const homePage= ()=>{
        navigation.navigate('Home')
        }   
        const aboutPage= ()=>{
            navigation.navigate('About')
            }  
            const imagesPage= ()=>{
                navigation.navigate('Images')
                }     
  return (
    <>
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <View>
    <TextInput         
         placeholder="Enter Email"
         onChangeText={newText => setUsername(newText)}
         defaultValue={username}
         style={{
            height: 40,
            marginTop:10,
            borderColor: 'green',
            borderWidth: 1,
          }}
       />  
       <TextInput
         style={{
            height: 40,
            marginTop:10,
            borderColor: 'green',
            borderWidth: 1,
          }}
         placeholder="Enter Password"
         secureTextEntry={true}
         onChangeText={newText => setPassword(newText)}
         defaultValue={Password}
       />         
    </View>   
    <View style={{marginBottom:20,marginTop:20}}>
      <Button title='Go to Ecommerce' onPress={homePage}/>
      </View>  
      <View style={{marginBottom:20,marginTop:20}}>
      <Button title='Go to About' onPress={aboutPage}/>
      </View>    
      <Button title='Go to Images' onPress={imagesPage}/>    
   </View>
   </>
  );
}

 