import { Tooltip } from '@/components/ui/tooltip';
import { formatCurrency } from '@/utils/helper-server';
import { Button, Dialog, Flex, Icon, Text } from '@chakra-ui/react';
import { memo } from 'react';
import { FaFacebookF, FaInstagram, FaStar } from 'react-icons/fa';
import { FaCartPlus } from 'react-icons/fa6';
import { IoMdLink } from 'react-icons/io';
import { LuHeart } from 'react-icons/lu';
import Counter from './counter';
import ImageSlide from './image-slide';

const ProductInfo = (props) => {
  const { isDetail } = props;

  return (
    <Flex gap="24px" align="center">
      <Flex flex={1 / 2} gap="12px" align="center">
        <ImageSlide />
      </Flex>
      <Flex flex={1 / 2} direction="column">
        <Flex direction="column">
          <Text
            fontSize={28}
            color="#1a1a1a"
            fontWeight={600}
            lineHeight="34px"
            transitionDuration="250ms"
            _groupHover={{ color: '#008004' }}
          >
            Táo đá xanh Úc 1kg
          </Text>
          <Text mt="16px" color="#00B207" fontSize={20} fontWeight={500}>
            {formatCurrency(100000)}
          </Text>
          <Flex mt="16px" align="center" gap="4px">
            {[1, 2, 3, 4, 5].map((star) => (
              <FaStar key={star} size={16} color="#FF8A00" />
            ))}
          </Flex>
        </Flex>

        <Flex mt="16px" align="center" justify="space-between">
          <Text fontSize={14} fontWeight={600}>
            Danh mục:{' '}
            <Text as="span" fontSize={14} fontWeight={300} color="#808080">
              Rau xanh
            </Text>
          </Text>

          <Flex align="center" justify="flex-end" gap="6px">
            <Text fontSize={14} mr="6px">
              Chia sẻ:
            </Text>
            <Flex
              w="40px"
              h="40px"
              align="center"
              justify="center"
              bgColor="#FFF"
              cursor="pointer"
              borderRadius="full"
              border="1px solid #e5e5e5"
              className="group"
              transitionDuration="200ms"
              _hover={{ bgColor: '#00B207' }}
            >
              <Icon color="#1a1a1a" transitionDuration="200ms" _groupHover={{ color: '#FFF' }}>
                <FaFacebookF size={16} />
              </Icon>
            </Flex>

            <Flex
              w="40px"
              h="40px"
              align="center"
              justify="center"
              bgColor="#FFF"
              cursor="pointer"
              borderRadius="full"
              border="1px solid #e5e5e5"
              className="group"
              transitionDuration="200ms"
              _hover={{ bgColor: '#00B207' }}
            >
              <Icon color="#1a1a1a" transitionDuration="200ms" _groupHover={{ color: '#FFF' }}>
                <FaInstagram size={18} />
              </Icon>
            </Flex>

            <Flex
              w="40px"
              h="40px"
              align="center"
              justify="center"
              bgColor="#FFF"
              cursor="pointer"
              border="1px solid #e5e5e5"
              borderRadius="full"
              className="group"
              transitionDuration="200ms"
              _hover={{ bgColor: '#00B207' }}
            >
              <Icon color="#1a1a1a" transitionDuration="200ms" _groupHover={{ color: '#FFF' }}>
                <IoMdLink size={22} />
              </Icon>
            </Flex>
          </Flex>
        </Flex>

        <Text mt="16px" color="#808080" fontSize={14} fontWeight={300}>
          Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla nibh diam,
          blandit vel consequat nec, ultrices et ipsum. Nulla varius magna a consequat pulvinar. nibh diam, blandit vel
          consequat nec, ultrices et ipsum. Nulla varius magna a consequat pulvinar.
        </Text>

        <Flex my="24px" bgColor="#e6e6e6" h="1px" w="full" />

        <Flex align="center" h="50px" gap="12px">
          <Counter />

          <Flex flex={1} h="full">
            {isDetail ? (
              <Button bgColor="#00B207" borderRadius="full" w="full" h="full" fontSize={16} mr="2px" color="#FFF">
                Thêm vào giỏ hàng
                <FaCartPlus color="#FFF" size={16} />
              </Button>
            ) : (
              <Dialog.ActionTrigger asChild>
                <Button bgColor="#00B207" borderRadius="full" w="full" h="full" fontSize={16} mr="2px" color="#FFF">
                  Thêm vào giỏ hàng
                  <FaCartPlus color="#FFF" size={16} />
                </Button>
              </Dialog.ActionTrigger>
            )}
          </Flex>

          <Flex
            w="50px"
            h="50px"
            align="center"
            justify="center"
            borderRadius="full"
            bgColor="#e9f8ea"
            border="1px solid #f2f2f2"
            cursor="pointer"
            transitionDuration="250ms"
            _hover={{ borderColor: '#00b207' }}
            _groupHover={{ opacity: 1, visibility: 'visible' }}
          >
            <Tooltip
              content={
                <Text px="4px" fontSize={14} py="2px">
                  Thêm vào yêu thích
                </Text>
              }
              openDelay={0}
              closeDelay={0}
              positioning={{ offset: { mainAxis: 20, crossAxis: 0 } }}
            >
              <LuHeart size={21} color="#002603" />
            </Tooltip>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default memo(ProductInfo);
