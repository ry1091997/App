import React, {useContext, useState} from 'react';
import {Alert} from 'react-native';
import AuthContent from '../components/Auth/AuthContent';
import LoadingOverlay from '../components/ui/LoadingOverlay';
import {AuthContext} from '../store/auth-content';
import {getNewToken, login} from '../util/auth';

function LoginScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  const authCtx = useContext(AuthContext);

  async function loginHandler({email, password}) {
    setIsAuthenticating(true);
    try {
      const token = await login(email, password);
      authCtx.authenticate(token.idToken);

      // console.log('reftoken.refreshToken', reftoken.refreshToken);
    } catch (error) {
      Alert.alert(
        'Authentication Failed',
        'Could not log you in.Please check your credentials or  try again later',
        [{text: 'Cancel', style: 'cancel'}],
      );
      setIsAuthenticating(false);
    }
    // setIsAuthenticating(false); // here if we define it shows error
    // because state updated but page is not render when login happen so
    // we use it in catch block
  }

  if (isAuthenticating) {
    return <LoadingOverlay message="Logging you...." />;
  }

  return <AuthContent isLogin onAuthenticate={loginHandler} />;
}

export default LoginScreen;
