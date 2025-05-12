import { AspectRatio, Flex, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { memo } from 'react';
import { IoArrowForwardOutline } from 'react-icons/io5';
import { Image } from '../control';

const NewsItem = () => {
  const href = '/tin-tuc/abc.1';

  return (
    <Flex
      borderRadius={8}
      overflow="hidden"
      direction="column"
      border="1px solid #e5e5e5"
      className="group"
      transitionDuration="250ms"
      _hover={{ borderColor: '#2C742F', boxShadow: '0px 0px 15px -3px #20b526ba' }}
    >
      <Link href={href} style={{ display: 'block', width: '100%' }}>
        <AspectRatio ratio={4 / 3} w="full">
          <Image src="/images/news.png" w="full" h="full" />
        </AspectRatio>
      </Link>

      <Flex direction="column" gap="12px" p="18px" bgColor="#FFF">
        <Link href={href} style={{ display: 'block' }}>
          <Text
            lineClamp={2}
            fontSize={16}
            fontWeight={600}
            lineHeight="24px"
            color="#1a1a1a"
            transitionDuration="250ms"
            _groupHover={{ color: '#009905' }}
          >
            Curabitur porttitor orci eget neque accumsan venenatis. Nunc fermentum.
          </Text>
        </Link>

        <Text lineClamp={2} fontSize={14} fontWeight={300} lineHeight="22px" color="#808080">
          Curabitur porttitor orci eget neque accumsan venenatis. Nunc fermentum. Curabitur porttitor orci eget neque
          accumsan venenatis. Nunc fermentum.
        </Text>

        <Link href={href} style={{ display: 'block' }}>
          <Flex align="center" gap="4px">
            <Text fontSize={14} fontWeight={500} color="#00B207">
              Đọc thêm
            </Text>
            <IoArrowForwardOutline size={18} color="#00B207" />
          </Flex>
        </Link>
      </Flex>
    </Flex>
  );
};

export default memo(NewsItem);
