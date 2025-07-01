import { ProductItem, SectionTitle } from '@/components/common';
import { Image } from '@/components/control';
import { PX_ALL } from '@/utils/helper-server';
import { Box, Flex, Grid, GridItem, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { IoArrowForwardOutline } from 'react-icons/io5';

const FeaturedProduct = () => {
  return (
    <Box w="full" bgColor="#FFF" py={{ base: '32px', lg: '80px' }} px={PX_ALL} pos="relative">
      <Flex direction="column">
        <Flex align="center" justify="space-between">
          <SectionTitle title="Sản phẩm nổi bật" />

          <Link href="/" style={{ display: 'block' }}>
            <Flex align="center" gap="4px" pos="relative">
              <Text fontSize={16} fontWeight={500} color="#00B207" display={{ base: 'none', lg: 'block' }}>
                Xem thêm
              </Text>
              <IoArrowForwardOutline size={18} color="#00B207" />
            </Flex>
          </Link>
        </Flex>
      </Flex>

      <Grid
        w="full"
        mt={{ base: '24px', lg: '40px' }}
        gap={{ base: '16px', lg: '24px' }}
        templateColumns={{ base: 'repeat(2, 1fr)', lg: 'repeat(5, 1fr)' }}
      >
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => {
          return (
            <GridItem key={item} display={{ base: index > 7 ? 'none' : 'block', lg: 'block' }}>
              <ProductItem />
            </GridItem>
          );
        })}
      </Grid>

      <Image
        src="/images/decor-1.png"
        w="100px"
        h="300px"
        pos="absolute"
        bottom="30px"
        left="0px"
        display={{ base: 'none', lg: 'block' }}
      />
      <Image
        src="/images/decor-5.png"
        w="79px"
        h="70px"
        pos="absolute"
        bottom="-35px"
        left="214px"
        zIndex={20}
        display={{ base: 'none', lg: 'block' }}
      />
    </Box>
  );
};

export default FeaturedProduct;
