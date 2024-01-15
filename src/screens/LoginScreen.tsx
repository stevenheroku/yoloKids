import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, Image, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { StackScreenProps } from '@react-navigation/stack';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import KeyboardSpacer from 'react-native-keyboard-spacer';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface Props extends StackScreenProps<any, any> {}

const LoginScreen = ({ navigation }: Props) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [keyboardHeight, setKeyboardHeight] = useState(0);
 const [bottomPadding, setBottomPadding] = useState(0);

  const handleLogin = async() => {
    if (!username || !password) {
      Alert.alert('Error', 'Por favor, completa todos los campos.');
    } else if (username === 'Jeff' && password === '12345') {
      // Guardar credenciales en AsyncStorage
      try {
        await AsyncStorage.setItem('username', username);
        await AsyncStorage.setItem('password', password);
      } catch (error) {
        console.error('Error al guardar las credenciales:', error);
      }
      navigation.navigate('HomeDrawer');
    } else {
        Alert.alert('Credenciales incorrectas');

      console.log('Credenciales incorrectas');
    }
  };

  return (
    <LinearGradient
      colors={['#FECB0E', '#F18A43', '#EF5150']}
      start={{ x: 0.5, y: 0 }}
      end={{ x: 1, y: 0.5 }}
      style={styles.container}
    >
      <KeyboardAvoidingView
        style={styles.background}
        keyboardVerticalOffset={-bottomPadding} // Ajusta el desplazamiento
      >
        <ScrollView
          contentContainerStyle={styles.scrollContainer}
          keyboardShouldPersistTaps="handled"
        >
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
              onChangeText={(text) => setUsername(text)}
            />
            <TextInput
              style={styles.input}
              placeholder="Contraseña"
              placeholderTextColor="#808080"
              secureTextEntry
              value={password}
              onChangeText={(text) => setPassword(text)}
            />
            <View style={styles.button}>
              <TouchableOpacity activeOpacity={0.5} onPress={handleLogin}>
                <Text style={styles.textButton}>Iniciar Sesión</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
        <KeyboardSpacer
          onToggle={(visible) => {
            setKeyboardHeight(visible ? keyboardHeight : 0);
          }}
          style={[styles.keyboardSpacer, { height: keyboardHeight }]}
        />
      </KeyboardAvoidingView>
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
    color:'white',
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
    textAlign:'center',
    top: '30%',//ajusta el porcetnaje arriba el formcontainer
  },
  input: {
    width: '100%',
    color:'black',
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
  button:{
    top:50,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#00DFDE',
    width:'100%',
    height:40,
    borderRadius:50

  },
  textButton:{
    color:'white',
    fontSize:16,
    fontWeight:"bold"
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

});

export default LoginScreen;
