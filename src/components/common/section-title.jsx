import { Text } from '@chakra-ui/react';

const SectionTitle = (props) => {
  const { title, textAlign, isPage } = props;

  return (
    <Text as="h1" fontSize={isPage ? 26 : 34} fontWeight={700} color="#1A1A1A" textAlign={textAlign}>
      {title}
    </Text>
  );
};

export default SectionTitle;
