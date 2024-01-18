import React, { useState } from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {MenuUp} from '../components/MenuUp';
import Icon from 'react-native-vector-icons/Ionicons';
import {TouchableOpacity} from 'react-native-gesture-handler';
import { OpcionesCuentas } from '../components/OpcionesCuentas';
import { MenuComponent } from '../components/Menu/MenuComponent';
import { ModalEditarAlias } from '../components/ModalOpcionesCuenta/ModalEditarAlias';
import { ModalConfirmLogout } from '../components/CerrarSesion/ModalConfirmLogout';

export const DetalleCuenta = ({route, navigation}: any) => {
  const {cuenta} = route.params;
  const [modalEditarAliasVisible, setModalEditarAliasVisible] = useState(false);

  const handlePress2 = () => {
    // Abre el modal correspondiente
    setModalEditarAliasVisible(true);
  };

  const closeModalEditarAlias = () => {
    // Cierra el modal
    setModalEditarAliasVisible(false);
  };



  const handlePress = () => {
    // Navegar a la vista deseada con parámetros si es necesario
    navigation.openDrawer();
  };
  return (
    <View style={styles.opciones}>
      <View style={styles.container}>
        <View style={styles.menu}>
          <TouchableOpacity
              activeOpacity={0.5}
              onPress={() => navigation.goBack()}>
              <Icon name="backspace-outline" size={30} color="#51AAA2" />
            </TouchableOpacity>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Cuenta {cuenta.type}</Text>
            <Text style={styles.subtitle}>{cuenta.title.match(/\d+/)[0]}</Text>
          </View>
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={handlePress2}>
            <Icon name="brush-outline" size={30} color="#51AAA2" />
          </TouchableOpacity>
        </View>
        <OpcionesCuentas navigation={navigation}/>
        
        <View style={styles.formContainer}>
          <View style={{alignItems: 'center', top: -20}}>
            <Text style={styles.Money}>Q.7,800.00</Text>
            <Text style={styles.texto}>Saldo disponible</Text>
          </View>
          <View style={styles.linea}></View>
          <View style={styles.saldos}>
            <View style={styles.titleContainer}>
              <Text style={styles.texto}>Q. 0.00</Text>
              <Text style={styles.texto}>Saldo en Reserva</Text>
            </View>
            <View style={styles.lineaVertical}></View>
            <View style={styles.titleContainer}>
              <Text style={styles.texto}>Q.7,800.00</Text>
              <Text style={styles.texto}>Saldo total</Text>
            </View>
          </View>
          
        </View>
        <MenuComponent navigation={navigation} customTop='23%'/>
        <ModalEditarAlias visible={modalEditarAliasVisible} onClose={closeModalEditarAlias} navigation={navigation}/>
      </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    backgroundColor: '#262626',
    padding: 45,
    paddingLeft: 30,
    paddingRight: 30,
    width: '100%',
    height: '65%',
    marginTop: 'auto',
    borderTopLeftRadius: 45,
    borderTopRightRadius: 45,
    elevation: 5,
  },
  container: {
    flex: 1, // Hace que el contenedor ocupe todo el espacio disponible
  },
  opciones: {
    flex: 1,
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
    color: '#ffffff',
    textAlign: 'center',
    fontSize: 12,
    top: -3,
  },
  Money: {
    fontWeight: 'bold',
    color: '#ffffff',
  },
  texto: {
    color: '#fafafa',
    fontWeight: 'bold',
  },
  linea: {
    borderBottomWidth: 1, // Puedes ajustar el grosor de la línea
    borderBottomColor: '#666262', // Puedes ajustar el color de la línea
    marginVertical: 20, // Puedes ajustar el espacio vertical
    width: '100%',
  },
  saldos: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    backgroundColor: '#272727',
    height: 70,
    alignItems: 'center',
  },
  lineaVertical: {
    height: '100%', // Ajusta la altura de la línea según tus necesidades
    borderRightWidth: 1, // Grosor de la línea
    borderColor: '#666262', // Color de la línea
    justifyContent: 'center', // Centra verticalmente la línea
  },
});
