import { PX_ALL } from '@/utils/helper-server';
import { Button, Flex, Input, Text } from '@chakra-ui/react';
import { FiPhone } from 'react-icons/fi';
import { SlLocationPin } from 'react-icons/sl';
import { TfiHeadphoneAlt } from 'react-icons/tfi';

const Contact = () => {
  return (
    <Flex
      px={PX_ALL}
      py={{ base: '32px', lg: '40px' }}
      gap={{ base: '16px', lg: '24px' }}
      bgColor="#FFF"
      direction={{ base: 'column', lg: 'row' }}
    >
      <Flex
        flex={1 / 4}
        border="1px solid #d2f0d4"
        borderRadius={8}
        p={{ base: '16px', lg: '20px' }}
        direction="column"
      >
        <Flex w="56px" h="56px" align="center" justify="center" borderRadius="full" bgColor="#d9f4da">
          <SlLocationPin size={24} color="#00B207" />
        </Flex>
        <Text mt="16px" color="#1A1A1A" fontSize={16} fontWeight={600} letterSpacing="0.5px" textTransform="uppercase">
          Địa chỉ
        </Text>
        <Text mt="8px" color="#666666" fontSize={16}>
          Khu 3, Bảo Yên, Thanh Thuỷ, Phú Thọ
        </Text>
      </Flex>
      <Flex
        flex={1 / 4}
        border="1px solid #d2f0d4"
        borderRadius={8}
        p={{ base: '16px', lg: '20px' }}
        direction="column"
      >
        <Flex w="56px" h="56px" align="center" justify="center" borderRadius="full" bgColor="#d9f4da">
          <FiPhone size={23} color="#00B207" />
        </Flex>
        <Text mt="16px" color="#1A1A1A" fontSize={16} fontWeight={600} letterSpacing="0.5px" textTransform="uppercase">
          Điện thoại
        </Text>
        <a href="tel:0888504540" style={{ display: 'block', width: 'fit-content' }}>
          <Text mt="8px" color="#00B207" fontSize={24}>
            0888.504.540
          </Text>
        </a>
      </Flex>
      <Flex
        flex={2 / 4}
        border="1px solid #d2f0d4"
        borderRadius={8}
        p={{ base: '16px', lg: '20px' }}
        direction="column"
      >
        <Flex w="56px" h="56px" align="center" justify="center" borderRadius="full" bgColor="#d9f4da">
          <TfiHeadphoneAlt size={23} color="#00B207" />
        </Flex>
        <Text mt="16px" color="#1A1A1A" fontSize={16} fontWeight={600} letterSpacing="0.5px" textTransform="uppercase">
          Hỗ trợ & tư vấn
        </Text>
        <Flex align="center" h="44px" mt="10px">
          <Input
            borderLeftRadius="full"
            px="16px"
            h="full"
            color="#1a1a1a"
            fontSize={14}
            placeholder="Để lại số điện thoại để nhận tư vấn"
            _placeholder={{ color: '#999999' }}
            _focus={{ outline: 'none', borderColor: '#00B207' }}
          />
          <Button borderRightRadius="full" h="full" bgColor="#00B207" px="16px">
            Gửi hỗ trợ
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Contact;
