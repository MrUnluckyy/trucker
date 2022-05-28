import React from 'react';

import { HStack, IconButton } from '@chakra-ui/react';
import { DragHandleIcon, SettingsIcon, QuestionIcon } from '@chakra-ui/icons';
import { Link, useLocation } from 'react-router-dom';

const QuickMenu = () => {
  const location = useLocation();
  return (
    <HStack
      position="fixed"
      p="12px"
      w="full"
      bottom="0"
      left="0"
      justifyContent="space-around"
      bg="orange.400"
      color="white"
    >
      <Link to="/profile">
        <IconButton
          isActive={location.pathname === '/profile'}
          fontSize="2xl"
          variant="ghost"
          _hover={{ bg: 'orange.600' }}
          _active={{ bg: 'orange.600' }}
          icon={<SettingsIcon />}
        />
      </Link>
      <Link to="/">
        <IconButton
          isActive={location.pathname === '/'}
          fontSize="2xl"
          variant="ghost"
          _hover={{ bg: 'orange.600' }}
          _active={{ bg: 'orange.600' }}
          icon={<DragHandleIcon />}
        />
      </Link>
      <IconButton
        _hover={{ bg: 'orange.600' }}
        _active={{ bg: 'orange.600' }}
        fontSize="2xl"
        variant="ghost"
        icon={<QuestionIcon />}
      />
    </HStack>
  );
};

export default QuickMenu;
