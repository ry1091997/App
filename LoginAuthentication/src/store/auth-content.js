import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {createContext, useEffect, useState} from 'react';

export const AuthContext = createContext({
  token: '',
  // startTime: '',
  // lastTime: '',
  isAuthenticated: false,
  authenticate: token => {},
  logout: () => {},
  refToken: reftoken => {},
});

function AuthContextProvider({children}) {
  const [authToken, setAuthToken] = useState();

  function authenticate(token) {
    setAuthToken(token);
    AsyncStorage.setItem('token', token);
  }

  function logout() {
    setAuthToken(null);
    AsyncStorage.removeItem('token');
  }

  // FIRST SOLUTION
  // setTimeout(() => {
  //   logout();
  // }, 3600000);

  const value = {
    token: authToken,
    isAuthenticated: !!authToken,
    authenticate: authenticate,
    logout: logout,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthContextProvider;
