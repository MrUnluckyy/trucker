import React from 'react';

import {
  VStack,
  Avatar,
  Heading,
  HStack,
  Button,
  Box,
  Text,
} from '@chakra-ui/react';

import { Link } from 'react-router-dom';

import StatsCard from '../components/StatsCard';
import QuickMenu from '../components/QuickMenu';

const Dashboard = () => {
  return (
    <VStack mt="5" spacing="6" p="3">
      <VStack w="full">
        <Avatar
          size={'2xl'}
          src={
            'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
          }
        />
      </VStack>
      <VStack
        borderTop="1px solid"
        borderColor="gray.200"
        w="full"
        textAlign="left"
        justifyContent="start"
        alignItems="start"
        pt="4"
      >
        <Heading>Upcomming trips</Heading>
        <VStack w="full" justifyContent="center" alignItems="center">
          <Text>No Planned Trips</Text>
          <Link to="/routes">
            <Button colorScheme="orange">Explore Routes</Button>
          </Link>
        </VStack>
      </VStack>

      <VStack
        borderTop="1px solid"
        borderColor="gray.200"
        w="full"
        textAlign="left"
        justifyContent="start"
        alignItems="start"
        pt="4"
      >
        <Heading>Your Stats</Heading>
        <HStack w="full">
          <StatsCard
            label="Earned money"
            value="2,340"
            leftSymbol="&euro;"
            term={['May 1', 'May 29']}
          />
          <StatsCard
            label="Kilometers"
            value="4,740"
            rightSymbol="km"
            term={['May 1', 'May 29']}
          />
        </HStack>
      </VStack>
      <VStack
        borderTop="1px solid"
        borderColor="gray.200"
        w="full"
        textAlign="left"
        justifyContent="start"
        alignItems="start"
        pt="4"
      >
        <HStack w="full">
          <StatsCard
            label="Planned Trips"
            value="5"
            term={['May 29', 'June 29']}
          />
          <StatsCard label="Claims" value="0" term={['May 1', 'May 29']} />
        </HStack>
      </VStack>
      <VStack
        borderTop="1px solid"
        borderColor="gray.200"
        w="full"
        textAlign="left"
        justifyContent="start"
        alignItems="start"
        pt="4"
      >
        <HStack w="full">
          <StatsCard
            label="Preferred Duration"
            value="72"
            rightSymbol="h"
            // term={['May 1', 'May 29']}
          />
          <StatsCard label="Eco Rate" value="4,5 / 5" />
        </HStack>
      </VStack>

      <Box w="full" pt={5}>
        <Link to="/routes" style={{ width: '100%' }}>
          <Button colorScheme="orange" width="full">
            Explore Routes
          </Button>
        </Link>
      </Box>
      <QuickMenu />
    </VStack>
  );
};

export default Dashboard;
