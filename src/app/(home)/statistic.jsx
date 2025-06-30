import { PX_ALL } from '@/utils/helper-server';
import { Flex, Text } from '@chakra-ui/react';

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
    <Flex
      px={PX_ALL}
      py="80px"
      bgImage="url(/images/bg-statistic.png)"
      bgSize="cover"
      bgRepeat="no-repeat"
      bgPos="center"
      gap="24px"
      direction={{ base: 'column', lg: 'row' }}
    >
      {STATISTIC_LIST.map((item, index) => {
        const { title, value, sub } = item;

        return (
          <Flex
            direction="column"
            key={index}
            align="center"
            flex={1 / 4}
            bgColor="#48544540"
            borderRadius={6}
            py="40px"
          >
            <Text textAlign="center" color="#00B207" fontSize={56}>
              {value}
              {sub}
            </Text>
            <Text textAlign="center" color="#FFF" fontSize={18}>
              {title}
            </Text>
          </Flex>
        );
      })}
    </Flex>
  );
};

export default Statistic;
