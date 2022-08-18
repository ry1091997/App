import 'react-native-gesture-handler';
import React from 'react';
import {Image} from "react-native";
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import WelcomeScreen from './src/screens/WelcomeScreen';
import UserScreen from './src/screens/UserScreen';

const Drawer = createDrawerNavigator();
function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        // defaultStatus="open"
        screenOptions={{
          headerStyle: {backgroundColor: '#3c0a6b'},
          headerTintColor: '#fff',
          drawerActiveBackgroundColor: '#f0e1ff',
          drawerActiveTintColor: '#3c0a6b',
          // drawerStyle: {backgroundColor: '#ccc'},
        }}>
        {/* initialRouteName='User' */}
        <Drawer.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{
            drawerLabel: 'Welcom Screen',
            drawerIcon : ({color,size})=>(<Image source ={require('./src/assets/home.png')} styles ={{color:color}}/>)
          }}
        />
        <Drawer.Screen name="User" component={UserScreen} options ={{
          drawerIcon : ({color,size})=>(<Image source ={require('./src/assets/person.png')} styles ={{color:color}} />)
        }} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;
