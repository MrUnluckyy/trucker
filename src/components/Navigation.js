import {
  Box,
  Container,
  HStack,
  useColorModeValue,
  Image,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from '../ColorModeSwitcher';

import { useLocation } from 'react-router-dom';

import DrawerExample from './SideDrawer';

import { ReactComponent as BlackLogo } from '../assets/1.svg';
import { ReactComponent as WhiteLogo } from '../assets/2.svg';
import { ReactComponent as IconLogo } from '../assets/logoNoText.svg';
import logo from '../assets/logo.png';
import logoDark from '../assets/logoDark.png';

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
              {location.pathname !== '/login' && <DrawerExample />}
              {/* {mode === 'light' ? (
                <IconLogo width="50px" height="50px" />
              ) : (
                <WhiteLogo width="50px" height="50px" />
              )} */}
              {mode === 'light' ? (
                <Image src={logo} boxSize="40px" />
              ) : (
                <Image src={logoDark} boxSize="40px" />
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
