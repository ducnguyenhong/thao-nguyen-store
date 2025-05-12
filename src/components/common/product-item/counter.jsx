'use client';

import { Flex, Text } from '@chakra-ui/react';
import { memo, useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(1);

  return (
    <Flex border="1px solid #e5e5e5" cursor="pointer" borderRadius="full" h="full" px="6px" align="center" gap="7px">
      <Flex
        w="36px"
        h="36px"
        align="center"
        justify="center"
        borderRadius="full"
        bgColor="#f2f2f2"
        userSelect="none"
        transitionDuration="200ms"
        _hover={{ bgColor: '#e9f8ea' }}
        onClick={() => setCount((prev) => (prev < 2 ? prev : prev - 1))}
      >
        <Text fontSize={20}>-</Text>
      </Flex>
      <Text fontSize={16} color="#1a1a1a" w="20px" textAlign="center">
        {count}
      </Text>
      <Flex
        w="36px"
        h="36px"
        cursor="pointer"
        align="center"
        justify="center"
        borderRadius="full"
        userSelect="none"
        bgColor="#f2f2f2"
        transitionDuration="200ms"
        _hover={{ bgColor: '#e9f8ea' }}
        onClick={() => setCount((prev) => prev + 1)}
      >
        <Text fontSize={18}>+</Text>
      </Flex>
    </Flex>
  );
};

export default memo(Counter);
