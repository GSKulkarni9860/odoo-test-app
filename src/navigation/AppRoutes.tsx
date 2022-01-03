import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Products from '../screens/appScreens/products';

// const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const AppRoutes = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Products"
        component={Products}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default AppRoutes;
