'use client';

import { Flex, Input, Text } from '@chakra-ui/react';

const FilterSearch = () => {
  return (
    <Flex direction="column" gap="12px" mt={{ base: 0, lg: '36px' }}>
      <Text fontSize={20} fontWeight={500} color="#1A1A1A" flex={1}>
        Tìm kiếm
      </Text>

      <Input placeholder="Nhập tên sản phẩm..." px="12px" borderColor="#CCC" />
    </Flex>
  );
};

export default FilterSearch;
