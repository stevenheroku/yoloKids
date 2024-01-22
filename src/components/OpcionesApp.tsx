import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import { ModalPagosTarjeta } from '../screens/OpcionesHome/ModalPagosTarjeta';

const opcionesData = [
  { id: '1', title: 'Transferencias Propias', icon: 'person-outline', color: '#1DB4A9', screen: 'TransferenciasPropias',modalComponent: ModalPagosTarjeta, isFirstItem:0 },
  { id: '2', title: 'Pagos de Tarjetas', icon: 'card-outline', color: '#EF156B', screen: 'PagosTarjeta' ,modalComponent: ModalPagosTarjeta},
  { id: '3', title: 'Transferencias otras Personas', icon: 'people-outline', color: '#F7C819', screen: 'TransferenciasPersonas' ,modalComponent: ModalPagosTarjeta},
  { id: '4', title: 'Pagos de Servicios', icon: 'phone-portrait-outline', color: '#17738E', screen: 'TransferenciaMoviles' ,modalComponent: ModalPagosTarjeta},
];

const OpcionItem = ({ navigation,title, icon, colores,screen, modalComponent:ModalComponent,isFirstItem }: any) => {

  const [modalVisible, setModalVisible] = useState(false);

  const handlePress = () => {
    // Abre el modal correspondiente
    setModalVisible(true);
    console.log(isFirstItem)
    if(isFirstItem===false)
        navigation.navigate(screen);
  };

  const closeModal = () => {
    // Cierra el modal
    setModalVisible(false);
    
  };

  return (
    <View>
    <TouchableOpacity style={[styles.opcionItem, ]} onPress={handlePress}>
      <View style={styles.iconContainer}>
        <Icon name={icon} size={50} color={colores} style={styles.iconos} />
      </View>
      <Text style={styles.opcionText}>{title}</Text>
    </TouchableOpacity>
    {isFirstItem &&  (
          // Renderizar el switch solo para el primer elemento
          <ModalComponent visible={modalVisible} onClose={closeModal} />
        )}
 
    </View>
  );
};

export const OpcionesApp = ({navigation}: any) => {
  return (
    <View style={styles.container}>
      <FlatList
        overScrollMode="never"
        data={opcionesData}
        horizontal
        scrollEnabled={false}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={({ item,index }) => <OpcionItem  navigation={navigation} title={item.title} icon={item.icon} colores={item.color} screen={item.screen} modalComponent={item.modalComponent} isFirstItem={index === 1||index === 2||index === 3}/> }
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
    width: 90, // Ajusta el ancho según sea necesario
    justifyContent: 'center',
    marginRight: 10, 
  },
  iconContainer: {
    backgroundColor: '#272727',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  opcionText: {
    marginTop: 10,
    color: 'white',
    textAlign: 'center',
    fontSize: 11,
    width: 90, // 
  },
  iconos: {
    backgroundColor: '#272727',
    borderRadius: 5,
    alignContent:'center',
    alignItems:'center',
    justifyContent: 'center', // Centra verticalmente


    padding:5
  },
});
