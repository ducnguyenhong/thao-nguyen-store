'use client';

import { Image } from '@/components/control';
import { PX_ALL } from '@/utils/helper-server';
import { AspectRatio, Button, Flex, Text } from '@chakra-ui/react';
import { IoArrowForwardOutline } from 'react-icons/io5';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const Banner = () => {
  return (
    <Flex
      h="700px"
      w="full"
      bgImage="url(/images/bg-banner.webp)"
      bgSize="cover"
      bgRepeat="no-repeat"
      bgPos="center"
      align="center"
      px={PX_ALL}
      className="home-banner"
    >
      <Swiper pagination autoplay loop modules={[Pagination, Autoplay]}>
        {[1, 2, 3].map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <Flex gap="44px" align="center" pb="24px">
                <Flex flex={4 / 7}>
                  <AspectRatio ratio={742 / 498} w="full">
                    <Image src="/images/vegetable.png" w="full" h="full" />
                  </AspectRatio>
                </Flex>
                <Flex flex={3 / 7} direction="column">
                  <Text color="#00B207" fontSize={14} textTransform="uppercase">
                    Chào mừng đến với Thảo Nguyên Store
                  </Text>
                  <Text as="h1" mt="12px" fontSize={64} fontWeight={600} lineHeight="76px">
                    Rau sạch, đồ xịn, thời trang đẹp
                  </Text>
                  <Text fontSize={14} color="#808080" mt="16px">
                    Miễn phí vận chuyển trong khu vực bán kính 5 km
                  </Text>
                  <Button mt="28px" bgColor="#00B207" color="#FFF" borderRadius="full" w="190px" h="50px" fontSize={15}>
                    Khám phá ngay
                    <IoArrowForwardOutline size={18} color="#FFF" />
                  </Button>
                </Flex>
              </Flex>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Flex>
  );
};

export default Banner;
