import { NewsItem, SectionTitle } from '@/components/common';
import { PX_ALL } from '@/utils/helper-server';
import { Box, Flex, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { IoArrowForwardOutline } from 'react-icons/io5';

const News = () => {
  return (
    <Flex
      px={PX_ALL}
      py="80px"
      gap="40px"
      direction="column"
      bgImage="url(/images/bg-news.png)"
      bgSize="cover"
      bgRepeat="no-repeat"
      bgPos="center"
      pos="relative"
    >
      <Box bgColor="#80808033" w="full" h="full" pos="absolute" top={0} left={0} />
      <SectionTitle title="Tin tức mới" textAlign="center" />

      <Flex w="full" gap="24px" zIndex={1} direction={{ base: 'column', lg: 'row' }}>
        {[1, 2, 3, 4].map((item) => {
          return (
            <Flex flex={1 / 4} key={item}>
              <NewsItem />
            </Flex>
          );
        })}
      </Flex>

      <Flex justify="center" zIndex={1}>
        <Link href="/" style={{ display: 'block', width: 'fit-content' }}>
          <Flex align="center" gap="4px">
            <Text fontSize={16} fontWeight={500} color="#00B207">
              Xem thêm
            </Text>
            <IoArrowForwardOutline size={18} color="#00B207" />
          </Flex>
        </Link>
      </Flex>
    </Flex>
  );
};

export default News;
