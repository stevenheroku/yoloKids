  import React from 'react';
  import { Button, StyleSheet, Text, View } from 'react-native';
  import { MenuUp } from '../components/MenuUp';
import { Cuentas } from '../components/Cuentas';
import { OpcionesApp } from '../components/OpcionesApp';

  export const HomeScreen = ({ navigation }:any) => {
    const handlePress = () => {
      // Navegar a la vista deseada con parámetros si es necesario
      navigation.navigate('DetalleCuenta');
    };
      return (
        <View style={styles.opciones}>
        <View style={styles.container}>
          <MenuUp navigation={navigation} />
          <OpcionesApp navigation={navigation}/>
          
          {/**pasar siempre el navigation al componente de las pantallas para poder navegars */}
          <Cuentas navigation={navigation} />
          </View>
        </View>
      );
    };
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
      },
      opciones:{
        flex:1,
        backgroundColor:'#1A1A1A'
      }
    });