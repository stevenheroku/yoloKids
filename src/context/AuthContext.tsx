// AuthContext.js
import React, { createContext, useContext, useReducer, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import cafeApi from '../api/apiYoloKids';

// Definir los tipos de acciones
const AuthActionTypes = {
  SET_USER: 'SET_USER',
  SIGN_IN: 'SIGN_IN',
  SIGN_OUT: 'SIGN_OUT',
};

// Función reductora
const authReducer = (state:any, action:any) => {
  switch (action.type) {
    case AuthActionTypes.SET_USER:
      return { ...state, user: action.payload };
    case AuthActionTypes.SIGN_IN:
      return { ...state, isAuthenticated: true };
    case AuthActionTypes.SIGN_OUT:
      return { ...state, isAuthenticated: false, user: null };
    default:
      return state;
  }
};

// Crear el contexto
export const AuthContext = createContext({} as any);

// Proveedor del contexto
export const AuthProvider = ({ children,navigation }:any) => {
  const [state, dispatch] = useReducer(authReducer, {
    isAuthenticated: false,
    user: null,
  });

  // Verificar la autenticación al cargar la aplicación
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const token = await AsyncStorage.getItem('token');

        if (token) {
          // Realizar una solicitud al backend para verificar la validez del token
          const response = await cafeApi.post('/verificar-token', { token });

          if (response.data.valid) {
            // Si el token es válido, establecer el usuario y autenticar
            dispatch({ type: AuthActionTypes.SET_USER, payload: response.data.user });
            dispatch({ type: AuthActionTypes.SIGN_IN });
          } else {
            // Si el token no es válido, cerrar sesión
            dispatch({ type: AuthActionTypes.SIGN_OUT });
          }
        }
      } catch (error) {
        console.error('Error al verificar la autenticación:', error);
      }
    };

    checkAuth();
  }, []);

  // Funciones para realizar el inicio y cierre de sesión
  const signIn = async ({correo, password}: any) => {
    console.log('pruebasisi')
    try {
      const resp = await cafeApi.post<any>('/auth/login', {
        correo,
        password,
      });
      console.log(resp)
      dispatch({ type: AuthActionTypes.SIGN_IN,
        payload: {token: resp.data.token, user: resp.data.usuario}, });
     
      await AsyncStorage.setItem('token', resp.data.token);
      setTimeout(() => {
        navigation.navigate('HomeDrawer');
      }, 1000); 
      console.log(resp.data.token);
    } catch (error: any) {
      if (error.response && error.response.status === 400) {
        // El código de estado es 400 (Bad Request)
        console.log(error.response.data.msg);
        dispatch({
          type: 'addError',
          payload: error.response.data.msg || 'Informacion Incorrecta',
        });
        // Puedes manejar el error de alguna manera específica para el código de estado 400 aquí
      } else {
        // Otro tipo de error
        console.log('Error:', error);
      }
    }
  };

  const signOut = async () => {
    await AsyncStorage.removeItem('token');
    dispatch({ type: AuthActionTypes.SIGN_OUT });
  };

  return (
    <AuthContext.Provider
      value={{
        state,
        signIn,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// Función para utilizar el contexto en componentes
export const useAuth = () => {
  return useContext(AuthContext);
};
