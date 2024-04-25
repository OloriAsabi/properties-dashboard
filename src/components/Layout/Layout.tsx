import React, { ReactNode, useState } from 'react';
import Navbar from '../navbar/NavbarAdmin';
import Sidebar from '../sidebar/Sidebar';
import routes from '../../routes';
import { Box, Portal, useDisclosure } from '@chakra-ui/react';
import { SidebarContext } from '../contexts/SidebarContext';

interface LayoutProps {
  children: ReactNode; // ReactNode represents the type for any valid React child (e.g., JSX elements)
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    const [ fixed ] = useState(false);
	const [ toggleSidebar, setToggleSidebar ] = useState(false);
    const { onOpen } = useDisclosure();

    const getActiveRouteName = (path: string) => {
		const matchedRoute = routes.find((route) => path.startsWith(route.path));
		return matchedRoute ? matchedRoute.name : 'Default Brand Text';
	  };
	
      const getActiveNavbarText = (routes: RoutesType[]): string | boolean => {
		let activeNavbar = false;
		for (let i = 0; i < routes.length; i++) {
			if (window.location.href.indexOf(routes[i].path) !== -1) {
				return routes[i].name;
			}
		}
		return activeNavbar;
	};
    const getActiveNavbar = (routes: RoutesType[]): boolean => {
		let activeNavbar = false;
		for (let i = 0; i < routes.length; i++) {
			if (window.location.href.indexOf(routes[i].path) !== -1) {
				return routes[i].secondary;
			}
		}
		return activeNavbar;
	};
  return (
    <Box>
     <SidebarContext.Provider
				value={{
					toggleSidebar,
					setToggleSidebar
				}}>
                          <Sidebar routes={routes as RoutesType[]} />
				<Box
					float='right'
					minHeight='100vh'
					height='100%'
					overflow='auto'
					position='relative'
					maxHeight='100%'
					w={{ base: '100%', xl: 'calc( 100% - 290px )' }}
					maxWidth={{ base: '100%', xl: 'calc( 100% - 290px )' }}
					transition='all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1)'
					transitionDuration='.2s, .2s, .35s'
					transitionProperty='top, bottom, width'
					transitionTimingFunction='linear, linear, ease'>
					<Portal>
						<Box>
      <Navbar 
      onOpen={onOpen}
     logoText={'Horizon UI Dashboard PRO'}
                              brandText={getActiveRouteName(window.location.pathname)}
                              secondary={getActiveNavbar(routes as RoutesType[])}
      message={getActiveNavbarText(routes as RoutesType[])}
      fixed={fixed}
    //   {...rest}
       />
          </Box>
          </Portal>
          <Box mx="auto" p={{ base: '20px', md: '30px' }} pe="20px" minH="100vh" mt="120px">
        {children}
        </Box>
          </Box>
        </SidebarContext.Provider>
    </Box>
  );
};

export default Layout;
