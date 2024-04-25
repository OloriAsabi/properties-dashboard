import React from 'react';
import { Box, useColorModeValue } from '@chakra-ui/react';
import SidebarContent from './components/Content';

interface SidebarProps {
  routes: RoutesType[];
}

const Sidebar: React.FC<SidebarProps> = ({ routes }) => {
  const sidebarBg = useColorModeValue('white', 'navy.800');

  return (
    <Box display={{ sm: 'none', xl: 'block' }} position='fixed' minH='100%'>
      <Box
        bg={sidebarBg}
        transition='0.2s linear'
        w='300px'
        h='100vh'
        m='0'
        minH='100%'
        overflowX='hidden'
        boxShadow='14px 17px 40px 4px rgba(112, 144, 176, 0.08)'>
        <SidebarContent routes={routes} />
      </Box>
    </Box>
  );
};

export default Sidebar;
