import { Image } from '@/components/control';
import { Tooltip } from '@/components/ui/tooltip';
import { formatCurrency } from '@/utils/helper-server';
import { AspectRatio, Box, Flex, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { memo } from 'react';
import { FaStar } from 'react-icons/fa';
import { LuHeart } from 'react-icons/lu';
import AddToCart from './add-to-cart';

const ProductItem = () => {
  const href = '/san-pham/abc.1';

  return (
    <Box
      className="group"
      border="1px solid #e6e6e6"
      borderRadius={8}
      overflow="hidden"
      transitionDuration="250ms"
      pos="relative"
      _hover={{ borderColor: '#2C742F', boxShadow: '0px 0px 15px -3px #20b526ba' }}
    >
      <Text
        fontSize={14}
        color="#FFF"
        bgColor="#EA4B48"
        px="8px"
        py="2px"
        borderRadius={6}
        pos="absolute"
        top="16px"
        left="16px"
        userSelect="none"
        zIndex={5}
      >
        - 50%
      </Text>
      <Flex
        w="40px"
        h="40px"
        align="center"
        justify="center"
        borderRadius="full"
        bgColor="#FFF"
        border="1px solid #f2f2f2"
        pos="absolute"
        top="16px"
        right="16px"
        opacity={0}
        visibility="hidden"
        zIndex={5}
        cursor="pointer"
        transitionDuration="250ms"
        _hover={{ borderColor: '#00b207' }}
        _groupHover={{ opacity: 1, visibility: 'visible' }}
      >
        <Tooltip
          content={
            <Text px="4px" fontSize={14} py="2px">
              Thêm vào yêu thích
            </Text>
          }
          openDelay={0}
          closeDelay={0}
          positioning={{ offset: { mainAxis: 14, crossAxis: 0 } }}
        >
          <LuHeart size={21} color="#002603" />
        </Tooltip>
      </Flex>
      <AspectRatio ratio={4 / 3} py="16px">
        <Link href={href}>
          <Image h="100%" w="100%" src="/images/product.png" alt="product" />
        </Link>
      </AspectRatio>
      <Flex align="center" gap="16px" p="16px" w="full">
        <Flex direction="column" flex={1}>
          <Link href={href} style={{ display: 'block' }}>
            <Text
              fontSize={16}
              color="#4D4D4D"
              fontWeight={400}
              lineHeight="22px"
              transitionDuration="250ms"
              _groupHover={{ color: '#008004' }}
            >
              Táo đá xanh Úc 1kg
            </Text>
          </Link>
          <Text mt="4px" fontSize={16} fontWeight={700}>
            {formatCurrency(100000)}
          </Text>
          <Flex mt="6px" align="center" gap="2px">
            {[1, 2, 3, 4, 5].map((star) => (
              <FaStar key={star} size={14} color="#FF8A00" />
            ))}
          </Flex>
        </Flex>

        <AddToCart />
      </Flex>
    </Box>
  );
};

export default memo(ProductItem);
