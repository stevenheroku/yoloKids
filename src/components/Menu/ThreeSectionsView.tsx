import React, { useState } from 'react';
import { View, StyleSheet, Modal, FlatList, Text, TouchableOpacity } from 'react-native';
import { MenuComponent } from './MenuComponent';

const ThreeSectionsView = ({ navigation }: any) => {
  const [isModalVisible, setModalVisible] = useState(false);

  const data = [
    { id: '1', title: 'Opción 1' },
    { id: '2', title: 'Opción 2' },
    // Agrega más opciones según sea necesario
  ];

  const renderItem = ({ item }:any) => (
    <TouchableOpacity style={styles.optionItem}>
      <Text style={styles.optionText}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* Menú superior */}
      <View style={styles.topMenu}>
        {/* Agrega tus elementos del menú superior aquí */}
        <Text style={styles.menuText}>Menú Superior</Text>
      </View>

      {/* FlatList con opciones */}
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        style={styles.flatList}
      />

      {/* Contenedor inferior con border */}
      <View style={styles.bottomContainer}>
        {/* Agrega tus elementos en el contenedor inferior aquí */}
        <View style={{alignItems: 'center', top: -20}}>
            <Text style={styles.Money}>Q.7,800.00</Text>
            <Text style={styles.texto}>Saldo disponible</Text>
          </View>
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

      {/* Modal para el menú */}
      <MenuComponent navigation={navigation} />
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A1A1A', // Color oscuro de fondo
  },
  topMenu: {
    height: 50,
    backgroundColor: '#333', // Color del menú superior
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  flatList: {
    flex: 1,
    padding: 10,
  },
  optionItem: {
    backgroundColor: '#454545',
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
  },
  optionText: {
    color: 'white',
    fontSize: 16,
  },
  bottomContainer: {
    backgroundColor: '#262626',
    flex: 1,
    borderTopWidth: 1,
    borderTopColor: 'white',
    padding: 20,
    paddingBottom: 0, // Añade esta línea
    position: 'relative',
  },
  bottomContainerText: {
    color: 'white',
    fontSize: 18,
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
  },titleContainer: {
    alignItems: 'center',
  },
});
export default ThreeSectionsView;
