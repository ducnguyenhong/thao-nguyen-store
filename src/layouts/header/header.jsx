import { PX_ALL } from '@/utils/helper-server';
import { Flex } from '@chakra-ui/react';
import Logo from './logo';
import Menu from './menu';
import RightNav from './right-nav';

const Header = () => {
  return (
    <Flex
      as="header"
      h="70px"
      px={PX_ALL}
      bgColor="#FFF"
      align="center"
      justify="space-between"
      boxShadow="xs"
      pos="sticky"
      top={0}
      zIndex={100}
    >
      <Flex flex={3 / 8} h="full" display={{ base: 'none', lg: 'flex' }}>
        <Menu />
      </Flex>
      <Flex flex={{ base: 'inherit', lg: 2 / 8 }} justify="center">
        <Logo />
      </Flex>
      <Flex flex={3 / 8} justify="flex-end" display={{ base: 'none', lg: 'flex' }}>
        <RightNav />
      </Flex>
    </Flex>
  );
};

export default Header;
