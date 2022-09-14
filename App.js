import * as React from 'react';
import { View, Text, Button, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import HomeScreen from './components/HomeScreen'
import Home from './components/Home'
import About from './components/About'
import Images from './components/Images'
import Videos from './components/Videos'
export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
  <Stack.Navigator initialRouteName='HomeScreen'>
    <Stack.Screen  name = "HomeScreen" component = {HomeScreen}/>
    <Stack.Screen  name = "Home" component = {Home} options={{ headerShown: false }}/>
    <Stack.Screen  name = "About" component = {About} options={{title: 'Introduction' }}/>
    <Stack.Screen  name = "Images" component = {Images} options={{title: 'Images' }}/> 
    <Stack.Screen  name = "Videos" component = {Videos} options={{title: 'Videos' }}/>    
  </Stack.Navigator>  
    </NavigationContainer>
  );
}