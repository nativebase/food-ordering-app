import * as React from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../../types';
import ScreenHeader from '../components/ScreenHeader';
import RestaurantCard from '../components/RestaurantCard';
import { ScrollView } from 'react-native-gesture-handler';

export default function RestaurantScreens({
  navigation,
}: StackScreenProps<RootStackParamList, 'RestaurantMenu'>) {
  return (
    <>
      <ScreenHeader />
      <ScrollView>
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
      </ScrollView>
    </>
  );
}
