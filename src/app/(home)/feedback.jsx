import { SectionTitle } from '@/components/common';
import { Image } from '@/components/control';
import { PX_ALL } from '@/utils/helper-server';
import { Flex, Text } from '@chakra-ui/react';
import { FaStar } from 'react-icons/fa';

const FEEDBACK_LIST = [
  {
    user: 'Nguyễn Văn A',
    position: 'Khách hàng',
    avatar: '/images/user-feedback.png',
    content:
      'Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget'
  },
  {
    user: 'Nguyễn Văn B',
    position: 'Khách hàng',
    avatar: '/images/user-feedback.png',
    content:
      'Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget'
  },
  {
    user: 'Nguyễn Văn C',
    position: 'Khách hàng',
    avatar: '/images/user-feedback.png',
    content:
      'Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget'
  }
];

const Feedback = () => {
  return (
    <Flex
      px={PX_ALL}
      py="80px"
      direction="column"
      bgGradient="to-b"
      gradientFrom="#FFF"
      gradientVia="#f5f5f5"
      gradientTo="#f1f1f1"
      pos="relative"
    >
      <SectionTitle title="Đánh giá từ khách hàng" />

      <Flex gap="24px" mt="40px" direction={{ base: 'column', lg: 'row' }}>
        {FEEDBACK_LIST.map((item) => {
          const { user, position, avatar, content } = item;
          return (
            <Flex key={user} flex={1 / 3} bgColor="#FFF" direction="column" borderRadius={8} p="24px">
              <Image src="/icons/feedback.png" w="32px" h="26px" />
              <Text mt="16px" fontSize={14} color="#4D4D4D">
                {content}
              </Text>
              <Flex mt="16px" align="center" justify="space-between">
                <Flex align="center" flex={1} gap="12px">
                  <Image src={avatar} w="56px" h="56px" />
                  <Flex direction="column" flex={1}>
                    <Text fontSize={16} color="#1a1a1a" fontWeight={600}>
                      {user}
                    </Text>
                    <Text color="#999999" fontSize={14}>
                      {position}
                    </Text>
                  </Flex>
                </Flex>

                <Flex mt="6px" align="center" gap="2px">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <FaStar key={star} size={14} color="#FF8A00" />
                  ))}
                </Flex>
              </Flex>
            </Flex>
          );
        })}
      </Flex>

      <Image src="/images/decor-8.png" w="94px" h="192px" pos="absolute" top="60px" right="40px" />
      <Image src="/images/decor-9.png" w="100px" h="65px" pos="absolute" bottom="-20px" left="170px" zIndex={5} />
    </Flex>
  );
};

export default Feedback;
