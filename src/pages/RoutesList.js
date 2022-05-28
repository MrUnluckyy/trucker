import React from 'react';
import { VStack, HStack, Button, StackDivider } from '@chakra-ui/react';
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
      <VStack w="full" p="3" spacing={6}>
        <HStack pt="3" width="full" divider={<StackDivider />}>
          <Button color="black" flex={1} variant="link">
            Sort By
          </Button>
          <Button color="black" flex={1} variant="link">
            Filter
          </Button>
        </HStack>
        {ROUTES.map((route, index) => (
          <Link key={index} to={`/route/${route.id}`} style={{ width: '100%' }}>
            <RouteCard route={route} />
          </Link>
        ))}
      </VStack>
      <QuickMenu />
    </VStack>
  );
};

export default RoutesList;
