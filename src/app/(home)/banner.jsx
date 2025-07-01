'use client';

import { Image } from '@/components/control';
import { AspectRatio, Button, Flex, Text } from '@chakra-ui/react';
import { IoArrowForwardOutline } from 'react-icons/io5';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const Banner = () => {
  return (
    <Flex
      h={{ base: 'auto', lg: '700px' }}
      w="full"
      bgImage="url(/images/bg-banner.webp)"
      bgSize="cover"
      bgRepeat="no-repeat"
      bgPos="center"
      align="center"
      px={{ base: '0px', md: '24px', lg: '180px', xl: '200px', '2xl': '280px' }}
      pos="relative"
      pt={{ base: '56px', lg: 0 }}
      pb={{ base: '72px', lg: 0 }}
      className="home-banner"
    >
      <Swiper pagination autoplay={{ delay: 5000 }} loop modules={[Pagination, Autoplay]}>
        {[1, 2, 3].map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <Flex
                gap={{ base: '24px', lg: '44px' }}
                align="center"
                pb="24px"
                direction={{ base: 'column', lg: 'row' }}
              >
                <Flex flex={{ base: 'inherit', lg: 4 / 7 }} w="full">
                  <AspectRatio ratio={742 / 498} w={{ base: '80%', lg: 'full' }} mx={{ base: 'auto', lg: 'inherit' }}>
                    <Image src="/images/vegetable.png" w="full" h="full" />
                  </AspectRatio>
                </Flex>
                <Flex flex={{ base: 'inherit', lg: 3 / 7 }} direction="column">
                  <Text
                    color="#00B207"
                    fontSize={14}
                    textTransform="uppercase"
                    textAlign={{ base: 'center', lg: 'left' }}
                  >
                    Chào mừng đến với Thảo Nguyên Store
                  </Text>
                  <Text
                    as="h1"
                    mt="12px"
                    fontSize={{ base: 28, lg: 64 }}
                    fontWeight={600}
                    lineHeight={{ base: '40px', lg: '76px' }}
                    textAlign={{ base: 'center', lg: 'left' }}
                  >
                    Rau sạch, đồ xịn, thời trang đẹp
                  </Text>
                  <Text fontSize={14} color="#808080" mt="16px" textAlign={{ base: 'center', lg: 'left' }}>
                    Miễn phí vận chuyển trong khu vực bán kính 5 km
                  </Text>
                  <Button
                    mt="28px"
                    mx={{ base: 'auto', lg: 'inherit' }}
                    bgColor="#00B207"
                    color="#FFF"
                    borderRadius="full"
                    w="190px"
                    h="50px"
                    fontSize={15}
                  >
                    Khám phá ngay
                    <IoArrowForwardOutline size={18} color="#FFF" />
                  </Button>
                </Flex>
              </Flex>
            </SwiperSlide>
          );
        })}
      </Swiper>

      <Image src="/images/decor-11.webp" w="85px" h="80px" pos="absolute" top="0px" left="0px" opacity={0.9} />
    </Flex>
  );
};

export default Banner;
