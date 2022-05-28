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
} from '@chakra-ui/react';

import { FiMenu } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { ReactComponent as BlackLogo } from '../assets/1.svg';

function DrawerExample() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

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
            <BlackLogo width="50px" height="50px" />
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
            <Button variant="ghost" mr={3} onClick={onClose} w="full">
              Logout
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default DrawerExample;
