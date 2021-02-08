import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";
import { BottomTabParamList, TabTwoParamList } from "../../types";

import TabOneScreen from "../screens/TabOneScreen";
import TabTwoScreen from "../screens/TabTwoScreen";
import Cart from "../screens/Cart";
import useColorScheme from "../../hooks/useColorScheme";
import Colors from "../theme/Colors";
import RestaurantScreens from "../screens/RestaurantScreens";
import { createIcon, Icon, Path } from "native-base";
import AppNavigator from "./AppNavigator";
import Account from "../components/Auth/Account";

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  const CustomIcon = createIcon({
    viewBox: "0 0 124 124",
    d:
      "M23.1,41.5c0.2-1.2,0.2-2.5,0.4-3.7c1-4.3,2.7-8.4,5.5-11.9c2-2.5,4-5.1,6.4-7.1c2.9-2.3,6.2-4.2,9.4-6   c4.5-2.6,9.7-3,14.7-3.3c2.6-0.1,5.2,0.6,7.8,1.1c6.2,1.1,11.6,3.9,16.2,8.1c5.7,5.1,9.4,11.6,11.3,19c1,3.5,0.2,5.7-2.7,6.5   c-3.1,0.8-6.3,1.3-9.5,1.7c-2.6,0.3-5.2,0.3-7.8,0.4c-0.6,0-1.3-0.1-2-0.2c-0.9-0.1-1.9-0.3-2.8-0.3c-1.1-0.1-2.2,0-3.7,0   c-0.1-3-0.2-5.5-0.3-8.1c0-2,0.2-4-0.1-5.9c-0.1-0.9-1.2-2.2-1.9-2.3c-1.3-0.2-2.2,0.9-2.2,2.4c0,0.2,0,0.4,0,0.5   c0,4.8,0.1,9.6,0,14.4c-0.1,3.7,0.9,3.9,4.1,4.2c4.2,0.4,8.4,0,12.6,0.1c3.3,0.1,6.6,0.1,9.8,0.7c3,0.6,5.6,3,5.2,5.7   c-0.3,2.1-0.5,4.2-1.1,6.1c-1,3.1-2.1,6.2-3.5,9.1c-1.7,3.8-3.4,7.7-5.7,11.3c-4.8,7.5-9.8,14.8-15,22c-2.4,3.4-5.4,6.5-8.1,9.7   c-0.7,0.8-1.2,0.8-1.9-0.2c-3.1-4.4-6.3-8.7-9.6-13c-3.8-5-7.2-10.4-10-16c-1-2.1-0.8-2.5,1.4-3c1.6-0.4,3.3-0.7,5-0.7   c3.7-0.1,7.4-0.1,11.1,0c1.5,0,2,1,1.9,2.4c-0.1,2-0.1,4.1,0,6.1c0.1,1.3,0.6,2.5,2.1,2.8c1.6,0.3,2.2-0.8,2.6-2.1   c0.2-0.6,0.3-1.3,0.3-1.9c0-3.1,0-6.1,0-9.2c0-3.3-1-4.3-4.3-4.2c-3.6,0.1-7.1,0.4-10.7,0.5c-3.2,0.1-6.4,0.1-9.5,0   c-1.5-0.1-3.3-0.3-4.5-1.1c-1.7-1.2-3.3-2.9-4.2-4.8c-4.2-8.1-6.3-16.8-6.8-26",
  });
  return (
    <BottomTab.Navigator
      initialRouteName="SWIGGY"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}
    >
      <BottomTab.Screen
        name="SWIGGY"
        component={AppNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <CustomIcon name="ios-code" color={color} size={8} />
          ),
        }}
      />
      <BottomTab.Screen
        name="SEARCH"
        component={TabTwoNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon viewBox="0 0 20 20" color={color} size={6}>
              <Path
                d="M19.129,18.164l-4.518-4.52c1.152-1.373,1.852-3.143,1.852-5.077c0-4.361-3.535-7.896-7.896-7.896
								c-4.361,0-7.896,3.535-7.896,7.896s3.535,7.896,7.896,7.896c1.934,0,3.705-0.698,5.078-1.853l4.52,4.519
								c0.266,0.268,0.699,0.268,0.965,0C19.396,18.863,19.396,18.431,19.129,18.164z M8.567,15.028c-3.568,0-6.461-2.893-6.461-6.461
								s2.893-6.461,6.461-6.461c3.568,0,6.46,2.893,6.46,6.461S12.135,15.028,8.567,15.028z"
              />
            </Icon>
          ),
        }}
      />
      <BottomTab.Screen
        name="CART"
        component={Cart}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon viewBox="0 0 20 20" color={color} size={6}>
              <Path d="M8 1a2.5 2.5 0 0 0-2.5 2.5V4h5v-.5A2.5 2.5 0 0 0 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5v9a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V5H2z" />
            </Icon>
          ),
        }}
      />
      <BottomTab.Screen
        name="ACCOUNT"
        component={Account}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon viewBox="0 0 20 20" color={color} size={6}>
              <Path
                d="M14.023,12.154c1.514-1.192,2.488-3.038,2.488-5.114c0-3.597-2.914-6.512-6.512-6.512
              c-3.597,0-6.512,2.916-6.512,6.512c0,2.076,0.975,3.922,2.489,5.114c-2.714,1.385-4.625,4.117-4.836,7.318h1.186
              c0.229-2.998,2.177-5.512,4.86-6.566c0.853,0.41,1.804,0.646,2.813,0.646c1.01,0,1.961-0.236,2.812-0.646
              c2.684,1.055,4.633,3.568,4.859,6.566h1.188C18.648,16.271,16.736,13.539,14.023,12.154z M10,12.367
              c-2.943,0-5.328-2.385-5.328-5.327c0-2.943,2.385-5.328,5.328-5.328c2.943,0,5.328,2.385,5.328,5.328
              C15.328,9.982,12.943,12.367,10,12.367z"
              />
            </Icon>
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

const TabTwoStack = createStackNavigator<TabTwoParamList>();

function TabTwoNavigator() {
  return (
    <TabTwoStack.Navigator>
      <TabTwoStack.Screen
        name="TabTwoScreen"
        component={TabTwoScreen}
        options={{ headerTitle: "Tab Two Title" }}
      />
    </TabTwoStack.Navigator>
  );
}
