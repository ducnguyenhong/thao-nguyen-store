import { ProductItem } from '@/components/common';
import { Image } from '@/components/control';
import { PX_ALL } from '@/utils/helper-server';
import { Box, Flex, Grid, GridItem, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { IoArrowForwardOutline } from 'react-icons/io5';

const FeaturedProduct = () => {
  return (
    <Box w="full" bgColor="#FFF" py="80px" px={PX_ALL} pos="relative">
      <Flex direction="column">
        <Flex align="center" justify="space-between">
          <Text as="h1" fontSize={28} fontWeight={700} color="#1A1A1A">
            Sản phẩm nổi bật
          </Text>

          <Link href="/" style={{ display: 'block' }}>
            <Flex align="center" gap="4px">
              <Text fontSize={16} fontWeight={500} color="#00B207">
                Xem thêm
              </Text>
              <IoArrowForwardOutline size={18} color="#00B207" />
            </Flex>
          </Link>
        </Flex>
      </Flex>

      <Grid w="full" mt="40px" gap="24px" templateColumns={{ base: 'repeat(2, 1fr)', lg: 'repeat(5, 1fr)' }}>
        {[1, 2, 3, 4, 5].map((item) => {
          return (
            <GridItem key={item}>
              <ProductItem />
            </GridItem>
          );
        })}
      </Grid>

      <Image src="/images/decor-1.png" w="100px" h="300px" pos="absolute" bottom="30px" left="0px" />
    </Box>
  );
};

export default FeaturedProduct;
