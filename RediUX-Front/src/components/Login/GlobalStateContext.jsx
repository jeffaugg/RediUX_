import React, { createContext, useContext, useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../config/firebase';

const GlobalStateContext = createContext();

export const GlobalStateProvider = ({ children }) => {
  const [globalState, setGlobalState] = useState({
    user: null,
    password: null,
    isAuth: false,
  });

  const signIn = async (email, password) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      setGlobalState({
        user: userCredential.user,
        password: password,
        isAuth: true,
      });
    }
    catch (error) {
      console.error("Erro ao fazer login: ", error);
    }
  };  

  return (
    <GlobalStateContext.Provider value={{ globalState, setGlobalState, signIn }}>
      {children}
    </GlobalStateContext.Provider>
  );
};

export const useGlobalState = () => {
  const context = useContext(GlobalStateContext);
  if (!context) {
    throw new Error('useGlobalState must be used within a GlobalStateProvider');
  }
  return context;
};