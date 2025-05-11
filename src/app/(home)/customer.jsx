import { Image } from '@/components/control';
import { PX_ALL } from '@/utils/helper-server';
import { Flex } from '@chakra-ui/react';

const Customer = () => {
  return (
    <Flex px={PX_ALL} py="80px" justify="space-between" align="center" pos="relative">
      {[1, 2, 3, 4, 5, 6].map((item) => {
        return <Image src="/images/customer.png" key={item} w="82px" h="32px" />;
      })}

      <Image src="/images/decor-10.png" w="140px" h="140px" pos="absolute" top="10px" right="0px" />
    </Flex>
  );
};

export default Customer;
