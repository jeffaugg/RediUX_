import React, { createContext, useContext, useState, useEffect } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../config/firebase';

const GlobalStateContext = createContext();

export const GlobalStateProvider = ({ children }) => {
  const [globalState, setGlobalState] = useState({
    user: null,
    password: null,
    isAuth: false,
    lastActive: null,
  });

  const signIn = async (email, password) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      setGlobalState({
        user: userCredential.user,
        password: password,
        isAuth: true,
        lastActive: Date.now(), 
      });
      startLogoutTimer();
    } catch (error) {
      console.error('Erro ao fazer login:', error);
    }
  };

  const startLogoutTimer = () => {
    const timeout = setTimeout(() => {
      setGlobalState({ user: null, password: null, isAuth: false, lastActive: null });
    }, 1000 * 60 * 60); 
    return () => clearTimeout(timeout);
  };

  useEffect(() => {
    const handleActivity = () => {
      setGlobalState((prevState) => ({ ...prevState, lastActive: Date.now() })); 
    };

    window.addEventListener('click', handleActivity);
    window.addEventListener('mousemove', handleActivity);
    window.addEventListener('keypress', handleActivity);

    return () => {
      window.removeEventListener('click', handleActivity);
      window.removeEventListener('mousemove', handleActivity);
      window.removeEventListener('keypress', handleActivity);
    };
  }, []);

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
