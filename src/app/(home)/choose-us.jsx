import { Image } from '@/components/control';
import { PX_ALL } from '@/utils/helper-server';
import { AspectRatio, Button, Flex, Text } from '@chakra-ui/react';
import { FaCircleCheck } from 'react-icons/fa6';
import { IoArrowForwardOutline } from 'react-icons/io5';

const ChooseUs = () => {
  const CONTENT_LIST = [
    {
      title: 'Healthy & natural food for lovers of healthy food.',
      content:
        'Ut quis tempus erat. Phasellus euismod bibendum magna non tristique. Pellentesque semper vestibulum elit sed condimentum. Nunc pretium fermentum interdum. '
    },
    {
      title: 'Healthy & natural food for lovers of healthy food.',
      content:
        'Ut quis tempus erat. Phasellus euismod bibendum magna non tristique. Pellentesque semper vestibulum elit sed condimentum. Nunc pretium fermentum interdum. '
    }
  ];

  return (
    <Flex px={PX_ALL} gap="40px" py="80px" align="center" pos="relative">
      <Flex flex={1} gap="24px">
        <Flex flex={2 / 5} pos="relative">
          <AspectRatio ratio={276 / 400} w="full" h="90%" borderRadius={8} overflow="hidden">
            <Image src="/images/choose-us-2.png" w="full" h="auto" />
          </AspectRatio>
          <Image src="/images/decor-4.png" w="60px" h="88px" pos="absolute" bottom="-5px" left="-45px" />
        </Flex>
        <Flex flex={3 / 5}>
          <AspectRatio ratio={444 / 457} w="full" borderRadius={8} overflow="hidden">
            <Image src="/images/choose-us-1.png" w="full" h="auto" />
          </AspectRatio>
        </Flex>
      </Flex>

      <Flex flex={1} direction="column" gap="26px">
        <Text as="h1" fontSize={28} fontWeight={700} color="#1A1A1A">
          100% nguyên liệu thiên nhiên
        </Text>
        {CONTENT_LIST.map((item, index) => {
          const { title, content } = item;
          return (
            <Flex gap="12px" key={index}>
              <FaCircleCheck size={20} color="#00B207" />

              <Flex direction="column" flex={1} mt="-4px">
                <Text fontSize={18} fontWeight={600} color="#1A1A1A">
                  {title}
                </Text>
                <Text mt="4px" fontSize={14} color="#808080" lineHeight="20px">
                  {content}
                </Text>
              </Flex>
            </Flex>
          );
        })}
        <Button bgColor="#00B207" color="#FFF" borderRadius="full" w="190px" h="50px" fontSize={15}>
          Khám phá ngay
          <IoArrowForwardOutline size={18} color="#FFF" />
        </Button>
      </Flex>

      <Image src="/images/decor-2.png" w="140px" h="286px" pos="absolute" top="105px" right="36px" />
      <Image src="/images/decor-3.png" w="240px" h="260px" pos="absolute" top="24px" left="0px" />
    </Flex>
  );
};

export default ChooseUs;
