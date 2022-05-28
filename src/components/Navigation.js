import { Box, Container, HStack, useColorModeValue } from '@chakra-ui/react';
import { ColorModeSwitcher } from '../ColorModeSwitcher';

import { useLocation } from 'react-router-dom';

import DrawerExample from './SideDrawer';

import { ReactComponent as BlackLogo } from '../assets/1.svg';
import { ReactComponent as WhiteLogo } from '../assets/2.svg';

export const Navigation = () => {
  const location = useLocation();

  const mode = useColorModeValue('light', 'dark');
  return (
    <Box as="section" w="100%">
      <Box
        as="nav"
        bg="bg-surface"
        boxShadow={useColorModeValue('sm', 'sm-dark')}
      >
        <Container py={{ base: '4', lg: '5' }}>
          <HStack spacing="10" justify="space-between">
            <>
              {/* {location.pathname !== '/login' && <DrawerExample />} */}
              {mode === 'light' ? (
                <BlackLogo width="50px" height="50px" />
              ) : (
                <WhiteLogo width="50px" height="50px" />
              )}
              <ColorModeSwitcher justifySelf="flex-end" />
            </>
          </HStack>
        </Container>
      </Box>
    </Box>
  );
};

export default Navigation;
