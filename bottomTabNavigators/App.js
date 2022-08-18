import React from 'react';
import {Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import WelcomeScreen from './src/screens/WelcomeScreen';
import UserScreen from './src/screens/UserScreen';

const BottomTabs = createBottomTabNavigator();
function App() {
  return (
    <NavigationContainer>
      <BottomTabs.Navigator
        screenOptions={{
          headerStyle: {backgroundColor: '#3c0a6b'},
          headerTintColor: '#fff',
          tabBarTabsActiveBackgroundColor: '#f0e1ff',
          tabBarActiveTintColor: '#3c0a6b',
          // tabBarBadge: 3,
        }}>
        <BottomTabs.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{
            tabBarLabel: 'Welcom Screen',
            tabBarIcon: ({color, size}) => (
              <Image
                source={require('./src/assets/home.png')}
                styles={{color: color}}
              />
            ),
            tabBarBadge: 3,
          }}
        />
        <BottomTabs.Screen
          name="User"
          component={UserScreen}
          options={{
            tabBarIcon: ({color, size}) => (
              <Image
                source={require('./src/assets/person.png')}
                styles={{color: color}}
              />
            ),
          }}
        />
      </BottomTabs.Navigator>
    </NavigationContainer>
  );
}

export default App;
