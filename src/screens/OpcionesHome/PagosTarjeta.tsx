import React from 'react';
import {KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {OpcionesCuentas} from '../../components/OpcionesCuentas';
import { TextInput } from 'react-native-gesture-handler';

export const PagosTarjeta = ({navigation}: any) => {
  const handlePress = () => {
    // Navegar a la vista deseada con parámetros si es necesario
    navigation.openDrawer();
  };
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      style={{ flex: 1 }}
    >
      <ScrollView
        contentContainerStyle={styles.opciones}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.container}>
          <View style={styles.menu}>
            <TouchableOpacity
              activeOpacity={0.5}
              onPress={() => navigation.goBack()}
            >
              <Icon name="backspace-outline" size={30} color="#51AAA2" />
            </TouchableOpacity>
            <View>
              <Text style={styles.title}>Pagar tarjeta de crédito</Text>
            </View>
          </View>
          <Text style={styles.textoPrincipal}>Selecciona el tipo de pago</Text>
          <View style={{ padding: 30 }}>
            <View style={styles.productoOrigen}>
               <TouchableOpacity
               activeOpacity={0.8}
               >
                <Text style={{color:'white', fontSize:15,fontWeight:'bold'}}>Tarjetas Propias</Text>
                <Text style={{color:'white', fontSize:14}}>Paga tu Tarjetas de Crédito Bantrab</Text>
               </TouchableOpacity>
            </View>
            <View style={styles.linea}></View>
            <View style={styles.cuentaDestino}>
            <TouchableOpacity
            activeOpacity={0.8}
            >
                <Text style={{color:'white', fontSize:15,fontWeight:'bold'}}>Tarjetas Terceros</Text>
                <Text style={{color:'white', fontSize:14}}>Paga Tarjetas de Crédito Bantrab de otras personas</Text>
               </TouchableOpacity>
            </View>
          </View>
          
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};


const styles = StyleSheet.create({
  formContainer: {
    backgroundColor: '#262626',
    padding: 45,
    paddingLeft: 30,
    paddingRight: 30,
    width: '100%',
    height: '50%', // Ajusta según el porcentaje deseado
    marginTop: 'auto',
    elevation: 5,
  },
  container: {
    flex: 1, // Hace que el contenedor ocupe todo el espacio disponible
  },
  opciones: {
    flexGrow: 1,
    backgroundColor: '#1A1A1A',
  },
  titleContainer: {
    alignItems: 'center',
  },
  menu: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    backgroundColor: '#262626',
    height: 70,
    alignItems: 'center',
  },
  title: {
    color: '#ffffff',
    textAlign: 'center',
    fontSize: 15,
    fontWeight: 'bold',
    top: -3,
  },
  subtitle: {
    color: '#8C8C8C',
    fontSize: 12,
  },
  Money: {
    fontWeight: 'bold',
    color: '#000000',
  },
  texto: {
    color: '#ffffff',
    fontWeight: 'bold',
    top:-10
  },
  linea: {
    borderBottomWidth: 5, // Adjust the thickness of the line as needed
    borderBottomColor: 'transparent', // Set a transparent white color
    marginVertical: 10, // Adjust the vertical spacing as needed
    width: '100%',
  },
  saldos: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    backgroundColor: 'white',
    height: 70,
    alignItems: 'center',
  },
  lineaVertical: {
    height: '100%', // Ajusta la altura de la línea según tus necesidades
    borderRightWidth: 1, // Grosor de la línea
    borderColor: '#666262', // Color de la línea
    justifyContent: 'center', // Centra verticalmente la línea
  },
  productoOrigen: {
    backgroundColor: '#313131',
    width: '100%',
    height: 80,
    padding: 15,
    borderRadius:15
  },
  cuentaDestino: {
    backgroundColor: '#313131',
    width: '100%',
    height: 80,
    padding: 15,
    borderRadius:15

  },
  input:{
    width: '100%',
    color: '#ffffff',
    height: 40,
    borderColor: '#444444',
    borderWidth: 3,
    borderRadius: 10,
    marginBottom: 16,
    padding: 8,
    top: 45,
  },
  boton:{
    width: '100%',
    height: 40,
    backgroundColor: '#51AAA2',
    top: 90,
    borderRadius: 10,
  },
  textButton:{
    color: 'white',
    textAlign: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    top: 10,
  },
  textoPrincipal:{
    fontSize: 15,
    color:'white',
    textAlign:'center',
    padding:20,
    fontWeight:'bold'
  }
});
