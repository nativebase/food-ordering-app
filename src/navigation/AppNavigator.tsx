import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { AppParamList } from '../../types';
import RestaurantScreens from '../screens/RestaurantScreens';
import RestaurantMenu from '../screens/RestaurantMenu';

const AppStack = createStackNavigator<AppParamList>();

function AppNavigator() {
  return (
    <AppStack.Navigator screenOptions={{ headerShown: false }}>
      <AppStack.Screen name='RestaurantScreens' component={RestaurantScreens} />
      <AppStack.Screen name='RestaurantMenu' component={RestaurantMenu} />
    </AppStack.Navigator>
  );
}
export default AppNavigator;
