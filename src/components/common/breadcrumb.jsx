import { PX_ALL } from '@/utils/helper-server';
import { Flex, Icon, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { Fragment } from 'react';
import { IoChevronForwardOutline, IoHomeOutline } from 'react-icons/io5';

const Breadcrumb = ({ data }) => {
  return (
    <Flex
      align="center"
      gap="12px"
      bgImage="url(/images/bg-section.png)"
      bgSize="cover"
      bgRepeat="no-repeat"
      bgPos="center"
      px={PX_ALL}
      h="100px"
    >
      <Link href="/">
        <Icon color="#999999" mt="-3px" transitionDuration="200ms" _hover={{ color: '#00b207' }}>
          <IoHomeOutline size={18} />
        </Icon>
      </Link>
      {data.map((item) => {
        const { isActive, title, href } = item;

        return (
          <Fragment key={href}>
            <IoChevronForwardOutline size={16} color="#999999" />
            <Link href={href}>
              <Text
                fontSize={14}
                color={isActive ? '#00b207' : '#999999'}
                transitionDuration="200ms"
                _hover={{ color: '#00b207' }}
              >
                {title}
              </Text>
            </Link>
          </Fragment>
        );
      })}
    </Flex>
  );
};

export default Breadcrumb;
