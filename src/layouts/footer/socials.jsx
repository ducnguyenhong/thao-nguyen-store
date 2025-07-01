import { Flex, Icon, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { FaFacebookF } from 'react-icons/fa';
import { FaTiktok, FaYoutube } from 'react-icons/fa6';

const SOCIAL_LIST = [
  {
    icon: <FaFacebookF size={18} />,
    href: 'https://www.facebook.com/landifyvietnam',
    title: 'Facebook'
  },
  {
    icon: <FaYoutube size={19} />,
    href: 'https://www.youtube.com/@LandifyVietnam',
    title: 'Youtube'
  },
  {
    icon: <FaTiktok size={18} />,
    href: 'https://www.tiktok.com/@landifyvietnam',
    title: 'Tiktok'
  },
  {
    icon: (
      <Text as="span" color="#FFF" fontSize={18}>
        Z
      </Text>
    ),
    href: 'https://zalo.me/0389755202',
    title: 'Zalo'
  }
];

const Socials = ({ dark }) => {
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
              <Icon color={dark ? '#4f4f4f' : '#FFF'}>{icon}</Icon>
            </Flex>
          </Link>
        );
      })}
    </Flex>
  );
};

export default Socials;
