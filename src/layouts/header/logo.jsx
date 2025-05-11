import { Image } from '@/components/control';
import { Flex, Text } from '@chakra-ui/react';
import Link from 'next/link';

const Logo = () => {
  return (
    <Link href="/">
      <Flex align="center" gap="6px">
        <Image src="/images/logo.webp" h="32px" w="32px" />
        <Text className="text-logo">Thảo Nguyên Store</Text>
      </Flex>
    </Link>
  );
};

export default Logo;
