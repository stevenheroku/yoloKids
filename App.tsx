import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {AuthStack} from './src/nagivation/AuthStack';

export default function App() {
  return <NavigationContainer>{
    
    <AuthStack />
    
    }</NavigationContainer>;
}
