'use client';

import { ProductItem } from '@/components/common';
import { Box, Flex, Grid, GridItem, RadioGroup, Text } from '@chakra-ui/react';
import { useState } from 'react';

const FILTERS = [
  {
    label: 'Sản phẩm mới nhất',
    value: 'createdAt'
  },
  {
    label: 'Sản phẩm bán chạy nhất',
    value: 'sell'
  }
];

const ProductList = () => {
  const [value, setValue] = useState(null);

  return (
    <Box w="full">
      <Flex align="center" gap="12px" mb="24px">
        <Flex flex={1}>
          <RadioGroup.Root
            variant="outline"
            colorPalette="green"
            value={value}
            onValueChange={(e) => setValue(e.value)}
          >
            <Flex align="center" gap="40px">
              {FILTERS.map((item) => {
                const { label, value } = item;
                return (
                  <RadioGroup.Item key={value} value={value}>
                    <RadioGroup.ItemHiddenInput />
                    <RadioGroup.ItemIndicator />
                    <RadioGroup.ItemText fontSize={14} fontWeight={400}>
                      {label}
                    </RadioGroup.ItemText>
                  </RadioGroup.Item>
                );
              })}
            </Flex>
          </RadioGroup.Root>
        </Flex>

        <Text fontSize={14} color="#1a1a1a">
          Có{' '}
          <Text as="span" fontSize={14} color="#1a1a1a" fontWeight={600}>
            58
          </Text>{' '}
          sản phẩm
        </Text>
      </Flex>
      <Grid templateColumns="repeat(4, 1fr)" gap="24px" w="full">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((item) => {
          return (
            <GridItem key={item}>
              <ProductItem />
            </GridItem>
          );
        })}
      </Grid>
    </Box>
  );
};

export default ProductList;
