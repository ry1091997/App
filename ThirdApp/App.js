import 'react-native-gesture-handler';
import React from 'react';
import {View, StyleSheet, StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import SplashScreen from 'react-native-splash-screen';

import CategoriesScreen from './src/Screens/CategoriesScreen';
import MealsOverView from './src/Screens/MealsOverView';
import MealDetailScreen from './src/Screens/MealDetailScreen';
import FavoritesScreen from './src/Screens/FavoritesScreen';
import IconButton from './src/Components/IconButton';
import FavoritesContextProvider from './src/store/context/favorites-context';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
function App() {
  
  React.useEffect(() => {
    SplashScreen.hide();
  },[]);

  function DrawerNavigator() {
    return (
      <Drawer.Navigator
        screenOptions={{
          headerStyle: {backgroundColor: '#351401'},
          headerTintColor: 'white',
          sceneContainerStyle: {backgroundColor: '#3f2f25'},
          drawerContentStyle: {backgroundColor: '#351401'},
          drawerInactiveTintColor: '#fff',
          drawerActiveTintColor: '#351401',
          drawerActiveBackgroundColor: '#e4baa1',
        }}>
        <Drawer.Screen
          name="Categories"
          component={CategoriesScreen}
          options={{
            title: 'All Categories',
            drawerIcon: ({color, size}) => <IconButton check={true} />,
          }}
        />
        <Drawer.Screen
          name="Favorite"
          component={FavoritesScreen}
          options={{
            drawerIcon: ({color, size}) => <IconButton />,
          }}
          initialParams={{item: 'rahul'}}
        />
      </Drawer.Navigator>
    );
  }

  return (
    <View style={styles.container}>
      <FavoritesContextProvider>
        <NavigationContainer>
          <StatusBar barStyle={'light-content'} />
          <Stack.Navigator
            screenOptions={{
              headerStyle: {backgroundColor: '#351401'},
              headerTintColor: 'white',
              contentStyle: {backgroundColor: '#3f2f25'},
            }}>
            {/* initialRouteName="componentName"
         it is used for which screen comes firt irespective of its order
         and order is also matter when we not use "initialRouteName"
         inside of <Stack.Navigator > then it rendered according to its 
         order*/}
            <Stack.Screen
              name="Drawer"
              component={DrawerNavigator}
              options={{
                title: 'All Categories',
                headerShown: false, //for removing title here {All Categories}
              }}
            />
            <Stack.Screen name="MealsOverView" component={MealsOverView} />
            <Stack.Screen
              name="MealDetailScreen"
              component={MealDetailScreen}
              options={{title: 'About the Meal'}}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </FavoritesContextProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#24180f',
  },
});

export default App;
