import * as React from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../../types';
import ScreenHeader from '../components/ScreenHeader';
import RestaurantCard from '../components/RestaurantCard';
import { ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function RestaurantScreens({
  navigation,
}: StackScreenProps<RootStackParamList, 'RestaurantMenu'>) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScreenHeader />
      <ScrollView>
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
      </ScrollView>
    </SafeAreaView>
  );
}
