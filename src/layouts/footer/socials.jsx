import { Flex, Icon } from '@chakra-ui/react';
import Link from 'next/link';
import { FaFacebookF } from 'react-icons/fa';

const SOCIAL_LIST = [
  {
    icon: <FaFacebookF size={18} />,
    href: '/1',
    title: 'Facebook'
  }
];

const Socials = () => {
  return (
    <Flex align="center" gap="8px">
      {SOCIAL_LIST.map((item) => {
        const { icon, href, title } = item;

        return (
          <Link
            href={href}
            key={href}
            target="_blank"
            rel="noopener noreferrer"
            title={title}
            style={{ display: 'block' }}
          >
            <Flex
              align="center"
              justify="center"
              w="40px"
              h="40px"
              borderRadius="full"
              border="1px solid #394e36"
              transitionDuration="250ms"
              _hover={{ bgColor: '#00B207' }}
            >
              <Icon color="#FFF">{icon}</Icon>
            </Flex>
          </Link>
        );
      })}
    </Flex>
  );
};

export default Socials;
