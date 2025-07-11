import { Breadcrumb } from '@/components/common';
import { PX_ALL } from '@/utils/helper-server';
import { Flex } from '@chakra-ui/react';
import FilterCategory from './filter-category';
import FilterSearch from './filter-search';
import NewsList from './news-list';

const NewsPage = () => {
  return (
    <div>
      <Breadcrumb data={[{ title: 'Tin tức', href: '/tin-tuc', isActive: true }]} />

      <Flex
        mt={{ base: '32px', lg: '40px' }}
        pb={{ base: '32px', lg: '80px' }}
        gap="24px"
        px={PX_ALL}
        direction={{ base: 'column', lg: 'row' }}
      >
        <Flex flex={1 / 4} direction="column" gap={{ base: '24px', lg: '32px' }}>
          <FilterSearch />
          <Flex w="full" h="1px" bgColor="#f2f2f2" />
          <FilterCategory />
        </Flex>
        <Flex flex={3 / 4}>
          <NewsList />
        </Flex>
      </Flex>
    </div>
  );
};

export default NewsPage;
