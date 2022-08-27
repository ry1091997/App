import React, {useContext, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AccessibilityInfo, StatusBar} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import LoginScreen from './src/screens/LoginScreen';
import SignupScreen from './src/screens/SignupScreen';
import WelcomeScreen from './src/screens/WelcomeScreen';
import {Colors} from './src/constants/styles';
import AuthContextProvider, {AuthContext} from './src/store/auth-content';
import IconButton from './src/components/ui/IconButton';

// for authentication firebase sdk library is also used but in this project i use
// Firebase rest api to sending requestes to certain  api endpoints
// but Sdk library is best for firebase

// NOTE=> token Expires for every one hour, due to which we can not Access
// data. For accessing data we can follow to rules

// 1. by regenerating New Token for Every one hour
// 2. logout the user every one hour (delete new token generate time and
//   login time ) use setTimeout()

const Stack = createNativeStackNavigator();

function AuthStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {backgroundColor: Colors.primary500},
        headerTintColor: 'white',
        contentStyle: {backgroundColor: Colors.primary100},
      }}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
    </Stack.Navigator>
  );
}

function Root() {
  const authCtx = useContext(AuthContext);
  useEffect(() => {
    async function fetchedToken() {
      const storedToken = await AsyncStorage.getItem('token');
      if (storedToken) {
        authCtx.authenticate(storedToken);
      }
    }
    fetchedToken();
  }, []);
  return <Navigation />;
}

function AuthenticatedStack() {
  const authCtx = useContext(AuthContext);
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {backgroundColor: Colors.primary500},
        headerTintColor: 'white',
        contentStyle: {backgroundColor: Colors.primary100},
      }}>
      <Stack.Screen
        name="Welcome"
        component={WelcomeScreen}
        options={{
          headerRight: ({headerTintColor}) => (
            <IconButton onPress={authCtx.logout} />
          ),
        }}
      />
    </Stack.Navigator>
  );
}

function Navigation() {
  const authCtx = useContext(AuthContext);
  return (
    <NavigationContainer>
      {authCtx.token ? <AuthenticatedStack /> : <AuthStack />}
    </NavigationContainer>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <AuthContextProvider>
        <Root />
        {/* we use this for prolong the app screen (means it shows splash screen) untill we fetch the DATA 
        we do this because use AsyncStorage in auth-context it shows flickering effect*/}
      </AuthContextProvider>
    </>
  );
}
