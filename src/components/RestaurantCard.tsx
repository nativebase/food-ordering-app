import * as React from "react";
import { StackScreenProps } from "@react-navigation/stack";
import {
  Badge,
  Box,
  Button,
  Column,
  Divider,
  Flex,
  HStack,
  Icon,
  Image,
  Link,
  Path,
  Row,
  Text,
  VStack,
} from "native-base";
import { useNavigation } from "@react-navigation/native";

export default function RestaurantCard() {
  let navigation = useNavigation();
  return (
    <>
      <Button
        variant="ghost"
        py={6}
        px={6}
        bg="white"
        onPress={() => navigation.navigate("RestaurantMenu")}
      >
        <Row width="100%">
          <Image
            alt="image"
            size={110}
            source={{
              uri:
                "https://res.cloudinary.com/swiggy/image/upload/f_auto,q_auto,fl_lossy/gma2afvaofvjhfaxtomu",
            }}
          />
          <VStack space={2} px={4} py={1} width="71%">
            <Text
              fontWeight={700}
              fontSize={20}
              fontFamily="ProximaNova"
              isTruncated={true}
            >
              McDonald's
            </Text>

            <Text
              pb={2}
              color="gray.500"
              fontWeight={600}
              fontSize={18}
              fontFamily="ProximaNova"
              isTruncated={true}
            >
              Fast Food
            </Text>

            <Divider borderWidth={0.35} borderColor="gray.400" />
            <Row pt={1}>
              <HStack space={2}>
                <Icon color="gray.500" viewBox="0 0 512 512" size={3}>
                  <Path d="M510.37,183.83a21.33,21.33,0,0,0-19.71-13.17H334.79L276,13.84a21.33,21.33,0,0,0-39.95,0L177.21,170.66H21.33A21.33,21.33,0,0,0,6.25,207.08L125.71,326.54,86,485.48A21.34,21.34,0,0,0,119.07,508L256,410.21,392.93,508A21.34,21.34,0,0,0,426,485.48L386.29,326.54,505.75,207.08A21.33,21.33,0,0,0,510.37,183.83Z" />
                </Icon>
                <Text
                  color="gray.500"
                  fontWeight={500}
                  fontSize={14}
                  fontFamily="ProximaNova"
                >
                  4.2
                </Text>
                <Dot />
                <Text
                  color="gray.500"
                  fontWeight={500}
                  fontSize={14}
                  fontFamily="ProximaNova"
                >
                  28 MINS
                </Text>
                <Dot />
                <Text
                  color="gray.500"
                  fontWeight={500}
                  fontSize={14}
                  fontFamily="ProximaNova"
                >
                  ₹350 FOR TWO
                </Text>
              </HStack>
            </Row>
          </VStack>
        </Row>
      </Button>
    </>
  );
}

function Dot() {
  return (
    <Text
      ml={2}
      color="gray.500"
      fontWeight={500}
      fontSize={20}
      fontFamily="ProximaNova"
      mt={-2}
    >
      .
    </Text>
  );
}
