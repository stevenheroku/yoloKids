import { createStackNavigator } from '@react-navigation/stack';
import React from 'react'
import { HomeScreen } from '../screens/HomeScreen';
import { AboutScreen } from '../screens/AboutScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from '../screens/LoginScreen';
import { Settings, useWindowDimensions } from 'react-native';
import { RegisterScreen } from '../screens/RegisterScreen';
import { HomeDrawer } from './HomeDrawer';
import { DetalleCuenta } from '../screens/DetalleCuenta';
import { Chat } from '../screens/OpcionesHome/Chat';
import { PagosTarjeta } from '../screens/OpcionesHome/PagosTarjeta';
import { TransferenciaMoviles } from '../screens/OpcionesHome/TransferenciaMoviles';
import { TransferenciasPersonas } from '../screens/OpcionesHome/TransferenciasPersonas';
import { Settigns } from '../screens/OpcionesMenu/Settigns';
import { Gestiones } from '../screens/OpcionesMenu/Gestiones';
import { SolicitarProducto } from '../screens/OpcionesMenu/SolicitarProducto';
import { OperacionProgramdas } from '../screens/OpcionesMenu/OperacionProgramadas';

const Stack = createStackNavigator();

export const AuthStack = () => {
    const { width } = useWindowDimensions();

    return (
      <Stack.Navigator initialRouteName="LoginScreen"
      
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor:'white'
        },
      }}>
      <Stack.Screen name="LoginScreen" component={LoginScreen}  />
      <Stack.Screen name="HomeDrawer" component={HomeDrawer}  />
      <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
      <Stack.Screen name="DetalleCuenta" component={DetalleCuenta} />
      <Stack.Screen name="Chat" component={Chat} />
      <Stack.Screen name="PagosTarjeta" component={PagosTarjeta} />
      <Stack.Screen name="TransferenciaMoviles" component={TransferenciaMoviles} />
      <Stack.Screen name="TransferenciasPersonas" component={TransferenciasPersonas} />
      <Stack.Screen name="Settigns" component={Settigns} />
      <Stack.Screen name="Gestiones" component={Gestiones} />
      <Stack.Screen name="SolicitarProducto" component={SolicitarProducto} />
      <Stack.Screen name="OperacionProgramdas" component={OperacionProgramdas} />

    </Stack.Navigator>
      );
}
