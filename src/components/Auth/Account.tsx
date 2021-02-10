import * as React from 'react';
import {
  Box,
  Button,
  Divider,
  HStack,
  Icon,
  Image,
  Row,
  Text,
  VStack,
} from 'native-base';
import window from '../../utils/Layout';
import { SafeAreaView } from 'react-native-safe-area-context';
export default function Account() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Box bg='white' height={window.height}>
        <Box flex={1.1}>
          <Image
            alt={'img'}
            height={'100%'}
            source={require('../../../assets/images/Account.png')}
          />
        </Box>
        <Box px={4} pt={5} flex={1}>
          <VStack space={6}>
            <Box>
              <Text fontWeight={700} fontSize={20}>
                ACCOUNT
              </Text>
              <Text color='gray.500' pt={1}>
                Login/Create account quickly to manage orders
              </Text>
            </Box>
            <Button variant='solid' bg='primary' borderRadius={0} p={3}>
              <Text color='white' fontWeight={700}>
                LOGIN
              </Text>
            </Button>
            <Divider borderWidth={1} borderColor='black' />
            <Row justifyContent='space-between'>
              <HStack space={4}>
                <Icon
                  name='ticket-percent-outline'
                  type={'MaterialCommunityIcons'}
                  color='gray.500'
                ></Icon>
                <Text fontWeight={500} color='gray.800' fontSize={15} pt='2px'>
                  Offers
                </Text>
              </HStack>
              <Icon
                name='chevron-right'
                type={'Entypo'}
                color='gray.500'
                size={5}
              ></Icon>
            </Row>
            <Divider borderWidth={0.5} borderColor='gray.500' />
            <Row justifyContent='space-between'>
              <HStack space={4}>
                <Icon name='mail' type={'Feather'} color='gray.500'></Icon>

                <VStack mt={-1}>
                  <Text fontWeight={500} color='gray.800' fontSize={15}>
                    Send Feedback
                  </Text>
                  <Text color='gray.500' fontSize={12}>
                    App Version 3.28.1(840)
                  </Text>
                </VStack>
              </HStack>
              <Icon
                name='chevron-right'
                type={'Entypo'}
                color='gray.500'
                size={5}
              ></Icon>
            </Row>
          </VStack>
        </Box>
      </Box>
    </SafeAreaView>
  );
}
