import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {createContext, useEffect, useState} from 'react';

export const AuthContext = createContext({
  token: '',
  // reftoken: '',
  isAuthenticated: false,
  authenticate: token => {},
  logout: () => {},
  refToken: reftoken => {},
});

function AuthContextProvider({children}) {
  const [authToken, setAuthToken] = useState();
  // const [reftoken, setReftoken] = useState();

  function authenticate(token) {
    setAuthToken(token);
    AsyncStorage.setItem('token', token);
  }

  function refToken(reftoken) {
    // setReftoken(reftoken);
    AsyncStorage.setItem('reftoken', reftoken);
  }

  function logout() {
    setAuthToken(null);
    AsyncStorage.removeItem('token');
  }

  // FIRST SOLUTION
  setTimeout(() => {
    logout();
  }, 3600000);

  const value = {
    token: authToken,
    // reftoken: reftoken,
    isAuthenticated: !!authToken,
    authenticate: authenticate,
    logout: logout,
    refToken: refToken,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthContextProvider;
