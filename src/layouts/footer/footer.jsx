import { Image } from '@/components/control';
import { PX_ALL } from '@/utils/helper-server';
import { Box, Flex, Text } from '@chakra-ui/react';
import Link from 'next/link';
import Socials from './socials';

const ABOUT_US = [
  {
    title: 'Giới thiệu',
    href: '/gioi-thieu'
  },
  {
    title: 'Câu hỏi thường gặp',
    href: '/cau-hoi-thuong-gap'
  },
  {
    title: 'Điều khoản sử dụng',
    href: '/dieu-khoan-su-dung'
  }
];

const Footer = () => {
  return (
    <Flex as="footer" bgColor="#191919" w="full" direction="column">
      <Flex
        pt="80px"
        pb="60px"
        px={PX_ALL}
        bgImage="url(/images/bg-footer.webp)"
        bgSize="cover"
        bgRepeat="no-repeat"
        bgPos="center"
        h="full"
        w="full"
        gap="120px"
        direction={{ base: 'column', lg: 'row' }}
      >
        <Flex direction="column" flex={2 / 5} gap="16px">
          <Flex align="center" gap="6px">
            <Image src="/images/logo.webp" h="38px" w="38px" />
            <Text fontSize={22} fontWeight={600} color="#FFF">
              Thảo Nguyên Store
            </Text>
          </Flex>
          <Text color="#999">
            Morbi cursus porttitor enim lobortis molestie. Duis gravida turpis dui, eget bibendum mag
          </Text>
          <Socials />
        </Flex>

        <Flex flex={1 / 5} direction="column">
          <Text fontSize={16} fontWeight={600} color="#FFF">
            Về chúng tôi
          </Text>
          <Box my="16px" h="1px" w="24px" bgColor="#00B207" />
          <Flex direction="column" gap="12px">
            {ABOUT_US.map((item) => {
              const { href, title } = item;
              return (
                <Link href={href} key={href} style={{ display: 'block', width: 'fit-content' }}>
                  <Text fontSize={14} color="#999999">
                    {title}
                  </Text>
                </Link>
              );
            })}
          </Flex>
        </Flex>

        <Flex flex={1 / 5} direction="column">
          <Text fontSize={16} fontWeight={600} color="#FFF">
            Về chúng tôi
          </Text>
          <Box my="16px" h="1px" w="24px" bgColor="#00B207" />
          <Flex direction="column" gap="12px">
            {ABOUT_US.map((item) => {
              const { href, title } = item;
              return (
                <Link href={href} key={href} style={{ display: 'block', width: 'fit-content' }}>
                  <Text fontSize={14} color="#999999">
                    {title}
                  </Text>
                </Link>
              );
            })}
          </Flex>
        </Flex>

        <Flex flex={1 / 5} direction="column">
          <Text fontSize={16} fontWeight={600} color="#FFF">
            Về chúng tôi
          </Text>
          <Box my="16px" h="1px" w="24px" bgColor="#00B207" />
          <Flex direction="column" gap="12px">
            {ABOUT_US.map((item) => {
              const { href, title } = item;
              return (
                <Link href={href} key={href} style={{ display: 'block', width: 'fit-content' }}>
                  <Text fontSize={14} color="#999999">
                    {title}
                  </Text>
                </Link>
              );
            })}
          </Flex>
        </Flex>
      </Flex>

      <Flex borderTop="1px solid #333333" py="24px" px={PX_ALL} align="center" justify="space-between">
        <Text color="#808080" fontSize={16}>
          © 2025 - Bản quyền thuộc về Thảo Nguyên Store
        </Text>

        <Flex align="center" gap="8px">
          <Flex
            title="Chuyển khoản"
            h="34px"
            w="40px"
            borderRadius={6}
            border="1px solid #333"
            align="center"
            justify="center"
          >
            <Image src="/icons/card.png" h="22px" w="22px" />
          </Flex>

          <Flex
            title="Ship COD"
            h="34px"
            w="40px"
            borderRadius={6}
            border="1px solid #333"
            align="center"
            justify="center"
          >
            <Image src="/icons/cod.png" h="32px" w="32px" />
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Footer;
