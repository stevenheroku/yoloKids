import React, { useState } from 'react'
import { StyleSheet } from 'react-native';
import AwesomeAlert from 'react-native-awesome-alerts';

export const AlertaMensaje = () => {

  const [showAlert, setShowAlert] = useState(false);
  const [title, setTitle] = useState('');
  const [texto, setTexto] = useState('');
  const [color, setColor] = useState('');

  const mostrarAlerta = (titulo:string, mensaje:string,color:string) => {
  
    setTitle(titulo);
    setTexto(mensaje);
    setShowAlert(true);
    setColor(color)
  };
  const ocultarAlerta = () => {
    setShowAlert(false);
  };


  const AlertaComponente = () => (
    <AwesomeAlert
      show={showAlert}
      title={title}
      message={texto}
      closeOnTouchOutside={true}
      closeOnHardwareBackPress={false}
      showCancelButton={false}
      showConfirmButton={true}
      confirmText="OK"
      confirmButtonColor={color}
      onConfirmPressed={() => {
        ocultarAlerta();
      }}
      contentContainerStyle={styles.alertContainer}
      titleStyle={styles.alertTitle}
      messageStyle={styles.alertMessage}
      confirmButtonTextStyle={styles.confirmButtonText}
      confirmButtonStyle={styles.confirmButtonStyle} // Añade este estilo

    />
  );

  return { mostrarAlerta, ocultarAlerta, AlertaComponente };
};
const styles = StyleSheet.create({
    alertContainer: {
      
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      borderBottomLeftRadius:30,
      borderBottomRightRadius:30,
      overflow: 'hidden',
      backgroundColor: '#ffffff',
      padding: 40,
      width: '100%',
      height: '65%', 
      elevation: 5,
    },
    alertTitle: {
      fontSize: 20,
      fontWeight: 'bold',
      textAlign: 'center',
      top:80
    },
    alertMessage: {
      fontSize: 16,
      textAlign: 'center',
      top:80
    },
    confirmButtonText: {
      fontSize: 18,
    },
    confirmButtonStyle: {
      top:80, // Ajusta este valor según sea necesario
    },
  });