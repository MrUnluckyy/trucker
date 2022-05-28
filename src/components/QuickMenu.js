import React from 'react';

import { HStack, IconButton } from '@chakra-ui/react';
import { FaUserAlt, FaRoute, FaCalendarAlt } from 'react-icons/fa';
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
      <Link to="/dashboard">
        <IconButton
          isActive={location.pathname === '/dashboard'}
          fontSize="2xl"
          variant="ghost"
          _hover={{ bg: 'orange.600' }}
          _active={{ bg: 'orange.600' }}
          icon={<FaUserAlt />}
        />
      </Link>
      <Link to="/routes">
        <IconButton
          isActive={location.pathname === '/routes'}
          fontSize="2xl"
          variant="ghost"
          _hover={{ bg: 'orange.600' }}
          _active={{ bg: 'orange.600' }}
          icon={<FaRoute />}
        />
      </Link>
      <Link to="/schedule">
        <IconButton
          _hover={{ bg: 'orange.600' }}
          _active={{ bg: 'orange.600' }}
          fontSize="2xl"
          variant="ghost"
          icon={<FaCalendarAlt />}
        />
      </Link>
    </HStack>
  );
};

export default QuickMenu;
