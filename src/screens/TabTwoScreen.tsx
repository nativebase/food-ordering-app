import * as React from 'react';
import { Box, Input, Text, VStack, Image, Row } from 'native-base';
import { SafeAreaView } from 'react-native-safe-area-context';

import { DUMMY_ITEMS } from '../utils/dummyItems';
import { ScrollView } from 'react-native';

export default function TabTwoScreen() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <ScrollView>
        <PopularItems showInput={true} grocery={true} />
        <PopularItems showInput={false} />
        <PopularItems showInput={false} />
        <PopularItems showInput={false} />
      </ScrollView>
    </SafeAreaView>
  );
}

function PopularItems({ showInput, grocery }: any) {
  return (
    <>
      <Box bg={'white'} p={4}>
        {showInput ? (
          <Input
            w='100%'
            size='xl'
            placeholder='Search for restaurants and food'
            variant='outline'
            placeholderTextColor={'#718096'}
          />
        ) : null}

        <Box pt={showInput ? 5 : 0}>
          {grocery ? (
            <Row justifyContent={'space-between'} alignItems={'center'}>
              <Text fontWeight={'bold'} fontSize={18}>
                Popular on
                <Text color={'pink.100'} fontWeight={'800'}>
                  {' instamart'}
                </Text>
              </Text>
              <VStack>
                <Text color={'pink.100'} textAlign={'center'}>
                  Groceries in
                </Text>
                <Text
                  color={'pink.100'}
                  fontWeight={'800'}
                  textAlign={'center'}
                >
                  30-45 minutes
                </Text>
              </VStack>
            </Row>
          ) : (
            <Text fontWeight={'bold'} fontSize={18}>
              Popular Cuisines
            </Text>
          )}

          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {DUMMY_ITEMS.map((item: any, index: number) => (
              <VStack
                pr={3}
                pt={5}
                width={100}
                key={index}
                alignItems={'center'}
              >
                <Image
                  height={16}
                  width={16}
                  alt={'item'}
                  source={{ uri: item.src }}
                  borderRadius={100}
                />
                <Text textAlign={'center'} fontSize={14} pt={2}>
                  {item.name}
                </Text>
              </VStack>
            ))}
          </ScrollView>
        </Box>
      </Box>
      <Box height={2} bg={'#edf1f5'} shadow={1}></Box>
    </>
  );
}
