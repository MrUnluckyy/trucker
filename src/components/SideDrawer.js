import { useRef } from 'react';
import {
  Button,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  VStack,
  DrawerFooter,
  IconButton,
  StackDivider,
  useColorModeValue,
  Image,
} from '@chakra-ui/react';

import { FiMenu } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { ReactComponent as BlackLogo } from '../assets/1.svg';

import logo from '../assets/logo.png';
import logoDark from '../assets/logoDark.png';

const DrawerExample = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  const mode = useColorModeValue('light', 'dark');

  return (
    <>
      <IconButton
        ref={btnRef}
        variant="ghost"
        icon={<FiMenu fontSize="1.25rem" />}
        aria-label="Open Menu"
        onClick={onOpen}
      />
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>
            {mode === 'light' ? (
              <Image src={logo} boxSize="40px" />
            ) : (
              <Image src={logoDark} boxSize="40px" />
            )}
          </DrawerHeader>

          <DrawerBody>
            <VStack divider={<StackDivider />} spacing="6">
              <Link to="/routes">Routes</Link>
              <Link to="/dashboard">Dashboard</Link>
              <Link to="/schedule">Schedule</Link>
              <Link to="/profile">Profile Settings</Link>
            </VStack>
          </DrawerBody>

          <DrawerFooter>
            <Link to="/" style={{ width: '100%' }}>
              <Button variant="ghost" mr={3} onClick={onClose} w="full">
                Logout
              </Button>
            </Link>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default DrawerExample;
