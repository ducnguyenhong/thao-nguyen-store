import { Image } from '@/components/control';
import { CATEGORY_LIST } from '@/utils/data';
import { Box, Flex, Grid, GridItem, Icon, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { IoChevronDownOutline } from 'react-icons/io5';

const MENU_LIST = [
  {
    title: 'Trang chủ',
    href: '/'
  },
  {
    title: 'Danh mục',
    href: '/danh-muc',
    children: CATEGORY_LIST
  },
  {
    title: 'Tin tức',
    href: '/tin-tuc'
  },
  {
    title: 'Giới thiệu',
    href: '/gioi-thieu'
  }
];

const Menu = () => {
  return (
    <Flex as="ul" align="center" gap="32px" h="full">
      {MENU_LIST.map((item, index) => {
        const { title, href, children } = item;
        if (children) {
          return (
            <Box className="group" pos="relative" h="full">
              <Flex align="center" gap="4px" userSelect="none" cursor="pointer" h="full">
                <Text fontSize={14} color="#1a1a1a" transitionDuration="200ms" _groupHover={{ color: '#00B207' }}>
                  {title}
                </Text>
                <Icon transitionDuration="200ms" color="#002603" _groupHover={{ color: '#00B207' }}>
                  <IoChevronDownOutline size={14} style={{ marginTop: '3px' }} />
                </Icon>
              </Flex>

              <Grid
                pos="absolute"
                top="74px"
                left={0}
                zIndex={200}
                templateColumns="repeat(2, 1fr)"
                borderRadius={6}
                columnGap="8px"
                bgColor="#FFF"
                boxShadow="lg"
                p="12px"
                w="380px"
                visibility="hidden"
                opacity={0}
                transitionDuration="200ms"
                _groupHover={{ opacity: 1, visibility: 'visible' }}
              >
                {children.map((c) => (
                  <GridItem
                    key={c.id}
                    p="8px"
                    borderRadius={6}
                    transitionDuration="200ms"
                    _hover={{ bgColor: '#f2f2f2' }}
                  >
                    <Link href={c.id} style={{ display: 'block' }}>
                      <Flex align="center" gap="16px">
                        <Image src={c.icon} w="32px" h="32px" />
                        <Flex flex={1} direction="column">
                          <Text fontSize={15} color="#1a1a1a" fontWeight={500}>
                            {c.title}
                          </Text>
                          <Text fontSize={13} color="#808080">
                            {c.numOfProduct} sản phẩm
                          </Text>
                        </Flex>
                      </Flex>
                    </Link>
                  </GridItem>
                ))}
              </Grid>
            </Box>
          );
        }

        return (
          <Flex as="li" key={index}>
            <Link href={href}>
              <Text fontSize={14} color="#1a1a1a">
                {title}
              </Text>
            </Link>
          </Flex>
        );
      })}
    </Flex>
  );
};

export default Menu;
