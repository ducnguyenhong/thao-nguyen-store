import { Box, CloseButton, Dialog, Icon, Portal } from '@chakra-ui/react';
import { LuSearch } from 'react-icons/lu';

const Search = () => {
  return (
    <Dialog.Root size="xl">
      <Dialog.Trigger asChild>
        <Box cursor="pointer" className="group">
          <Icon color="#002603" transitionDuration="200ms" _groupHover={{ color: '#00b207' }}>
            <LuSearch size={23} />
          </Icon>
        </Box>
      </Dialog.Trigger>
      <Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content mt="48px" p="24px">
            <Dialog.Header>
              <Dialog.Title>Tìm kiếm sản phẩm</Dialog.Title>
            </Dialog.Header>
            <Dialog.Body pt="8px">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
              </p>
            </Dialog.Body>
            <Dialog.CloseTrigger asChild>
              <CloseButton size="sm" />
            </Dialog.CloseTrigger>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  );
};

export default Search;
