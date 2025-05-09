import { Image } from '@/components/control';
import { Flex, Text } from '@chakra-ui/react';
import Link from 'next/link';

const Logo = () => {
  return (
    <Link href="/">
      <Flex align="center" gap="6px">
        <Image src="/images/logo.webp" h="32px" w="32px" />
        <Text fontSize={20} fontWeight={600} color="#1a1a1a" letterSpacing="-0.5px">
          Thảo Nguyên Store
        </Text>
      </Flex>
    </Link>
  );
};

export default Logo;
