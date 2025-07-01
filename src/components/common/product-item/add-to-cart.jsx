import { Button, CloseButton, Dialog, Icon, Portal } from '@chakra-ui/react';
import { memo } from 'react';
import { FaCartPlus } from 'react-icons/fa6';
import ProductInfo from './product-info';

const AddToCart = () => {
  return (
    <Dialog.Root size="cover" trapFocus={false} placement="center">
      <Dialog.Trigger asChild>
        <Button
          borderRadius="full"
          minH={0}
          minW={0}
          w="40px"
          h="40px"
          bgColor="#dbffdb"
          transitionDuration="250ms"
          title="Thêm vào giỏ hàng"
          _groupHover={{ bgColor: '#00B207' }}
          _hover={{ scale: 1.05 }}
        >
          <Icon color="#00B207" transitionDuration="250ms" _groupHover={{ color: '#FFF' }}>
            <FaCartPlus size={12} />
          </Icon>
        </Button>
      </Dialog.Trigger>
      <Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner mt={{ base: 0, lg: '-100px' }}>
          <Dialog.Content mt="48px" p={{ base: '16px', lg: '32px' }} w="1200px" h="auto">
            <Dialog.Header>
              <Dialog.Title>Thêm sản phẩm vào giỏ hàng</Dialog.Title>
            </Dialog.Header>
            <Dialog.Body pt={{ base: '24px', lg: '32px' }} pb="8px">
              <ProductInfo />
            </Dialog.Body>
            <Dialog.CloseTrigger asChild>
              <CloseButton size="sm" />
            </Dialog.CloseTrigger>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  );
};

export default memo(AddToCart);
