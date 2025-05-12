import { Box, Text } from '@chakra-ui/react';

const Review = () => {
  return (
    <Box mt="48px">
      <Text as="h1" fontSize={24} fontWeight={600}>
        Đánh giá sản phẩm
      </Text>

      <Box mt="24px">
        <Text fontSize={15} fontWeight={300} color="#1a1a1a">
          Chưa có đánh giá nào!
        </Text>
      </Box>
    </Box>
  );
};

export default Review;
