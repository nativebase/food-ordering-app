import * as React from 'react';
import { Box, Column, Divider, Flex, Icon, Row, Text } from 'native-base';
import { Path } from 'react-native-svg';

export default function ScreenHeader() {
  return (
    <>
      <Box w='100%' py={3} bg='white'>
        {/* <Divider borderWidth={0.25} borderColor='gray.400' /> */}

        <Flex direction='row' mx={3}>
          <Column ml={2} width='76%'>
            <Row>
              <Text
                fontWeight={700}
                mt={2}
                fontSize={18}
                fontFamily='ProximaNova'
              >
                Sector 44
              </Text>
              <Icon viewBox='0 0 32 32' color='primary' size={8} mt={1}>
                <Path d='M16.003 18.626l7.081-7.081L25 13.46l-8.997 8.998-9.003-9 1.917-1.916z' />
              </Icon>
            </Row>
            <Box>
              <Text
                fontSize={16}
                fontFamily='ProximaNova'
                color='gray.500'
                isTruncated={true}
              >
                H No:1024, Sector 44-A, Chandigarh, 160047
              </Text>
            </Box>
          </Column>
          <Column justifyContent='center'>
            <Row alignItems='center'>
              <Icon viewBox='0 0 32 32' color='gray.500' size={6}>
                <Path d='M14.2 2.864l-1.899 1.38c-0.612 0.447-1.35 0.687-2.11 0.687h-2.352c-0.386 0-0.727 0.248-0.845 0.613l-0.728 2.238c-0.235 0.721-0.691 1.348-1.302 1.79l-1.905 1.385c-0.311 0.226-0.442 0.626-0.323 0.991l0.728 2.241c0.232 0.719 0.232 1.492-0.001 2.211l-0.727 2.237c-0.119 0.366 0.011 0.767 0.323 0.994l1.906 1.384c0.61 0.445 1.064 1.070 1.3 1.79l0.728 2.24c0.118 0.365 0.459 0.613 0.844 0.613h2.352c0.759 0 1.497 0.24 2.107 0.685l1.9 1.381c0.313 0.227 0.736 0.227 1.048 0.001l1.9-1.38c0.613-0.447 1.349-0.687 2.11-0.687h2.352c0.384 0 0.726-0.248 0.845-0.615l0.727-2.235c0.233-0.719 0.688-1.346 1.302-1.794l1.904-1.383c0.311-0.226 0.442-0.627 0.323-0.993l-0.728-2.239c-0.232-0.718-0.232-1.49 0.001-2.213l0.727-2.238c0.119-0.364-0.012-0.765-0.324-0.992l-1.901-1.383c-0.614-0.445-1.070-1.074-1.302-1.793l-0.727-2.236c-0.119-0.366-0.461-0.614-0.845-0.614h-2.352c-0.76 0-1.497-0.239-2.107-0.685l-1.903-1.382c-0.313-0.227-0.736-0.226-1.047-0.001zM16.829 0.683l1.907 1.385c0.151 0.11 0.331 0.168 0.521 0.168h2.352c1.551 0 2.927 1 3.408 2.475l0.728 2.241c0.057 0.177 0.169 0.332 0.321 0.442l1.902 1.383c1.258 0.912 1.784 2.531 1.304 4.006l-0.726 2.234c-0.058 0.182-0.058 0.375-0.001 0.552l0.727 2.237c0.48 1.477-0.046 3.096-1.303 4.007l-1.9 1.38c-0.153 0.112-0.266 0.268-0.324 0.447l-0.727 2.237c-0.48 1.477-1.856 2.477-3.408 2.477h-2.352c-0.19 0-0.37 0.058-0.523 0.17l-1.904 1.383c-1.256 0.911-2.956 0.911-4.213-0.001l-1.903-1.384c-0.15-0.11-0.332-0.168-0.521-0.168h-2.352c-1.554 0-2.931-1.001-3.408-2.477l-0.726-2.234c-0.059-0.18-0.173-0.338-0.324-0.448l-1.902-1.381c-1.258-0.912-1.784-2.53-1.304-4.008l0.727-2.235c0.058-0.179 0.058-0.373 0.001-0.551l-0.727-2.236c-0.481-1.476 0.046-3.095 1.302-4.006l1.905-1.385c0.151-0.11 0.264-0.265 0.323-0.444l0.727-2.235c0.478-1.476 1.855-2.477 3.408-2.477h2.352c0.189 0 0.371-0.059 0.523-0.17l1.902-1.383c1.256-0.911 2.956-0.911 4.212 0zM18.967 23.002c-1.907 0-3.453-1.546-3.453-3.453s1.546-3.453 3.453-3.453c1.907 0 3.453 1.546 3.453 3.453s-1.546 3.453-3.453 3.453zM18.967 20.307c0.419 0 0.758-0.339 0.758-0.758s-0.339-0.758-0.758-0.758c-0.419 0-0.758 0.339-0.758 0.758s0.339 0.758 0.758 0.758zM10.545 14.549c-1.907 0-3.453-1.546-3.453-3.453s1.546-3.453 3.453-3.453c1.907 0 3.453 1.546 3.453 3.453s-1.546 3.453-3.453 3.453zM10.545 11.855c0.419 0 0.758-0.339 0.758-0.758s-0.339-0.758-0.758-0.758c-0.419 0-0.758 0.339-0.758 0.758s0.339 0.758 0.758 0.758zM17.78 7.882l2.331 1.352-7.591 13.090-2.331-1.352 7.591-13.090z' />
              </Icon>
              <Text
                pl={1}
                color='gray.700'
                fontWeight={600}
                fontSize={18}
                fontFamily='ProximaNova'
              >
                Offers
              </Text>
            </Row>
          </Column>
        </Flex>
      </Box>
      <Divider borderWidth={0.35} borderColor='gray.400' />
      <Box w='100%' py={4} bg='white'>
        <Row justifyContent='space-between' mx={5}>
          <Text fontSize={16} fontFamily='ProximaNova' fontWeight={500}>
            ALL RESTAURANTS
          </Text>
          <Row mt={-1}>
            <Icon
              mt={0.5}
              mx={2}
              viewBox='0 0 612.021 612.021'
              color='gray.700'
            >
              <Path d='M590.927,517.491H337.79c-11.645,0-21.095,9.45-21.095,21.116c0,11.665,9.45,21.115,21.095,21.115l253.137-0.611     c11.645,0,21.095-8.839,21.095-20.504C612.021,526.941,602.592,517.491,590.927,517.491z M295.601,52.88l295.326-0.042     c11.645,0,21.095-9.408,21.095-21.074s-9.45-21.116-21.095-21.116H295.601c-11.645,0-21.095,9.45-21.095,21.116     S283.956,52.88,295.601,52.88z M331.188,396.745c-8.27-8.312-21.686-8.312-29.955,0L190.127,524.6V10.648h-42.189v514.711     L36.156,396.745c-8.269-8.312-21.686-8.312-29.954,0c-8.27,8.312-8.27,21.77,0,30.06l146.439,168.526     c4.409,4.43,10.273,6.307,16.032,6.012c5.779,0.295,11.623-1.582,16.031-6.012l146.44-168.526     C339.457,418.515,339.457,405.057,331.188,396.745z M590.927,137.364H295.601c-11.645,0-21.095,9.451-21.095,21.116     c0,11.666,9.45,20.926,21.095,20.926h295.326c11.645,0,21.095-9.261,21.095-20.926     C612.021,146.815,602.592,137.364,590.927,137.364z M590.927,264.059H295.601c-11.645,0-21.095,9.451-21.095,21.116     c0,11.666,9.45,20.778,21.095,20.778l295.326,0.338c11.645,0,21.095-9.451,21.095-21.116     C612.021,273.531,602.592,264.059,590.927,264.059z M590.927,390.775H422.169c-11.645,0-21.095,9.45-21.095,21.115     c0,11.666,9.45,20.652,21.095,20.652h168.758c11.645,0,21.095-8.986,21.095-20.652     C612.021,400.226,602.592,390.775,590.927,390.775z' />
            </Icon>
            <Text
              pl={1}
              color='gray.700'
              fontWeight={600}
              fontSize={18}
              fontFamily='ProximaNova'
            >
              Sort / Filter
            </Text>
          </Row>
        </Row>
      </Box>
      <Divider borderWidth={0.35} borderColor='gray.400' />
    </>
  );
}
