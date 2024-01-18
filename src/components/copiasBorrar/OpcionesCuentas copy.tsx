import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';

const opcionesData = [
  { id: '1', title: 'Transferir', icon: 'swap-horizontal-outline', color: '#1DB4A9', screen: 'Transferir' },
  { id: '2', title: 'Pagar', icon: 'card-outline', color: '#EF156B', screen: 'Pagar' },
  { id: '3', title: 'Ahorro por consumo', icon: 'people-outline', color: '#D5D5D5', screen: 'AhorroPorConsumo' },
  { id: '4', title: 'Retirar', icon: 'phone-portrait-outline', color: '#EBD54C', screen: 'Retirar' },
  { id: '5', title: 'Tarjeta de débito', icon: 'card-outline', color: '#AE3165', screen: 'TarjetaDebito' },
  { id: '6', title: 'Ajustes', icon: 'settings-outline', color: '#34768A', screen: 'Ajustes' },
  { id: '7', title: 'Detalle', icon: 'search-outline', color: '#15ACAA', screen: 'Detalle' },

];

const OpcionItem = ({ navigation,title, icon, colores, screen }: any) => {

  const handlePress = () => {
    // Navegar a la pantalla específica al presionar el ícono
    navigation.navigate(screen);
  };

  return (
    <TouchableOpacity style={[styles.opcionItem, ]} onPress={handlePress}>
      <View style={styles.opcionItemContainer}>
        <View style={{ backgroundColor: colores, borderRadius: 10 }}>
          <Icon name={icon} size={50} color={colores} style={styles.iconos} />
        </View>
      </View>
      <Text style={styles.opcionText}>{title}</Text>
      

    </TouchableOpacity>
  );
};

export const OpcionesCuentas = ({navigation}: any) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={opcionesData}
        showsHorizontalScrollIndicator={false}

        horizontal
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
    width: 60, // Establece el ancho como un porcentaje
    justifyContent: 'center', // Centra verticalmente
    marginRight: 25,
    marginLeft:25
  },
  opcionText: {
    marginTop: 10,
    color: '#ffffff',
    textAlign: 'center',
    fontSize: 11,
    width: 90, // 
  },
  iconos: {
    borderRadius: 5,
    alignContent:'center',
    alignItems:'center',
    justifyContent: 'center', // Centra verticalmente
    padding:5
  },
  opcionItemContainer:{
    opacity:0.4
  }
});
