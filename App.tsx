import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {AuthStack} from './src/nagivation/AuthStack';
import { AuthProvider } from './src/context/AuthContext';

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <AuthStack />
      </AuthProvider>
    </NavigationContainer>
  );
}