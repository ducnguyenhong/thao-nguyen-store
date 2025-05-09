import { Image } from '@/components/control';
import { PX_ALL } from '@/utils/helper-server';
import { AspectRatio, Box, Flex, Text } from '@chakra-ui/react';
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
      <Text textAlign="center" as="h1" fontSize={28} fontWeight={700} color="#1A1A1A" zIndex={1}>
        Tin tức mới
      </Text>

      <Flex w="full" gap="24px" zIndex={1}>
        {[1, 2, 3].map((item) => {
          return (
            <Flex key={item} flex={1 / 3} borderRadius={8} overflow="hidden" direction="column" className="group">
              <Link href="/" style={{ display: 'block', width: '100%' }}>
                <AspectRatio ratio={4 / 3} w="full">
                  <Image src="/images/news.png" w="full" h="full" />
                </AspectRatio>
              </Link>

              <Flex direction="column" gap="12px" p="24px" bgColor="#FFF">
                <Link href="/" style={{ display: 'block' }}>
                  <Text
                    lineClamp={2}
                    fontSize={18}
                    fontWeight={600}
                    lineHeight="25px"
                    color="#1a1a1a"
                    transitionDuration="250ms"
                    _groupHover={{ color: '#2C742F' }}
                  >
                    Curabitur porttitor orci eget neque accumsan venenatis. Nunc fermentum.
                  </Text>
                </Link>

                <Text lineClamp={2} fontSize={16} lineHeight="23px" color="#808080">
                  Curabitur porttitor orci eget neque accumsan venenatis. Nunc fermentum. Curabitur porttitor orci eget
                  neque accumsan venenatis. Nunc fermentum.
                </Text>

                <Link href="/" style={{ display: 'block' }}>
                  <Flex align="center" gap="4px">
                    <Text fontSize={16} fontWeight={500} color="#00B207">
                      Đọc thêm
                    </Text>
                    <IoArrowForwardOutline size={18} color="#00B207" />
                  </Flex>
                </Link>
              </Flex>
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
