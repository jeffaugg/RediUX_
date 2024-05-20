import React, { createContext, useContext, useState, useEffect } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../config/firebase'; 

export const GlobalStateContext = createContext();

export const GlobalStateProvider = ({ children }) => {
  const [globalState, setGlobalState] = useState({
    user: null,
    password: null,
    isAuth: false,
  });

  const handleLogin = async (email, password) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      setGlobalState({
        user: userCredential.user,
        password: null,
        isAuth: true,
      });
      localStorage.setItem('isAuth', true); 
    } catch (error) {
      console.error('Erro ao fazer login:', error);
    }
  };

  useEffect(() => {
    const storedAuthState = localStorage.getItem('isAuth');
    if (storedAuthState === 'true') {
      setGlobalState({ ...globalState, isAuth: true });
    }
  }, []);

  return (
    <GlobalStateContext.Provider value={{ globalState, setGlobalState, handleLogin }}>
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
