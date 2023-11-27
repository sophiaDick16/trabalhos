import { StatusBar } from 'react';
import {StatusBar } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { Routes } from '@react-navigation/native';


export default function App() {
  return (
      <NavigationContainer>
              <StatusBar backgroundColor="#38A69D" barStyle="light-content"/>
              <Routes/>
      </NavigationContainer>      
     
  )
}


