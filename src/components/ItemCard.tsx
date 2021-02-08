import * as React from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import {
  Box,
  Button,
  Column,
  HStack,
  Icon,
  Image,
  Path,
  Row,
  Text,
  VStack,
} from 'native-base';
import { useNavigation } from '@react-navigation/native';
import { ItemsContext } from '../utils/ItemsContext';

export default function ItemCard(item: any) {
  let navigation = useNavigation();
  const [count, setCount] = React.useState(item?.item?.count);
  const context: any = React.useContext(ItemsContext);
  return (
    <>
      <Button my={3} variant='ghost' alignItems='center' px={1}>
        <VStack space={2} px={1}>
          <Row bg='red.100'>
            <Image
              alt='image'
              width={250}
              height={125}
              source={{
                uri: item?.item?.src,
              }}
            />
          </Row>
          <Text fontSize={10} color='gray.600' fontWeight={300}>
            EXTRA VALUE MEAL - MEDIUM
          </Text>
          <Row width='95%'>
            <Image
              alt='image'
              size='13px'
              source={{
                uri:
                  'https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Indian-vegetarian-mark.svg/1200px-Indian-vegetarian-mark.svg.png',
              }}
            />
            <Box mt={-1}>
              <Text
                noOfLines={2}
                px={2}
                fontWeight={400}
                fontSize={15}
                fontFamily='ProximaNova'
              >
                {item?.item?.name}
              </Text>
            </Box>
          </Row>
          <Row pt={5} justifyContent='space-between'>
            <Text color='gray.700' fontWeight={300}>
              ₹{item?.item?.cost}
            </Text>
            <VStack space={2}>
              <Button
                variant='ghost'
                borderWidth='1px'
                size='xs'
                borderRadius='0px'
                borderColor='gray.300'
                width={90}
                p={count <= 0 ? 2 : '3px'}
                pr={3}
                mt={-3}
                onPress={() => {
                  let obj = item.item;
                  obj.count = 1;
                  context.setItems([...context.items, obj]);

                  setCount(1);
                }}
              >
                {count <= 0 ? (
                  <Text color='green.600' fontWeight={700}>
                    ADD
                  </Text>
                ) : (
                  <Box>
                    <HStack space={2}>
                      <Button
                        size='xs'
                        variant='ghost'
                        onPress={() => {
                          let arr: any = [];
                          context.items.forEach((temp: any) => {
                            if (temp.name == item?.item?.name) {
                              if (temp.count != 0) temp.count = temp.count - 1;
                            }
                            arr.push(temp);
                            context.setItems(arr);
                            setCount(count - 1);
                          });
                        }}
                      >
                        <Text color='green.600' fontSize={16} fontWeight={700}>
                          -
                        </Text>
                      </Button>
                      <Text color='green.600' fontWeight={700} pt={1}>
                        {count}
                      </Text>
                      <Button
                        size='xs'
                        variant='ghost'
                        onPress={() => {
                          let arr: any = [];
                          context.items.forEach((temp: any) => {
                            if (temp.name == item?.item?.name) {
                              temp.count = temp.count + 1;
                            }
                            arr.push(temp);
                            context.setItems(arr);
                            setCount(count + 1);
                          });
                        }}
                      >
                        <Text color='green.600' fontSize={16} fontWeight={700}>
                          +
                        </Text>
                      </Button>
                    </HStack>
                  </Box>
                )}
              </Button>
              <Box alignItems='center'>
                <Text fontSize='10px' color='black' fontWeight={200}>
                  Customizable
                </Text>
              </Box>
            </VStack>
          </Row>
        </VStack>
      </Button>
    </>
  );
}
