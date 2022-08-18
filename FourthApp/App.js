import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {View, Text, StyleSheet, StatusBar, Image} from 'react-native';
import AllExpenses from './src/Screens/AllExpenses';
import ManageExpenses from './src/Screens/ManageExpenses';
import RecentExpenses from './src/Screens/RecentExpenses';
import {GlobalStyles} from './src/Assets/constants/styles';
import IconButton from './src/Components/UI/IconButton';
import ExpensesContextProvider from './src/store/expenses-context';

const Stack = createNativeStackNavigator();
const BottomTab = createBottomTabNavigator();

function ExpensesOverview() {
  return (
    <BottomTab.Navigator
      screenOptions={({navigation}) => ({
        headerStyle: {backgroundColor: GlobalStyles.colors.primary500},
        headerTintColor: '#fff',
        tabBarStyle: {backgroundColor: GlobalStyles.colors.primary500},
        tabBarActiveTintColor: GlobalStyles.colors.accent500,
        headerRight: () => (
          <IconButton
            icon={require('./src/Assets/Images/add.png')}
            onPress={() => {
              navigation.navigate('ManageExpenses');
            }}
            width={25}
            height={25}
          />
        ),
      })}>
      <BottomTab.Screen
        name="RecentExpenses"
        component={RecentExpenses}
        options={{
          title: 'Recent Expenses',
          tabBarLabel: 'Recent',
          tabBarIcon: ({color, size}) => (
            <Image
              source={require('./src/Assets/Images/hourglass_white.png')}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="AllExpenses"
        component={AllExpenses}
        options={{
          title: 'All Expenses',
          tabBarLabel: 'All',
          tabBarIcon: ({color, size}) => (
            <Image source={require('./src/Assets/Images/calendar_white.png')} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

function App() {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <ExpensesContextProvider>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: {backgroundColor: GlobalStyles.colors.primary500},
              headerTintColor: '#fff',
            }}>
            <Stack.Screen
              name="ExpensesOverview"
              component={ExpensesOverview}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="ManageExpenses"
              component={ManageExpenses}
              options={{
                title: 'Manage Expenses',
                presentation: 'modal',
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </ExpensesContextProvider>
    </>
  );
}
const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
