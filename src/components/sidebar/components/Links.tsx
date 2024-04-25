import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Box, Flex, HStack, Text, useColorModeValue } from '@chakra-ui/react';



interface SidebarLinksProps {
  routes: RoutesType[];
}

const SidebarLinks: React.FC<SidebarLinksProps> = ({ routes }) => {
  const location = useLocation();
  const activeColor = useColorModeValue('gray.700', 'white');
  const activeIconColor = useColorModeValue('brand.500', 'white');
  const textColor = useColorModeValue('secondaryGray.500', 'white');
  const brandColor = useColorModeValue('brand.500', 'brand.400');

  const isActiveRoute = (routePath: string) => {
    return location.pathname === routePath; // Check exact path match
  };
  
  return (
    <>
 {routes.map((route, index) => {
        if (route.path.includes(':propertyId')) {
          return null; // Exclude propertyId route from sidebar
        }
        return (
          <NavLink key={index} to={route.path} className="active-link">
            <Box>
              <HStack spacing={4} py={2} px={3} alignItems="center" justifyContent="start">
                <Box color={isActiveRoute(route.path) ? activeIconColor : textColor} fontSize="lg">
                  {React.createElement(route.icon, {
                    size: '1.5em', // Set icon size if needed
                  })}
                </Box>
                <Text
                  color={isActiveRoute(route.path) ? activeColor : textColor}
                  fontWeight={isActiveRoute(route.path) ? 'bold' : 'normal'}
                >
                  {route.name}
                </Text>
              </HStack>
            </Box>
          </NavLink>
        );
      })}
    </>
  );
};

export default SidebarLinks;
