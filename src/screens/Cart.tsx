import * as React from 'react';

import { ScrollView } from 'react-native-gesture-handler';
import {
  Box,
  Button,
  Checkbox,
  Divider,
  Flex,
  HStack,
  Icon,
  Image,
  Link,
  Row,
  Text,
  View,
  VStack,
} from 'native-base';
import { ItemsContext } from '../utils/ItemsContext';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Path } from 'react-native-svg';

export default function Cart() {
  const items: any = React.useContext(ItemsContext);
  let total = 0;
  return (
    <SafeAreaView
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <ScrollView>
        <Box bg='white' px={4} py={6} width={'100%'}>
          <Row alignItems={'center'}>
            <Image
              alt='image'
              size={60}
              source={{
                uri:
                  'https://www.foodbusinessnews.net/ext/resources/2019/10/McDonaldsPLTMeal_Lead.jpg?1571842463',
              }}
            />
            <VStack pl={5} space={1} justifyContent='center'>
              <Text fontWeight={600} fontSize={18}>
                Foodie's
              </Text>
              <Text color='headingText.600'>West Chd</Text>
            </VStack>
          </Row>
          <VStack space={5} mt={items.items.length > 0 ? 5 : 0}>
            {items.items.map((item: any, key: number) => {
              total += item.cost * item.count;
              if (item.count != 0) {
                return (
                  <Box
                    justifyContent={'space-between'}
                    key={key}
                    flexDirection={'row'}
                  >
                    <Row>
                      <Image
                        mr={2}
                        alt='image'
                        size='4'
                        source={{
                          uri:
                            'https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Indian-vegetarian-mark.svg/1200px-Indian-vegetarian-mark.svg.png',
                        }}
                      />
                      <Box width={180}>
                        <Text fontWeight={400} fontSize={16}>
                          {item.name}
                        </Text>
                      </Box>
                    </Row>
                    <Box>
                      <HStack
                        borderWidth={1}
                        borderColor='gray.300'
                        alignItems='center'
                        mx={1}
                      >
                        <Button
                          size='xs'
                          variant='ghost'
                          px={0}
                          onPress={() => {
                            let arr: any = [];
                            items.items.forEach((temp: any) => {
                              if (temp.name == item?.name) {
                                if (temp.count != 0) {
                                  temp.count = temp.count - 1;
                                }
                              }
                              arr.push(temp);
                              items.setItems(arr);
                            });
                          }}
                        >
                          <Text fontSize={16} fontWeight='600'>
                            -
                          </Text>
                        </Button>
                        <Text
                          fontSize={16}
                          fontWeight='600'
                          color='green.600'
                          px={2}
                        >
                          {item.count}
                        </Text>
                        <Button
                          size='xs'
                          variant='ghost'
                          px={0}
                          onPress={() => {
                            let arr: any = [];
                            items.items.forEach((temp: any) => {
                              if (temp.name == item?.name) {
                                temp.count = temp.count + 1;
                              }
                              arr.push(temp);
                              items.setItems(arr);
                            });
                          }}
                        >
                          <Text
                            fontSize={16}
                            fontWeight='600'
                            color='green.600'
                          >
                            +
                          </Text>
                        </Button>
                      </HStack>
                    </Box>
                    <Text fontWeight={400} fontSize={16} mt={1}>
                      ₹{parseInt(item.cost * item.count)}
                    </Text>
                  </Box>
                );
              }
            })}
          </VStack>
          <Divider
            mt={4}
            mb={3}
            borderColor='headingText.300'
            borderWidth={0.5}
          />
          <Row alignItems='center' justifyContent={'space-between'}>
            <Icon viewBox='0 0 16 16' color='headingText.500' size={5}>
              <Path d='M5 10.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5zm0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z' />
              <Path d='M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2z' />
              <Path d='M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1z' />
            </Icon>
            <Text pl={2} color='headingText.500'>
              Any items request? We will try our best to convey it.
            </Text>
          </Row>
        </Box>
        <Box mt={5} bg='white' px={4} py={6} width={'100%'}>
          <Box
            bg='orange.50'
            p={4}
            borderRadius={8}
            borderWidth={1.5}
            borderColor='orange.300'
            flexDirection={'row'}
            width={'98%'}
          >
            <Box>
              <Checkbox
                colorScheme='orange'
                borderColor='orange.700'
                mr={3}
                value={''}
                accessibilityLabel={'checkbox'}
              ></Checkbox>
            </Box>
            <Box width={'90%'} color='orange.700'>
              <Text fontSize={16} fontWeight='700'>
                Opt in for No-Contact Delivery
              </Text>
              <Text>
                Our delivery partner will call (or ring your doorbell) after
                reaching and leave the order at your door/gate (Not applicable
                for COD)
              </Text>
            </Box>
          </Box>
          <Box mt={5} width={'100%'} flexDirection={'row'}>
            <Image
              alt='delivery'
              size='38px'
              source={require('../../assets/images/delivery.png')}
            ></Image>

            <Box width={'90%'} pl={4} pt={2}>
              <Box flexDirection={'row'} alignItems={'center'}>
                <Text letterSpacing={1} fontWeight='600' fontSize={14} pr={2}>
                  Tip your hunger saviour!
                </Text>
                <Icon
                  type={'Feather'}
                  name={'info'}
                  size={3}
                  color={'headingText.600'}
                />
              </Box>
              <Text color='headingText.600' mt={2} fontSize={13}>
                Thank your delivery partner for helping you stay safe indoors.
                Support them through these tough times with a tip.
              </Text>
              <Box
                mt={6}
                justifyContent={'space-between'}
                flexDirection={'row'}
              >
                <Button
                  variant='ghost'
                  borderWidth={1}
                  borderColor='gray.300'
                  fontWeight={500}
                >
                  ₹20
                </Button>
                <Box>
                  <Button
                    variant='ghost'
                    borderWidth={1}
                    borderColor='gray.300'
                    fontWeight={500}
                  >
                    ₹30
                  </Button>
                  <Text mt={2} fontSize={10} textAlign='center'>
                    Most Tipped
                  </Text>
                </Box>
                <Button
                  variant='ghost'
                  borderWidth={1}
                  borderColor='gray.300'
                  fontWeight={500}
                >
                  ₹50
                </Button>
                <Button
                  variant='ghost'
                  borderWidth={1}
                  borderColor='gray.300'
                  fontWeight={500}
                >
                  Other
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box mt={5} mb={40} bg='white' px={4} py={6}>
          <VStack space={3}>
            <Text fontSize={14} fontWeight={500}>
              Bill Details
            </Text>
            <Flex direction='row'>
              <Text>Item Total</Text>
              <Text ml='auto'>₹{total}</Text>
            </Flex>
            <Flex direction='row'>
              <VStack space={1}>
                <Box width={130}>
                  <Text color='blue.500'>Delivery Partner Fee</Text>
                  <Divider
                    borderStyle='dashed'
                    borderWidth={1}
                    borderColor='blue.500'
                  />
                </Box>
                <Text fontSize='xs' color='gray.600'>
                  This fee goes towards paying you Delivery Partner fairly.
                </Text>
              </VStack>
              <Text ml='auto'>₹{total == 0 ? 0 : 15}</Text>
            </Flex>
            <Divider borderWidth={0.3} borderColor='gray.300' />
            <Flex direction='row'>
              <Box>
                <Text color='blue.500'>Taxes and charges</Text>
                <Divider
                  borderStyle='dashed'
                  borderWidth={1}
                  borderColor='blue.500'
                />
              </Box>
              <Text ml='auto'>₹{parseInt(0.18 * total)}</Text>
            </Flex>
            <Divider borderWidth={0.3} borderColor='gray.300' />
            <Flex direction='row'>
              <Box>
                <Text fontWeight='600'>To pay</Text>
              </Box>
              <Text ml='auto' fontWeight='600'>
                ₹{total == 0 ? 0 : total + 15 + parseInt(0.18 * total)}
              </Text>
            </Flex>
          </VStack>
        </Box>
      </ScrollView>

      <View
        width={'100%'}
        height={120}
        position={'absolute'}
        bottom={0}
        bg='white'
      >
        <Divider borderWidth={0.35} borderColor='gray.400' />
        <Box px={5} pt={3}>
          <Text fontWeight={600} fontSize={16}>
            Almost There
          </Text>
          <Text fontWeight={300} fontSize={12}>
            Login or Sign up to place your order.
          </Text>
          <Button variant='solid' bg='primary' borderRadius={0} p={3} mt={4}>
            <Text color='white' fontWeight={700}>
              CONTINUE
            </Text>
          </Button>
        </Box>
      </View>
    </SafeAreaView>
  );
}
