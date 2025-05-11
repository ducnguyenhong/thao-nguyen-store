'use client';

import { CATEGORY_LIST } from '@/utils/data';
import { Accordion, Flex, RadioGroup, Text } from '@chakra-ui/react';
import { useState } from 'react';

const FilterCategory = () => {
  const [value, setValue] = useState(null);

  return (
    <Flex direction="column" gap="8px">
      <Accordion.Root collapsible defaultValue={['1']}>
        <Accordion.Item value="1" border="none">
          <Accordion.ItemTrigger>
            <Text fontSize={20} fontWeight={500} color="#1A1A1A" flex={1}>
              Danh mục tin tức
            </Text>
            <Accordion.ItemIndicator color="#1a1a1a" fontSize={18} />
          </Accordion.ItemTrigger>
          <Accordion.ItemContent>
            <Accordion.ItemBody pt="12px">
              <RadioGroup.Root
                variant="outline"
                colorPalette="green"
                value={value}
                onValueChange={(e) => setValue(e.value)}
              >
                <Flex direction="column">
                  {CATEGORY_LIST.map((item) => {
                    const { id, title, numOfProduct } = item;
                    return (
                      <RadioGroup.Item key={id} value={id} py="8px">
                        <RadioGroup.ItemHiddenInput />
                        <RadioGroup.ItemIndicator />
                        <RadioGroup.ItemText fontSize={14} fontWeight={400}>
                          {title}{' '}
                          <Text as="span" pl="3px" fontSize={14} fontWeight={300} color="#808080">
                            ({numOfProduct})
                          </Text>
                        </RadioGroup.ItemText>
                      </RadioGroup.Item>
                    );
                  })}
                </Flex>
              </RadioGroup.Root>
            </Accordion.ItemBody>
          </Accordion.ItemContent>
        </Accordion.Item>
      </Accordion.Root>
    </Flex>
  );
};

export default FilterCategory;
