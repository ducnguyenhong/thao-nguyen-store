import { formatCurrency } from '@/utils/helper-server';
import { AspectRatio, Box, Button, Flex, Icon, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { memo } from 'react';
import { FaStar } from 'react-icons/fa';
import { FaCartPlus } from 'react-icons/fa6';
import { Image } from '../control';

const ProductItem = () => {
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
      <AspectRatio ratio={1 / 1}>
        <Link href="/">
          <Image h="100%" w="100%" src="/images/product.png" alt="product" />
        </Link>
      </AspectRatio>
      <Flex align="center" gap="16px" p="16px" w="full">
        <Flex direction="column" flex={1}>
          <Link href="/" style={{ display: 'block' }}>
            <Text
              fontSize={16}
              color="#4D4D4D"
              fontWeight={400}
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
      </Flex>
    </Box>
  );
};

export default memo(ProductItem);
