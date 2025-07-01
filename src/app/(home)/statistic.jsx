import { PX_ALL } from '@/utils/helper-server';
import { Flex, Grid, GridItem, Text } from '@chakra-ui/react';

const STATISTIC_LIST = [
  {
    title: 'Đơn hàng',
    value: 20,
    sub: '+'
  },
  {
    title: 'Đơn hàng',
    value: 20,
    sub: '+'
  },
  {
    title: 'Đơn hàng',
    value: 20,
    sub: '+'
  },
  {
    title: 'Đơn hàng',
    value: 20,
    sub: '+'
  }
];

const Statistic = () => {
  return (
    <Grid
      px={PX_ALL}
      py={{ base: '32px', lg: '80px' }}
      bgImage="url(/images/bg-statistic.png)"
      bgSize="cover"
      bgRepeat="no-repeat"
      bgPos="center"
      gap={{ base: '16px', lg: '24px' }}
      flexWrap="wrap"
      templateColumns={{ base: 'repeat(2, 1fr)', lg: 'repeat(4, 1fr)' }}
    >
      {STATISTIC_LIST.map((item, index) => {
        const { title, value, sub } = item;

        return (
          <GridItem key={index}>
            <Flex
              direction="column"
              align="center"
              flex={{ base: 1 / 2, lg: 1 / 4 }}
              bgColor="#48544540"
              borderRadius={6}
              py={{ base: '16px', lg: '40px' }}
            >
              <Text textAlign="center" color="#00B207" fontSize={{ base: 24, lg: 56 }}>
                {value}
                {sub}
              </Text>
              <Text textAlign="center" color="#FFF" fontSize={{ base: 14, lg: 18 }}>
                {title}
              </Text>
            </Flex>
          </GridItem>
        );
      })}
    </Grid>
  );
};

export default Statistic;
