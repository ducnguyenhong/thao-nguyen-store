import { ProductItem } from '@/components/common';
import { Box, Grid, GridItem, Text } from '@chakra-ui/react';

const RelatedProduct = () => {
  return (
    <Box mt="48px">
      <Text as="h1" fontSize={24} fontWeight={600}>
        Sản phẩm có liên quan
      </Text>
      <Grid mt="24px" w="full" templateColumns="repeat(4, 1fr)" gap="24px">
        {[1, 2, 3, 4].map((item, index) => {
          return (
            <GridItem key={index}>
              <ProductItem />
            </GridItem>
          );
        })}
      </Grid>
    </Box>
  );
};

export default RelatedProduct;
