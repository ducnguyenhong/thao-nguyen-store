import { Image } from '@/components/control';
import { PX_ALL } from '@/utils/helper-server';
import { Flex } from '@chakra-ui/react';

const Customer = () => {
  return (
    <Flex px={PX_ALL} py="80px" justify="space-between" align="center">
      {[1, 2, 3, 4, 5, 6].map((item) => {
        return <Image src="/images/customer.png" key={item} w="82px" h="32px" />;
      })}
    </Flex>
  );
};

export default Customer;
