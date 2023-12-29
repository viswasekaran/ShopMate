import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
import HomeTabNavigation from './HomeTabNavigation';
import {SCREEN_NAME} from '../constants/screenName';
import ProductDetails from '../screens/ProductScreen';
import CartScreen from '../screens/CartScreen';

export const MainNavigation = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name={SCREEN_NAME.HOME_DASHBOARD}
        component={HomeTabNavigation}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={SCREEN_NAME.PRODUCT_DETAILS}
        component={ProductDetails}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={SCREEN_NAME.CART_SCREEN}
        component={CartScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
