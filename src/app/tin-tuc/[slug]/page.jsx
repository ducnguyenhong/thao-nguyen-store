import { Breadcrumb } from '@/components/common';
import { PX_ALL } from '@/utils/helper-server';
import { Box } from '@chakra-ui/react';

const NewsDetail = () => {
  return (
    <Box bgColor="#FFF">
      <Breadcrumb
        data={[
          { title: 'Tin tức', href: '/tin-tuc' },
          { title: 'Chi tiết tin tức', href: '/tin-tuc/a.1', isActive: true }
        ]}
      />
      <Box px={PX_ALL} pt="16px" pb="80px">
        a
      </Box>
    </Box>
  );
};

export default NewsDetail;
