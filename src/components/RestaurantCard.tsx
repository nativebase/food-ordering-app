import * as React from 'react';
import {
  Button,
  Divider,
  HStack,
  Icon,
  Image,
  Path,
  Row,
  Text,
  VStack,
} from 'native-base';
import { useNavigation } from '@react-navigation/native';
import window from '../utils/Layout';
export default function RestaurantCard() {
  let navigation = useNavigation();
  return (
    <>
      <Button
        variant='ghost'
        py={6}
        bg='white'
        onPress={() => navigation.navigate('RestaurantMenu')}
      >
        <Row width={window.width}>
          <Image
            alt='image'
            size={110}
            source={{
              uri:
                'https://res.cloudinary.com/swiggy/image/upload/f_auto,q_auto,fl_lossy/gma2afvaofvjhfaxtomu',
            }}
          />
          <VStack space={2} px={4} py={1} width='100%'>
            <Text
              fontWeight={700}
              fontSize={20}
              fontFamily='ProximaNova'
              isTruncated={true}
            >
              McDonald's
            </Text>

            <Text
              pb={2}
              color='gray.500'
              fontWeight={600}
              fontSize={18}
              fontFamily='ProximaNova'
              isTruncated={true}
            >
              Fast Food
            </Text>

            <Divider borderWidth={0.35} borderColor='gray.400' />
            <Row pt={1}>
              <HStack space={1}>
                <Text
                  color='gray.500'
                  fontWeight={500}
                  fontSize={14}
                  fontFamily='ProximaNova'
                >
                  4.2
                </Text>
                <Dot />
                <Text
                  color='gray.500'
                  fontWeight={500}
                  fontSize={14}
                  fontFamily='ProximaNova'
                >
                  28 MINS
                </Text>
                <Dot />
                <Text
                  color='gray.500'
                  fontWeight={500}
                  fontSize={14}
                  fontFamily='ProximaNova'
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
      color='gray.500'
      fontWeight={500}
      fontSize={20}
      fontFamily='ProximaNova'
      mt={-2}
    >
      .
    </Text>
  );
}
