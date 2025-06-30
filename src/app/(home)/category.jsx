import { SectionTitle } from '@/components/common';
import { Image } from '@/components/control';
import { CATEGORY_LIST } from '@/utils/data';
import { PX_ALL } from '@/utils/helper-server';
import { AspectRatio, Box, Flex, Grid, GridItem, Text } from '@chakra-ui/react';
import Link from 'next/link';

const Category = () => {
  return (
    <Flex
      px={PX_ALL}
      py="80px"
      direction="column"
      bgImage="url(/images/bg-category.png)"
      bgSize="cover"
      bgRepeat="no-repeat"
      bgPos="center"
      pos="relative"
    >
      <SectionTitle title="Danh mục sản phẩm" />

      <Grid w="full" templateColumns={{ base: 'repeat(2, 1fr)', lg: 'repeat(6, 1fr)' }} gap="24px" mt="40px">
        {CATEGORY_LIST.map((item) => {
          const { title, id, icon, numOfProduct } = item;
          return (
            <GridItem
              className="group"
              key={id}
              bgColor="#FFF"
              borderRadius={8}
              transitionDuration="250ms"
              p="24px"
              border="1px solid #e6e6e6"
              _hover={{ borderColor: '#2C742F', boxShadow: '0px 0px 15px -3px #20b526ba' }}
            >
              <Link href={`/san-pham?category=${id}`} style={{ display: 'block', width: '100%' }}>
                <Flex direction="column" align="center">
                  <Box px="24px" w="full">
                    <AspectRatio ratio={1 / 1} w="full">
                      <Image src={icon} h="100%" w="100%" />
                    </AspectRatio>
                  </Box>
                  <Text
                    mt="20px"
                    fontWeight={600}
                    textAlign="center"
                    fontSize={18}
                    color="#333"
                    transitionDuration="250ms"
                    _groupHover={{ color: '#2C742F' }}
                  >
                    {title}
                  </Text>
                  <Text mt="4px" textAlign="center" fontSize={14} color="#808080">
                    {numOfProduct} sản phẩm
                  </Text>
                </Flex>
              </Link>
            </GridItem>
          );
        })}
      </Grid>

      <Image src="/images/decor-4.png" w="52px" h="76px" pos="absolute" bottom="10px" right="244px" opacity={0.7} />
    </Flex>
  );
};

export default Category;
