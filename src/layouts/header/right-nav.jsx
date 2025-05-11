import { Tooltip } from '@/components/ui/tooltip';
import { Box, Link as ChakraLink, Flex, Icon, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { LuHeart, LuShoppingCart } from 'react-icons/lu';
import { MdOutlinePhone } from 'react-icons/md';
import Search from './search';

const RightNav = () => {
  return (
    <Flex align="center" gap="40px">
      <ChakraLink href="tel:0888504540" display="flex" alignItems="center" justifyContent="center" gap="6px">
        <MdOutlinePhone size={19} color="#002603" />
        <Text fontSize={15} color="#002603" mt="2px">
          0888.504.540
        </Text>
      </ChakraLink>

      <Flex align="center" gap="20px">
        <Search />

        <Link href="/san-pham-yeu-thich" style={{ display: 'block' }}>
          <Box cursor="pointer" className="group">
            <Tooltip
              showArrow
              content={
                <Text px="4px" fontSize={14} py="2px">
                  Sản phẩm đã yêu thích
                </Text>
              }
              openDelay={0}
              closeDelay={0}
              positioning={{ offset: { mainAxis: 16, crossAxis: 0 } }}
            >
              <Icon color="#002603" transitionDuration="200ms" _groupHover={{ color: '#00b207' }}>
                <LuHeart size={21} />
              </Icon>
            </Tooltip>
          </Box>
        </Link>
        <LuShoppingCart size={20} color="#002603" />
      </Flex>
    </Flex>
  );
};

export default RightNav;
