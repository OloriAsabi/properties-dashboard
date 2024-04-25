import React from 'react';
import { Flex, Stack } from '@chakra-ui/react';
import SidebarBrand from './Brand';
import SidebarLinks from './Links';


interface SidebarContentProps {
  routes: RoutesType[];
}

const SidebarContent: React.FC<SidebarContentProps> = ({ routes }) => {
  return (
    <Flex direction='column' height='100%' pt='25px' borderRadius='30px'>
      <SidebarBrand />
      <Stack direction='column' mt='8px' mb='auto'>
        <SidebarLinks routes={routes} />
      </Stack>
    </Flex>
  );
};

export default SidebarContent;
