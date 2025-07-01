'use client';

import { Box, CloseButton, Drawer, Flex, Portal } from '@chakra-ui/react';
import { useState } from 'react';
import { FiMenu } from 'react-icons/fi';
import Logo from './logo';
import Menu from './menu';

const MenuMobile = () => {
  const [open, setOpen] = useState(false);

  return (
    <Drawer.Root trapFocus={false} placement="start" open={open} onOpenChange={(e) => setOpen(e.open)}>
      <Drawer.Trigger asChild>
        <Flex>
          <FiMenu color="#4f4f4f" size={27} />
        </Flex>
      </Drawer.Trigger>
      <Portal>
        <Drawer.Backdrop />
        <Drawer.Positioner>
          <Drawer.Content>
            <Drawer.Header borderBottom="1px solid #e6e6e6">
              <Flex align="center" px="16px" h="60px">
                <Logo />
              </Flex>
            </Drawer.Header>
            <Drawer.Body>
              <Box pt="16px">
                <Menu />
              </Box>
            </Drawer.Body>
            <Drawer.Footer>a</Drawer.Footer>
            <Drawer.CloseTrigger asChild>
              <CloseButton size="lg" mt="-4px" color="#828282" />
            </Drawer.CloseTrigger>
          </Drawer.Content>
        </Drawer.Positioner>
      </Portal>
    </Drawer.Root>
  );
};

export default MenuMobile;
