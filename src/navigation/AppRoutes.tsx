import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Products from '../screens/appScreens/products';
import {AppRoutesProps} from './types';
import ProductDetails from '../screens/appScreens/products/components/ProductDetails';

// const Tab = createBottomTabNavigator();
const Stack = createStackNavigator<AppRoutesProps>();
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
      <Stack.Screen
        name="ProductDetails"
        component={ProductDetails}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default AppRoutes;
