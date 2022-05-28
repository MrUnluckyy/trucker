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
      bg="gray.800"
      color="white"
    >
      <Link to="/profile">
        <IconButton
          isActive={location.pathname === '/profile'}
          fontSize="2xl"
          variant="ghost"
          _hover={{ bg: 'gray.700' }}
          _active={{ bg: 'gray.700' }}
          icon={<SettingsIcon />}
        />
      </Link>
      <Link to="/">
        <IconButton
          isActive={location.pathname === '/'}
          fontSize="2xl"
          variant="ghost"
          _hover={{ bg: 'gray.700' }}
          _active={{ bg: 'gray.700' }}
          icon={<DragHandleIcon />}
        />
      </Link>
      <IconButton
        _hover={{ bg: 'gray.700' }}
        _active={{ bg: 'gray.700' }}
        fontSize="2xl"
        variant="ghost"
        icon={<QuestionIcon />}
      />
    </HStack>
  );
};

export default QuickMenu;
