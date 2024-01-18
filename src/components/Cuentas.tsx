import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const DATA = [
  {
    id: '1',
    type: 'monetaria',
    title: 'Cuenta Monetaria 51514225254',
  },
  {
    id: '2',
    type: 'ahorro',
    title: 'Cuenta de ahorros 51514225254',
  },
  {
    id: '3',
    type: 'ahorro',
    title: 'Cuenta de ahorros 51514225254',
  },
];

const Item = ({title, type, navigation,item}: any) => {
  const handlePress = () => {
    // Navegar a la vista deseada con parámetros si es necesario
    navigation.navigate('DetalleCuenta', { cuenta: item });
  };

  const renderIcon = () => {
    if (type === 'monetaria') {
      return (
        <Icon name="key-outline" size={24} color="#26AEB2" style={styles.icon} />
      );
    } else if (type === 'ahorro') {
      return (
        <Icon name="card-outline" size={24} color="#26AEB2" style={styles.icon} />
      );
    }
    // Puedes agregar más lógica para otros tipos de cuentas si es necesario
    return null;
  };

  return (
    <TouchableOpacity onPress={handlePress} activeOpacity={0.5}>
      <View style={styles.item}>
        {/* Agregar el ícono de cuentas al inicio de la lista */}
        {renderIcon()}
        <Text style={styles.title}>{title}</Text>
        <Icon
          name="chevron-forward-outline"
          size={20}
          color="white"
          style={styles.icon}
        />
      </View>
    </TouchableOpacity>
  );
};

export const Cuentas = ({navigation}: any) => {
  return (
    <View style={styles.formContainer}>
      <Text style={styles.tituloText}>Mis Cuentas</Text>
      <FlatList
        data={DATA}
        renderItem={({item}) => (
          <Item title={item.title} type={item.type} navigation={navigation} item={item}/>
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    backgroundColor: '#262626',
    padding: 35,
    paddingRight:25,
    paddingLeft:25,
    width: '100%',
    height: '65%', // Ajusta según el porcentaje deseado
    marginTop: 'auto',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    elevation: 5,
  },
  tituloText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 1.5,
    borderBottomColor: 'white', // Línea divisoria blanca
  },
  title: {
    color: 'white',
    fontSize: 16,
    marginLeft: 10,
  },
  icon: {
    marginRight: 10,
  },
});
