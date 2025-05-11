import { NewsItem } from '@/components/common';
import { Grid, GridItem } from '@chakra-ui/react';

const NewsList = () => {
  return (
    <Grid w="full" direction="column" gap="24px" templateColumns="repeat(3, 1fr)">
      {[1, 2, 3, 4, 5, 6].map((item) => {
        return (
          <GridItem key={item}>
            <NewsItem />
          </GridItem>
        );
      })}
    </Grid>
  );
};

export default NewsList;
