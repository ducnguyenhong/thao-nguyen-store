import { ProductItem, SectionTitle } from '@/components/common';
import { Image } from '@/components/control';
import { formatCurrency, PX_ALL } from '@/utils/helper-server';
import { Box, Flex, Grid, GridItem, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { FaStar } from 'react-icons/fa';
import { IoArrowForwardOutline } from 'react-icons/io5';

const HotProduct = () => {
  return (
    <Box w="full" bgColor="#FFF" py={{ base: '32px', lg: '80px' }} px={PX_ALL} pos="relative">
      <Flex direction="column">
        <Flex align="center" justify="space-between">
          <SectionTitle title="Sản phẩm bán chạy nhất" />

          <Link href="/" style={{ display: 'block' }}>
            <Flex align="center" gap="4px">
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
        mt={{ base: '32px', lg: '40px' }}
        gap={{ base: '16px', lg: '24px' }}
        templateColumns={{ base: 'repeat(2, 1fr)', lg: 'repeat(5, 1fr)' }}
      >
        {[1, 2, 3, 4, 5].map((item, index) => {
          return (
            <GridItem key={item} display={{ base: index === 4 ? 'none' : 'block', lg: 'block' }}>
              <ProductItem />
            </GridItem>
          );
        })}
      </Grid>

      <Grid
        templateColumns={{ base: 'repeat(2, 1fr)', lg: 'repeat(4, 1fr)' }}
        gap={{ base: '16px', lg: '24px' }}
        mt={{ base: '32px', lg: '40px' }}
      >
        {[1, 2, 3].map((item, index) => {
          return (
            <GridItem key={item} display={{ base: index > 1 ? 'none' : 'block', lg: 'block' }}>
              <Text fontSize={22} fontWeight={700} color="#1a1a1a">
                Rau xanh
              </Text>
              <Flex direction="column" mt="16px" gap="16px">
                {[1, 2, 3].map((product) => {
                  return (
                    <Flex
                      key={product}
                      direction={{ base: 'column', lg: 'row' }}
                      pt="6px"
                      pb={{ base: '16px', lg: '6px' }}
                      align="center"
                      border="1px solid #e6e6e6"
                      borderRadius={6}
                      overflow="hidden"
                      transitionDuration="250ms"
                      pos="relative"
                      className="group"
                      _hover={{ borderColor: '#2C742F', boxShadow: '0px 0px 15px -3px #20b526ba' }}
                    >
                      <Link href="/" style={{ display: 'block' }}>
                        <Image src="/images/product.png" w="100px" h="100px" />
                      </Link>
                      <Flex direction="column" flex={{ base: 'inherit', lg: 1 }}>
                        <Link href="/" style={{ display: 'block' }}>
                          <Text
                            fontSize={16}
                            color="#4D4D4D"
                            fontWeight={400}
                            transitionDuration="250ms"
                            _groupHover={{ color: '#008004' }}
                          >
                            Táo đá xanh Úc 1kg
                          </Text>
                        </Link>
                        <Text mt="2px" fontSize={16} fontWeight={700}>
                          {formatCurrency(100000)}
                        </Text>
                        <Flex mt="4px" align="center" gap="2px">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <FaStar key={star} size={14} color="#FF8A00" />
                          ))}
                        </Flex>
                      </Flex>
                    </Flex>
                  );
                })}
              </Flex>
            </GridItem>
          );
        })}
        <GridItem colSpan={{ base: 2, lg: 1 }} h={{ base: '500px', lg: 'auto' }}>
          <Image src="/images/hot-product-banner.png" w="full" h="full" borderRadius={8} />
        </GridItem>
      </Grid>

      <Image
        src="/images/decor-1.png"
        w="80px"
        h="240px"
        pos="absolute"
        bottom="80px"
        left="0px"
        display={{ base: 'none', lg: 'block' }}
      />
      <Image
        src="/images/decor-6.png"
        w="200px"
        h="170px"
        pos="absolute"
        top="140px"
        left="0px"
        display={{ base: 'none', lg: 'block' }}
      />
      <Image
        src="/images/decor-7.png"
        w="140px"
        h="140px"
        pos="absolute"
        top="440px"
        right="0px"
        display={{ base: 'none', lg: 'block' }}
      />
    </Box>
  );
};

export default HotProduct;
