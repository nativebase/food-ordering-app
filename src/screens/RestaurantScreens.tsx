import * as React from "react";
import { StyleSheet } from "react-native";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../../types";
import ScreenHeader from "../components/ScreenHeader";
import RestaurantCard from "../components/RestaurantCard";
import { ScrollView } from "react-native-gesture-handler";
import { Button } from "native-base";

export default function RestaurantScreens({
  navigation,
}: StackScreenProps<RootStackParamList, "RestaurantMenu">) {
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
