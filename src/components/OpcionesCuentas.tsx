import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, View, Modal, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { ModalTransferir } from './ModalOpcionesCuenta/ModalTrasnferir';
import { ModalPagar } from './ModalOpcionesCuenta/ModalPagar';
import { ModalRetirarDinero } from './ModalOpcionesCuenta/ModalRetirarDinero';
import { ModalTarjetaDebito } from './ModalOpcionesCuenta/ModalTarjetaDebito';
import { ModalAjusteCuenta } from './ModalOpcionesCuenta/ModalAjusteCuenta';

// Componente de modal para Transferir
const TransferirModal = ({ visible, onClose }: any) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={() => onClose()}>
      <View style={styles.modalContainer}>
        <Text>Contenido del modal de Transferir</Text>
        <TouchableOpacity onPress={() => onClose()}>
          <Text>Cerrar modal</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

const opcionesData = [
  { id: '1', title: 'Transferir', icon: 'swap-horizontal-outline', color: '#1DB4A9', screen: 'Transferir', modalComponent: ModalTransferir },
  { id: '2', title: 'Pagar', icon: 'card-outline', color: '#EF156B', screen: 'Pagar',modalComponent:ModalPagar 
 },
  { id: '3', title: 'Ahorro por consumo', icon: 'people-outline', color: '#D5D5D5', screen: 'AhorroPorConsumo',modalComponent:ModalPagar },
  { id: '4', title: 'Retirar', icon: 'phone-portrait-outline', color: '#EBD54C', screen: 'Retirar',modalComponent:ModalRetirarDinero  },
  { id: '5', title: 'Tarjeta de débito', icon: 'card-outline', color: '#AE3165', screen: 'TarjetaDebito',modalComponent:ModalTarjetaDebito  },
  { id: '6', title: 'Ajustes', icon: 'settings-outline', color: '#34768A', screen: 'Ajustes',modalComponent:ModalAjusteCuenta  },
  { id: '7', title: 'Detalle', icon: 'search-outline', color: '#15ACAA', screen: 'Detalle' },
];

const OpcionItem = ({ navigation, title, icon, colores, screen, modalComponent: ModalComponent }: any) => {
  const [modalVisible, setModalVisible] = useState(false);

  const handlePress = () => {
    // Abre el modal correspondiente
    setModalVisible(true);
  };

  const closeModal = () => {
    // Cierra el modal
    setModalVisible(false);
  };

  return (
    <View>
      <TouchableOpacity activeOpacity={0.8} style={styles.opcionItem} onPress={handlePress}>
        <View style={[styles.opcionItemContainer, { backgroundColor: `${colores}40` }]}>
          <View style={styles.iconContainer}>
            <Icon name={icon} size={50} color={colores} style={styles.iconos} />
          </View>
        </View>
        <Text style={styles.opcionText}>{title}</Text>
      </TouchableOpacity>

      {/* Renderiza el modal correspondiente */}
      {ModalComponent && (
        <ModalComponent visible={modalVisible} onClose={closeModal} />
      )}
     
    </View>
  );
};

export const OpcionesCuentas = ({ navigation }: any) => {
  const [modalComponent, setModalComponent] = useState(null);

  const handlePress = (modalComponent:any) => {
    // Abrir el modal correspondiente
    setModalComponent(modalComponent);
  };

  const closeModal = () => {
    // Cerrar el modal
    setModalComponent(null);
  };
  return (
    <View style={styles.container}>
      <FlatList
      overScrollMode="never"
        data={opcionesData}
        showsHorizontalScrollIndicator={false}
        horizontal
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <OpcionItem
            navigation={navigation}
            title={item.title}
            icon={item.icon}
            colores={item.color}
            screen={item.screen}
            modalComponent={item.modalComponent}
            modalVisible={modalComponent === item.modalComponent}
            handlePress={() => handlePress(item.modalComponent)}
            closeModal={closeModal}
          />
        )}
      />
    </View>
  );
};

const opcionesCount = opcionesData.length;
const porcentajeAncho = 100 / opcionesCount;

const styles = StyleSheet.create({
  container: {
    marginTop: "10%",
    flexDirection: 'row',
  },
  opcionItem: {
    alignItems: 'center',
    width: 60,
    justifyContent: 'center',
    marginRight: 25,
    marginLeft: 25,
  },
  opcionText: {
    marginTop: 10,
    color: '#ffffff',
    textAlign: 'center',
    fontSize: 11,
    width: 90,
  },
  iconos: {
    borderRadius: 5,
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
  },
  opcionItemContainer: {
    borderRadius: 10,
    overflow: 'hidden',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },iconContainer: {
    backgroundColor: 'transparent', // Ajusta el color de fondo según tus necesidades
    borderRadius: 10,
  },
});
