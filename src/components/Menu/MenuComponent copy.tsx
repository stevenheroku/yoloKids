import React, { useState } from 'react';
import { Button, Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export const MenuComponent = ({ navigation }: any) => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleIconPress = (screen: any) => {
    navigation.navigate('HomeDrawer');
      setShowMenu(false);
      toggleMenu();
  };

  return (
    <View> 
      <Modal
        animationType="fade"
        transparent={true}
        visible={showMenu}
        onRequestClose={() => toggleMenu()}
      >
        
        <View style={{ ...styles.modalContainer, height: '20%' }}>
        <TouchableOpacity onPress={() => setShowMenu(false)} style={styles.toggleIconBajar}>
          <Icon name="arrow-down-outline" size={30} color={'white'}/>
        </TouchableOpacity>
        <View style={styles.linea}></View>
          <View style={styles.iconRow}>
            <TouchableOpacity
              style={styles.icon}
              onPress={() => handleIconPress('HomeScreen')}
            >
              <Icon name="home-outline" size={30} color={'#818787'}/>
              <Text style={styles.textIcono}>Inicio</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.icon}
              onPress={() => handleIconPress('About')}
            >
              <Icon name="add-circle-outline" size={30} color={'#818787'} />
              <Text style={styles.textIcono}>Solicitar Productos</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.icon}
              onPress={() => handleIconPress('OtraPantalla')}
            >
              <Icon name="log-out" size={30} color={'#FFFFFF'} />
              <Text style={styles.textIconoSalir}>Salir</Text>
            </TouchableOpacity>
          </View>

         
        </View>
      </Modal>

      {(!showMenu)&&( <Modal
        animationType="fade"
        transparent={true}
        visible={true}
        onRequestClose={() => setShowMenu(false)}
      ><View style={{ ...styles.modalContainer, height: '6%',opacity: !showMenu ? 1 : 0}}>
        {!showMenu && (
        <TouchableOpacity onPress={() => toggleMenu()} style={styles.toggleIconSubir}>
          <Icon name="arrow-up-outline" size={30} color={'white'}/>
        </TouchableOpacity>
      )}
        </View>
        </Modal>)}
    </View>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    width: '100%',
    marginTop: 'auto',
    borderTopLeftRadius: 45,
    borderTopRightRadius: 45,
    elevation: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#383838',
  },
  iconRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  icon: {
    alignItems: 'center',
    top: 20,
  },
  closeIcon: {
    width: '100%',
    borderTopLeftRadius: 45,
    borderTopRightRadius: 45,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ce2020',
  },
  toggleIconBajar: {
    top: -10,
    right: 10,
  },
  toggleIconSubir: {
    top: -4,
    right: 10,
  },
  linea: {
    borderBottomWidth: 0.8, // Puedes ajustar el grosor de la línea
    borderBottomColor: '#3F3F3F', // Puedes ajustar el color de la línea
    width: '80%',
  },
  textIcono:{
    color:'#838584'
  },
  textIconoSalir:{
    color:'white'
  }
});
