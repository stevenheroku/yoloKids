import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';

const opcionesData = [
  { id: '1', title: 'Chat', icon: 'chatbox-outline', color: '#1DB4A9', screen: 'Chat' },
  { id: '2', title: 'Pagos de Tarjetas', icon: 'card-outline', color: '#EF156B', screen: 'PagosTarjeta' },
  { id: '3', title: 'Transferencias otras Personas', icon: 'people-outline', color: '#F7C819', screen: 'TransferenciasPersonas' },
  { id: '4', title: 'Transferencias móviles', icon: 'phone-portrait-outline', color: '#17738E', screen: 'TransferenciaMoviles' },
];

const OpcionItem = ({ navigation,title, icon, colores, screen }: any) => {

  const handlePress = () => {
    // Navegar a la pantalla específica al presionar el ícono
    navigation.navigate(screen);
  };

  return (
    <TouchableOpacity style={[styles.opcionItem, ]} onPress={handlePress}>
      <View >
        <Icon name={icon} size={70} color={colores} style={styles.iconos} />
        <Text style={styles.opcionText}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export const OpcionesCuentas = ({navigation}: any) => {
  return (
    <View style={styles.container}>
      <FlatList
        overScrollMode="never"
        data={opcionesData}
        horizontal
        scrollEnabled={false}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <OpcionItem  navigation={navigation} title={item.title} icon={item.icon} colores={item.color} screen={item.screen}/>}
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
    width: 50, // Establece el ancho como un porcentaje
    justifyContent: 'center', // Centra verticalmente
    marginRight: 25,
    marginLeft:25
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
