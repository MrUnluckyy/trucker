import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Flex,
  HStack,
  IconButton,
  Avatar,
  useBreakpointValue,
  useColorModeValue,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from '../ColorModeSwitcher';
import { Link } from 'react-router-dom';

import { useLocation } from 'react-router-dom';

import DrawerExample from './SideDrawer';

export const Navigation = () => {
  const location = useLocation();
  const isDesktop = useBreakpointValue({ base: false, lg: true });

  const showAvatar =
    location.pathname !== '/profile' && location.pathname !== '/login';
  return (
    <Box as="section">
      <Box
        as="nav"
        bg="bg-surface"
        boxShadow={useColorModeValue('sm', 'sm-dark')}
      >
        <Container py={{ base: '4', lg: '5' }}>
          <HStack spacing="10" justify="space-between">
            {isDesktop ? (
              <Flex justify="space-between" flex="1">
                <ButtonGroup variant="link" spacing="8">
                  {['Product', 'Pricing', 'Resources', 'Support'].map(item => (
                    <Button key={item}>{item}</Button>
                  ))}
                </ButtonGroup>
                <ColorModeSwitcher justifySelf="flex-end" />
              </Flex>
            ) : (
              <>
                {location.pathname !== '/login' && <DrawerExample />}
                <Link to={'/profile'}>
                  {showAvatar && (
                    <Avatar
                      size={'md'}
                      src={
                        'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
                      }
                    />
                  )}
                </Link>
                <ColorModeSwitcher justifySelf="flex-end" />
              </>
            )}
          </HStack>
        </Container>
      </Box>
    </Box>
  );
};

export default Navigation;
