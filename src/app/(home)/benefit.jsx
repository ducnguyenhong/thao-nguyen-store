'use client';

import { PX_ALL } from '@/utils/helper-server';
import { Box, Flex, Grid, GridItem, Icon, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { HiOutlineCreditCard } from 'react-icons/hi2';
import { LiaShippingFastSolid } from 'react-icons/lia';
import { PiPackage } from 'react-icons/pi';
import { TfiHeadphoneAlt } from 'react-icons/tfi';

const BENEFIT_LIST = [
  {
    id: 1,
    title: 'Giao hàng toàn quốc',
    description: 'Giao hàng toàn quốc',
    icon: <LiaShippingFastSolid size={31} />
  },
  {
    id: 2,
    title: 'Thanh toán tiện lợi',
    description: 'Nhiều hình thức thanh toán',
    icon: <HiOutlineCreditCard size={31} />
  },
  {
    id: 3,
    title: 'Đổi trả hàng nhanh chóng',
    description: 'Đổi trả hàng trong 7 ngày',
    icon: <PiPackage size={32} />
  },
  {
    id: 4,
    title: 'Hỗ trợ khách hàng 24/7',
    description: 'Hỗ trợ tư vấn miễn phí',
    icon: <TfiHeadphoneAlt size={28} />
  }
];

const Benefit = () => {
  const [activeId, setActiveId] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveId((prev) => (prev >= 4 ? 1 : prev + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Box px={PX_ALL} pt={{ base: '0px', lg: '40px' }}>
      <Grid
        w="full"
        templateColumns={{ base: 'repeat(2, 1fr)', lg: 'repeat(4, 1fr)' }}
        borderBottom={{ base: 'none', lg: '1px solid #e6e6e6' }}
        gap={{ base: '16px', lg: 0 }}
      >
        {BENEFIT_LIST.map((item) => {
          const { title, description, icon, id } = item;
          const isActive = activeId === id;

          return (
            <GridItem
              key={id}
              pb={{ base: '16px', lg: '40px' }}
              borderBottom="2px solid"
              borderColor={isActive ? '#00b207' : 'transparent'}
              transitionDuration="200ms"
            >
              <Flex direction="column" align="center">
                <Flex
                  w="72px"
                  h="72px"
                  align="center"
                  justify="center"
                  borderRadius="full"
                  bgColor={isActive ? '#00b207' : '#d9f4da'}
                  transitionDuration="200ms"
                >
                  <Icon color={isActive ? '#FFF' : '#00B207'} transitionDuration="200ms">
                    {icon}
                  </Icon>
                </Flex>
                <Text mt="16px" color="#1A1A1A" fontSize={{ base: 15, lg: 18 }} fontWeight={600} textAlign="center">
                  {title}
                </Text>
                <Text mt="8px" color="#999999" fontSize={{ base: 13, lg: 14 }} textAlign="center">
                  {description}
                </Text>
              </Flex>
            </GridItem>
          );
        })}
      </Grid>
    </Box>
  );
};

export default Benefit;
