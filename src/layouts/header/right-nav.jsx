import { Flex, Link, Text } from '@chakra-ui/react';
import { LuHeart, LuSearch, LuShoppingCart } from 'react-icons/lu';
import { MdOutlinePhone } from 'react-icons/md';

const RightNav = () => {
  return (
    <Flex align="center" gap="40px">
      <Link href="tel:0888504540" display="flex" alignItems="center" justifyContent="center" gap="6px">
        <MdOutlinePhone size={21} color="#002603" />
        <Text>0888.504.540</Text>
      </Link>

      <Flex align="center" gap="20px">
        <LuSearch size={22} color="#002603" />
        <LuHeart size={21} color="#002603" />
        <LuShoppingCart size={20} color="#002603" />
      </Flex>
    </Flex>
  );
};

export default RightNav;
