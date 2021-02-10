import * as React from 'react';
import { Box, Input, Text, VStack, Image } from 'native-base';
import { SafeAreaView } from 'react-native-safe-area-context';

import { DUMMY_ITEMS } from '../utils/dummyItems';
import { ScrollView } from 'react-native';

export default function TabTwoScreen() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <Box flex={0.5} bg={'white'} p={4}>
        <Input
          w='100%'
          size='xl'
          placeholder='Search for restaurants and food'
          variant='outline'
        />
        <Box pt={5}>
          <Text fontWeight={'bold'} fontSize={18}>
            Popular Cuisines
          </Text>
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
                <Text textAlign={'center'} fontSize={16} pt={2}>
                  {item.name}
                </Text>
              </VStack>
            ))}
          </ScrollView>
        </Box>
      </Box>
      <Box height={2} bg={'#edf1f5'} shadow={5}></Box>
      <Box flex={1} bg={'white'}></Box>
    </SafeAreaView>
  );
}
