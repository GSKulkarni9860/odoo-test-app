import React, {useEffect, useState} from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../screens/authScreens/login';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AppRoutes from './AppRoutes';

const Stack = createStackNavigator();

const Navigation = () => {
  const [token, setToken] = useState('');

  useEffect(() => {
    AsyncStorage.getItem('token').then(res => {
      if (res) {
        setToken(res);
      }
    });
  }, []);

  return token ? (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="App"
          component={AppRoutes}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  ) : (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Auth"
          component={Login}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
