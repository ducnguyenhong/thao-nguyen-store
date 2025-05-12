'use client';

import { Image } from '@/components/control';
import { AspectRatio, Flex } from '@chakra-ui/react';
import { memo, useState } from 'react';

const ImageSlide = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      <Flex direction="column" w="80px" gap="12px">
        {[1, 2, 3, 4].map((item, index) => {
          const isActive = index === activeIndex;
          return (
            <Image
              src="/images/product.png"
              key={index}
              w="80px"
              h="80px"
              borderRadius={4}
              cursor="pointer"
              border="1px solid"
              borderColor={isActive ? '#00B207' : 'transparent'}
              onClick={() => setActiveIndex(index)}
            />
          );
        })}
      </Flex>
      <Flex flex={1}>
        <AspectRatio ratio={4 / 3} w="full">
          <Image src="/images/product.png" w="full" h="full" />
        </AspectRatio>
      </Flex>
    </>
  );
};

export default memo(ImageSlide);
