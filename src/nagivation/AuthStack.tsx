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
import { TransferenciaMoviles } from '../screens/OpcionesHome/TransferenciaMoviles';
import { TransferenciasPersonas } from '../screens/OpcionesHome/TransferenciasPersonas';
import { Settigns } from '../screens/OpcionesMenu/Settigns';
import { Gestiones } from '../screens/OpcionesMenu/Gestiones';
import { SolicitarProducto } from '../screens/OpcionesMenu/SolicitarProducto';
import { AhorroProgramado } from '../screens/OpcionesMenu/AhorroProgramado';
import { TransferenciasPropias } from '../screens/OpcionesHome/TransferenciasPropias';
import { PagosTarjeta } from '../screens/OpcionesHome/PagosTarjeta';
import { Contacto } from '../screens/OpcionesMenu/Contacto';
import { SimuladorTasaCambio } from '../screens/OpcionesMenu/SimuladorTasaCambio';
import { Tutoriales } from '../screens/OpcionesMenu/Tutoriales';
import { OperacionProgramadas } from '../screens/OpcionesMenu/OperacionProgramadas';
import { Transferir } from '../screens/OpcionesCuenta/Transferir';
import { Pagar } from '../screens/OpcionesCuenta/Pagar';
import { AhorroPorConsumo } from '../screens/OpcionesCuenta/AhorroPorConsumo';
import { Retirar } from '../screens/OpcionesCuenta/Retirar';
import { TarjetaDebito } from '../screens/OpcionesCuenta/TarjetaDebito';
import { Ajustes } from '../screens/OpcionesCuenta/Ajustes';
import { Detalle } from '../screens/OpcionesCuenta/Detalle';
import { MenuComponent23 } from '../components/Menu/MenuComponent23';
import ThreeSectionsView from '../components/Menu/ThreeSectionsView';
import { DetalleCuenta } from '../screens/DetalleCuenta';

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
      <Stack.Screen name="TransferenciasPropias" component={TransferenciasPropias} />
      <Stack.Screen name="PagosTarjeta" component={PagosTarjeta} />
      <Stack.Screen name="TransferenciaMoviles" component={TransferenciaMoviles} />
      <Stack.Screen name="TransferenciasPersonas" component={TransferenciasPersonas} />
      <Stack.Screen name="Settigns" component={Settigns} />
      <Stack.Screen name="Gestiones" component={Gestiones} />
      <Stack.Screen name="SolicitarProducto" component={SolicitarProducto} />
      <Stack.Screen name="OperacionProgramadas" component={OperacionProgramadas} />
      <Stack.Screen name="AhorroProgramado" component={AhorroProgramado} />
      <Stack.Screen name="Contacto" component={Contacto} />
      <Stack.Screen name="SimuladorTasaCambio" component={SimuladorTasaCambio} />
      <Stack.Screen name="Tutoriales" component={Tutoriales} />

      <Stack.Screen name="Transferir" component={Transferir} />
      <Stack.Screen name="Pagar" component={Pagar} />
      <Stack.Screen name="AhorroPorConsumo" component={AhorroPorConsumo} />
      <Stack.Screen name="Retirar" component={Retirar} />
      <Stack.Screen name="TarjetaDebito" component={TarjetaDebito} />
      <Stack.Screen name="Ajustes" component={Ajustes} />
      <Stack.Screen name="Detalle" component={Detalle} />
      <Stack.Screen name="MenuComponent23" component={MenuComponent23} />
      <Stack.Screen name="ThreeSectionsView" component={ThreeSectionsView} />

    </Stack.Navigator>
      );
}
