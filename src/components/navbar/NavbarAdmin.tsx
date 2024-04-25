import React, { useState, useEffect } from 'react';
import { Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Flex, Link, Text, useColorModeValue } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';
import HeaderLinks from './NavbarLinks';

interface AdminNavbarProps {
	secondary: boolean;
	message: string|boolean;
	brandText: string;
	logoText: string;
	fixed: boolean;
	onOpen: (...args: any[]) => any;
}

const Navbar: React.FC<AdminNavbarProps> = (props) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', changeNavbar);

    return () => {
      window.removeEventListener('scroll', changeNavbar);
    };
  });

  const { secondary, brandText } = props;

  const mainText = useColorModeValue('navy.700', 'white');
  const secondaryText = useColorModeValue('gray.700', 'white');
  const navbarPosition = 'fixed' as const;
  const navbarBg = useColorModeValue('rgba(244, 247, 254, 0.2)', 'rgba(11,20,55,0.5)');
  const shadow = useColorModeValue(
    '14px 17px 40px 4px rgba(112, 144, 176, 0.18)',
    '14px 17px 40px 4px rgba(112, 144, 176, 0.06)'
  );

  const changeNavbar = () => {
    if (window.scrollY > 1) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  return (
    <Box
      position={navbarPosition}
      boxShadow={shadow}
      bg={navbarBg}
      borderRadius='16px'
      borderWidth='1.5px'
      borderStyle='solid'
      alignItems={{ xl: 'center' }}
      display={secondary ? 'block' : 'flex'}
      minH='75px'
      justifyContent={{ xl: 'center' }}
      mx='auto'
      mt={secondary ? '0px' : '75px'} // Adjust based on secondary prop
      pb='8px'
      right={{ base: '12px', md: '30px', lg: '30px', xl: '30px' }}
      px={{ sm: '15px', md: '10px' }}
      pt='8px'
      top={{ base: '12px', md: '16px', xl: '18px' }}
      w={{
        base: 'calc(100vw - 6%)',
        md: 'calc(100vw - 8%)',
        lg: 'calc(100vw - 6%)',
        xl: 'calc(100vw - 350px)',
        '2xl': 'calc(100vw - 365px)',
      }}
    >
      <Flex
        w='100%'
        flexDirection={{ sm: 'column', md: 'row' }}
        alignItems={{ xl: 'center' }}
        mb='0px' // Adjust based on secondary prop
      >
        <Box mb={{ sm: '8px', md: '0px' }}>
          <Breadcrumb>
            <BreadcrumbItem color={secondaryText} fontSize='sm' mb='5px'>
              <BreadcrumbLink as={NavLink} to='#' color={secondaryText}>
                Pages
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem color={secondaryText} fontSize='sm'>
              <BreadcrumbLink as={NavLink} to='#' color={secondaryText}>
                {brandText}
              </BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
          {/* Here we create navbar brand, based on route name */}
          <Link
            as={NavLink}
            to='#'
            color={mainText}
            borderRadius='inherit'
            fontWeight='bold'
            fontSize='34px'
            _hover={{ color: mainText }}
            _active={{
              bg: 'inherit',
              transform: 'none',
              borderColor: 'transparent',
            }}
            _focus={{
              boxShadow: 'none',
            }}
          >
            {brandText}
          </Link>
        </Box>
        <Box ms='auto' w={{ sm: '100%', md: 'unset' }}>
          <HeaderLinks onOpen={props.onOpen} secondary={props.secondary} fixed={props.fixed} />
        </Box>
      </Flex>
    </Box>
  );
};

export default Navbar;
