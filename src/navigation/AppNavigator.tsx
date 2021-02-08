import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";
import TabOneScreen from "../screens/TabOneScreen";
import { AppParamList } from "../../types";
import RestaurantScreens from "../screens/RestaurantScreens";
import RestaurantMenu from "../screens/RestaurantMenu";
import {
  Box,
  Divider,
  Flex,
  HStack,
  Icon,
  IconButton,
  Path,
  Row,
  Text,
  VStack,
} from "native-base";

const AppStack = createStackNavigator<AppParamList>();

function AppNavigator() {
  return (
    <AppStack.Navigator headerMode="screen">
      <AppStack.Screen name="RestaurantScreens" component={RestaurantScreens} />
      <AppStack.Screen
        name="RestaurantMenu"
        component={RestaurantMenu}
        options={{
          header: ReturnHeader,
        }}
      />
    </AppStack.Navigator>
  );
}
export default AppNavigator;

function ReturnHeader({ navigation }: any) {
  return (
    <>
      <Box bg="white" py={3} px={4}>
        <Row justifyContent="space-between" px={2}>
          <Box>
            <HStack space={4}>
              <IconButton
                onPress={() => navigation.goBack()}
                variant="ghost"
                icon={
                  <Icon size={6} viewBox="0 0 31.494 31.494" color="gray.700">
                    <Path d="M10.273,5.009c0.444-0.444,1.143-0.444,1.587,0c0.429,0.429,0.429,1.143,0,1.571l-8.047,8.047h26.554  c0.619,0,1.127,0.492,1.127,1.111c0,0.619-0.508,1.127-1.127,1.127H3.813l8.047,8.032c0.429,0.444,0.429,1.159,0,1.587  c-0.444,0.444-1.143,0.444-1.587,0l-9.952-9.952c-0.429-0.429-0.429-1.143,0-1.571L10.273,5.009z" />
                  </Icon>
                }
              />
              <VStack space={1} mt={-1}>
                <Text fontWeight={700} fontSize={16} fontFamily="ProximaNova">
                  MacDonald's
                </Text>
                <Text>34 mins</Text>
              </VStack>
            </HStack>
          </Box>
          <HStack space={3}>
            <IconButton
              onPress={() => navigation.goBack()}
              px={0}
              variant="ghost"
              icon={
                <Icon size={6} viewBox="0 -28 512.001 512" color="gray.700">
                  <Path d="m256 455.515625c-7.289062 0-14.316406-2.640625-19.792969-7.4375-20.683593-18.085937-40.625-35.082031-58.21875-50.074219l-.089843-.078125c-51.582032-43.957031-96.125-81.917969-127.117188-119.3125-34.644531-41.804687-50.78125-81.441406-50.78125-124.742187 0-42.070313 14.425781-80.882813 40.617188-109.292969 26.503906-28.746094 62.871093-44.578125 102.414062-44.578125 29.554688 0 56.621094 9.34375 80.445312 27.769531 12.023438 9.300781 22.921876 20.683594 32.523438 33.960938 9.605469-13.277344 20.5-24.660157 32.527344-33.960938 23.824218-18.425781 50.890625-27.769531 80.445312-27.769531 39.539063 0 75.910156 15.832031 102.414063 44.578125 26.191406 28.410156 40.613281 67.222656 40.613281 109.292969 0 43.300781-16.132812 82.9375-50.777344 124.738281-30.992187 37.398437-75.53125 75.355469-127.105468 119.308594-17.625 15.015625-37.597657 32.039062-58.328126 50.167969-5.472656 4.789062-12.503906 7.429687-19.789062 7.429687zm-112.96875-425.523437c-31.066406 0-59.605469 12.398437-80.367188 34.914062-21.070312 22.855469-32.675781 54.449219-32.675781 88.964844 0 36.417968 13.535157 68.988281 43.882813 105.605468 29.332031 35.394532 72.960937 72.574219 123.476562 115.625l.09375.078126c17.660156 15.050781 37.679688 32.113281 58.515625 50.332031 20.960938-18.253907 41.011719-35.34375 58.707031-50.417969 50.511719-43.050781 94.136719-80.222656 123.46875-115.617188 30.34375-36.617187 43.878907-69.1875 43.878907-105.605468 0-34.515625-11.605469-66.109375-32.675781-88.964844-20.757813-22.515625-49.300782-34.914062-80.363282-34.914062-22.757812 0-43.652344 7.234374-62.101562 21.5-16.441406 12.71875-27.894532 28.796874-34.609375 40.046874-3.453125 5.785157-9.53125 9.238282-16.261719 9.238282s-12.808594-3.453125-16.261719-9.238282c-6.710937-11.25-18.164062-27.328124-34.609375-40.046874-18.449218-14.265626-39.34375-21.5-62.097656-21.5zm0 0" />
                </Icon>
              }
            />
            <IconButton
              onPress={() => navigation.goBack()}
              px={0}
              variant="ghost"
              icon={
                <Icon viewBox="0 0 20 20" color="gray.700" size={6}>
                  <Path
                    d="M19.129,18.164l-4.518-4.52c1.152-1.373,1.852-3.143,1.852-5.077c0-4.361-3.535-7.896-7.896-7.896
                          c-4.361,0-7.896,3.535-7.896,7.896s3.535,7.896,7.896,7.896c1.934,0,3.705-0.698,5.078-1.853l4.52,4.519
                          c0.266,0.268,0.699,0.268,0.965,0C19.396,18.863,19.396,18.431,19.129,18.164z M8.567,15.028c-3.568,0-6.461-2.893-6.461-6.461
                          s2.893-6.461,6.461-6.461c3.568,0,6.46,2.893,6.46,6.461S12.135,15.028,8.567,15.028z"
                  />
                </Icon>
              }
            />
          </HStack>
        </Row>
      </Box>
      <Divider borderWidth={0.35} borderColor="gray.400" />
      <Box w="100%" py={2} bg="white">
        <Row justifyContent="space-between" mx={5}>
          <Text fontFamily="ProximaNova" fontWeight={400}>
            {" "}
            Recommended
          </Text>
        </Row>
      </Box>
      <Divider borderWidth={0.35} borderColor="gray.400" />
    </>
  );
}
function ReturnHeaderItem({ navigation }: any) {
  return (
    <>
      <Box bg="white" py={3} px={4}>
        <Row px={2}>
          <IconButton
            onPress={() => navigation.goBack()}
            variant="ghost"
            icon={
              <Icon size={6} viewBox="0 0 20 20" color="gray.500">
                <Path d="M15.898,4.045c-0.271-0.272-0.713-0.272-0.986,0l-4.71,4.711L5.493,4.045c-0.272-0.272-0.714-0.272-0.986,0s-0.272,0.714,0,0.986l4.709,4.711l-4.71,4.711c-0.272,0.271-0.272,0.713,0,0.986c0.136,0.136,0.314,0.203,0.492,0.203c0.179,0,0.357-0.067,0.493-0.203l4.711-4.711l4.71,4.711c0.137,0.136,0.314,0.203,0.494,0.203c0.178,0,0.355-0.067,0.492-0.203c0.273-0.273,0.273-0.715,0-0.986l-4.711-4.711l4.711-4.711C16.172,4.759,16.172,4.317,15.898,4.045z" />
              </Icon>
            }
          />
          <Row justifyContent="center" width="80%">
            <Text mt={1} color="gray.500">
              Recommended
            </Text>
          </Row>
        </Row>
      </Box>
    </>
  );
}
