import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { Button, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';

interface MenuUpProps {
  onOpenDrawer: () => void;
}

export const MenuUp = ({ navigation,transparente=false }:any) => {

  const openDrawer = () => {
    navigation.openDrawer();
  };
    const handleLogout = async() => {
      try {
        await AsyncStorage.removeItem('username' );
        await AsyncStorage.removeItem('password' );
      } catch (error) {
        console.error('Error al eliminar las credenciales:', error);
      }
      console.log('Cerrar sesión');
      navigation.navigate('LoginScreen');

    };
  
    return (
      <SafeAreaView >
      <View style={[styles.container, { backgroundColor: `rgba(38, 38, 38, ${transparente ? '0' : '1'})` }]}>
          <View style={styles.userInfo}>
            <Text style={styles.username}>{'Hola JEFFERSON'}</Text>
            <Text style={styles.hora}>{'Último ingreso: 10/01/2024 10:40:24'}</Text>
          </View>
          <View style={styles.iconsContainer}>
            <TouchableOpacity onPress={openDrawer}>
              <Icon name="menu-outline" size={30} color="#fff" />
            </TouchableOpacity>
            <TouchableOpacity onPress={handleLogout}>
              <Icon name="notifications-outline" size={30} color="#fff" />
            </TouchableOpacity>
            <TouchableOpacity onPress={handleLogout}>
              <Icon name="log-out-outline" size={30} color="#fff" />
            </TouchableOpacity>
          </View>
        </View>
        </SafeAreaView>
      );
  };
  
  const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 20,
      },
      userInfo: {
        flexDirection: 'column', // Cambiado a columna
        alignItems: 'flex-start',
      },
      iconsContainer: {
        flexDirection: 'row',
      },
      icon: {
        marginRight: 5,
      },
      username: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
      },
      hora: {
        fontSize: 10,
        color: 'white',
        fontWeight: 'bold',
      },
  });
  