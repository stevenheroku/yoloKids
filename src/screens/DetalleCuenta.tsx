import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {MenuUp} from '../components/MenuUp';
import {OpcionesCuentas} from '../components/OpcionesCuentas';
import Icon from 'react-native-vector-icons/Ionicons';
import {TouchableOpacity} from 'react-native-gesture-handler';

export const DetalleCuenta = ({navigation}: any) => {
  const handlePress = () => {
    // Navegar a la vista deseada con parámetros si es necesario
    navigation.openDrawer();
  };
  return (
    <View style={styles.opciones}>
      <View style={styles.container}>
        <View style={styles.icono}>
          <TouchableOpacity
          activeOpacity={0.5}
          onPress={()=>navigation.goBack()}
          >
            <Icon name="backspace-outline" size={30} color="#fff" />
          </TouchableOpacity>
        </View>
        <Text style={{color: 'white'}}>Detalle de la Cuenta</Text>
        {/* <Button
        title='prueba'
        onPress={handlePress}
        /> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, // Hace que el contenedor ocupe todo el espacio disponible
  },
  opciones: {
    flex: 1,
    backgroundColor: '#1A1A1A',
  },
  icono: {
    padding: 15,
  },
});
