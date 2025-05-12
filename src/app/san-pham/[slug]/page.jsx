import { Breadcrumb } from '@/components/common';
import ProductInfo from '@/components/common/product-item/product-info';
import { PX_ALL } from '@/utils/helper-server';
import { Box } from '@chakra-ui/react';
import Description from './description';
import RelatedProduct from './related-product';
import Review from './review';

const ProductDetail = () => {
  return (
    <Box bgColor="#FFF">
      <Breadcrumb
        data={[
          { title: 'Sản phẩm', href: '/san-pham' },
          { title: 'Chi tiết sản phẩm', href: '/san-pham/a.1', isActive: true }
        ]}
      />
      <Box px={PX_ALL} pt="16px" pb="80px">
        <ProductInfo isDetail />
        <Description />
        <Review />
        <RelatedProduct />
      </Box>
    </Box>
  );
};

export default ProductDetail;
