import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Alert,
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';
import {StackScreenProps} from '@react-navigation/stack';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import KeyboardSpacer from 'react-native-keyboard-spacer';
import AsyncStorage from '@react-native-async-storage/async-storage';

//uso de huella digital
import RNBiometrics from 'react-native-simple-biometrics';
import Biometrics, {BiometryTypes} from 'react-native-biometrics';

import * as Keychain from 'react-native-keychain';
import ReactNativeBiometrics from 'react-native-biometrics';

//allertas
import AwesomeAlert from 'react-native-awesome-alerts';
import { AlertaMensaje } from '../hooks/AlertaMensaje';

interface Props extends StackScreenProps<any, any> {}

const LoginScreen = ({navigation}: Props) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [keyboardHeight, setKeyboardHeight] = useState(0);
  const [bottomPadding, setBottomPadding] = useState(0);

  //mostrar o no la alerta
  const { mostrarAlerta, AlertaComponente } = AlertaMensaje();

  const handleLogin = async () => {
    if (!username || !password) {
      //Alert.alert('Error', 'Por favor, completa todos los campos.');
      mostrarAlerta('ERROR!', 'Complete el Usuario y Contraseña','#DD6B55');
    } else if (username === 'admin' && password === 'admin') {
      // Guardar credenciales en AsyncStorage
      try {
        await AsyncStorage.setItem('username', username);
        await AsyncStorage.setItem('password', password);
      } catch (error) {
        console.log('Error al guardar las credenciales:', error);
      }
      mostrarAlerta('Inicio de Sesión', 'Éxitoso!', '#0ebb08');
        // La función de callback se ejecutará cuando el usuario presione "OK"
        setTimeout(() => {
          navigation.navigate('HomeDrawer');
        }, 1000); 
    } else {
      // Alert.alert('Credenciales incorrectas');
      mostrarAlerta('Error Inicio de Sesión', 'Vuelva a ingresar sus credenciales!','#DD6B55')
      console.log('Credenciales incorrectas');
    }
  };
  const generateKeyPair = async () => {
    // Generar un par de claves (pública y privada) para la firma
    const keyPair = await Keychain.getGenericPassword();
    return keyPair;
  };

  const handleBiometricLogin = async () => {
    try {
      // Comprobar si la autenticación biométrica está disponible
      const canAuthenticate = await RNBiometrics.canAuthenticate();

      if (canAuthenticate) {
        try {
          // Obtener el template o representación de la huella digital
          const biometricData = await RNBiometrics.requestBioAuth(
            'BANTRAB Biometric',
            'Escanee su huella digital.',
          );
          console.log('Biometric Data:', biometricData);
          // Generar un par de claves (pública y privada)
          //const keyPair = await generateKeyPair();
          //console.log(keyPair);
          // Firmar la representación de la huella digital
          // const signature = await Keychain.({
          //   key: keyPair.valueOf,
          //   message: biometricData.valueOf, // Esto dependerá de cómo obtienes la representación de la huella
          // });

          // // Almacenar la firma y la clave pública en el Keychain
          // await Keychain.setGenericPassword('publicKey', keyPair.sign);
          // await Keychain.setGenericPassword('biometricSignature', signature);

          console.log('Huella almacenada con éxito');
          mostrarAlerta('Inicio de Sesión', 'Éxitoso!', '#0ebb08');
          //Alert.alert('Huella almacenada con éxito');
          setTimeout(() => {
            navigation.navigate('HomeDrawer');
          }, 1000); 
        } catch (error) {
          console.log('Error al procesar la autenticación biométrica:', error);
        }
      }
    } catch (error) {
      console.error('Error al verificar la autenticación biométrica:', error);
    }
  };

  const checkBiometrics = async () => {
    const biometrics = new ReactNativeBiometrics();
    const {available, biometryType} = await biometrics.isSensorAvailable();
    if (available && biometryType === BiometryTypes.TouchID) {
      console.log('si');
    } else {
      Alert.alert('No se puede realizar autenticación');
    }
  };

  return (
    <LinearGradient
      colors={['#FECB0E', '#F18A43', '#EF5150']}
      start={{x: 0.5, y: 0}}
      end={{x: 1, y: 0.5}}
      style={styles.container}>
      <KeyboardAvoidingView
        style={styles.background}
        keyboardVerticalOffset={-bottomPadding} // Ajusta el desplazamiento
      >
        <ScrollView
          contentContainerStyle={styles.scrollContainer}
          keyboardShouldPersistTaps="handled">
          <Text style={styles.title}>Iniciar Sesión</Text>
          <View style={styles.formContainer}>
            <View style={styles.iconContainer}>
              <Icon name="person" size={40} color="black" style={styles.icon} />
            </View>

            <TextInput
              style={styles.input}
              placeholder="Nombre de Usuario"
              placeholderTextColor="#808080"
              value={username}
              onChangeText={text => setUsername(text)}
            />
            <TextInput
              style={styles.input}
              placeholder="Contraseña"
              placeholderTextColor="#808080"
              secureTextEntry
              value={password}
              onChangeText={text => setPassword(text)}
            />
            <View style={styles.button}>
              <TouchableOpacity activeOpacity={0.5} onPress={handleLogin}>
                <Text style={styles.textButton}>Iniciar Sesión</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.buttonHuella}>
              <TouchableOpacity
                activeOpacity={0.5}
                onPress={handleBiometricLogin}>
                <Icon
                  name="finger-print-outline"
                  size={40}
                  color="#a39f9f"
                  style={styles.huella}
                />
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              activeOpacity={0.5}
              onPress={handleBiometricLogin}></TouchableOpacity>
          </View>
        </ScrollView>
        <KeyboardSpacer
          onToggle={visible => {
            setKeyboardHeight(visible ? keyboardHeight : 0);
          }}
          style={[styles.keyboardSpacer, {height: keyboardHeight}]}
        />
      </KeyboardAvoidingView>
      <AlertaComponente />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 2,
  },
  scrollContainer: {
    flexGrow: 1,
  },
  formContainer: {
    backgroundColor: 'white',
    padding: 45,
    width: '100%',
    height: '60%', // Ajusta según el porcentaje deseado
    marginTop: 'auto',
    borderTopLeftRadius: 50,
    elevation: 5,
  },
  title: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
    top: '30%', //ajusta el porcetnaje arriba el formcontainer
  },
  input: {
    width: '100%',
    color: 'black',
    height: 40,
    borderBottomColor: '#5F9AA0', // Color del borde inferior
    borderBottomWidth: 1, // Ancho del borde inferior
    marginBottom: 16,
    padding: 8,
    top: 45,
  },
  image: {
    width: 50, // Ajusta el tamaño según tus necesidades
    height: 50, // Ajusta el tamaño según tus necesidades
    marginTop: 16,
  },
  button: {
    top: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00DFDE',
    width: '100%',
    height: 40,
    borderRadius: 50,
  },
  buttonHuella: {
    top: 80,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 40,
    borderRadius: 50,
  },

  textButton: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  iconContainer: {
    alignItems: 'center',
    marginBottom: 10,
  },
  icon: {
    backgroundColor: '#ffffff',
    borderRadius: 20,
  },
  keyboardSpacer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'transparent',
  },
  huella: {},
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
    top:'80%'
  },
  confirmButtonText: {
    fontSize: 18,
  },
});

export default LoginScreen;
