import React from 'react';
import {
  VStack,
  HStack,
  Button,
  StackDivider,
  Box,
  Heading,
} from '@chakra-ui/react';
import { TriangleDownIcon } from '@chakra-ui/icons';

import { ROUTES } from '../config/routes';
import { Link } from 'react-router-dom';
import RouteCard from '../components/RouteCard';
import Navigation from '../components/Navigation';
import QuickMenu from '../components/QuickMenu';

const RoutesList = () => {
  return (
    <VStack w="full">
      <Navigation />
      <Box py="7" w="100%" textTransform="uppercase" textAlign="center">
        <Heading>Schedule</Heading>
      </Box>
      <VStack w="full" p="3" spacing={6}>
        <Link to={`/route/${ROUTES[0].id}`} style={{ width: '100%' }}>
          <RouteCard route={ROUTES[0]} upcomming />
        </Link>
        <Link to={`/route/${ROUTES[1].id}`} style={{ width: '100%' }}>
          <RouteCard route={ROUTES[1]} />
        </Link>
      </VStack>
      <QuickMenu />
    </VStack>
  );
};

export default RoutesList;
