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
  const scheduledRoutes = ROUTES.filter(
    route => route.status === 'accepted' || route.status === 'ongoing'
  );
  return (
    <VStack w="full">
      <Navigation />
      <Box py="7" w="100%" textTransform="uppercase" textAlign="center">
        <Heading>Schedule</Heading>
      </Box>
      <VStack w="full" p="3" spacing={6}>
        {scheduledRoutes.map(route => (
          <Link to={`/route/${route.id}`} style={{ width: '100%' }}>
            <RouteCard route={route} ongoing={route.status === 'ongoing'} />
          </Link>
        ))}
      </VStack>
      <QuickMenu />
    </VStack>
  );
};

export default RoutesList;
