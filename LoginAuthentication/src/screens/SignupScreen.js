import React, {useContext, useState} from 'react';
import {Alert} from 'react-native';
import AuthContent from '../components/Auth/AuthContent';
import LoadingOverlay from '../components/ui/LoadingOverlay';
import {AuthContext} from '../store/auth-content';
import {createUser, getNewToken} from '../util/auth';

function SignupScreen() {
  const authCtx = useContext(AuthContext);
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  async function signUpHandler({email, password}) {
    setIsAuthenticating(true);
    try {
      const token = await createUser(email, password);
      // console.log('token', token.idToken);
      authCtx.authenticate(token.idToken);
      authCtx.refToken(token.refreshToken);

      setTimeout(() => {
        getNewToken();
      }, 3600000);
    } catch (error) {
      Alert.alert(
        'Authentication Failed',
        'Could not create user please check your input! or try again later',
      );
    }
    setIsAuthenticating(false);
  }

  if (isAuthenticating) {
    return <LoadingOverlay message="creating User" />;
  }

  return <AuthContent onAuthenticate={signUpHandler} />;
}

export default SignupScreen;
