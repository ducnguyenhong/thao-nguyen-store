import { Breadcrumb } from '@/components/common';
import { PX_ALL } from '@/utils/helper-server';
import { Flex } from '@chakra-ui/react';
import FilterCategory from './filter-category';
import FilterSearch from './filter-search';
import ProductList from './product-list';

const ProductPage = () => {
  return (
    <div>
      <Breadcrumb data={[{ title: 'Sản phẩm', href: '/san-pham', isActive: true }]} />

      <Flex mt="40px" pb="80px" gap="24px" px={PX_ALL}>
        <Flex flex={1 / 4} direction="column" gap="32px">
          <FilterSearch />
          <Flex w="full" h="1px" bgColor="#f2f2f2" />
          <FilterCategory />
        </Flex>
        <Flex flex={3 / 4}>
          <ProductList />
        </Flex>
      </Flex>
    </div>
  );
};

export default ProductPage;
