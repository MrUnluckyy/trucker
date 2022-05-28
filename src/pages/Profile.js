import React from 'react';

import {
  VStack,
  FormControl,
  Input,
  FormLabel,
  Select,
  Avatar,
  Heading,
  HStack,
  Button,
  Box,
} from '@chakra-ui/react';

import { Link } from 'react-router-dom';

import StatsCard from '../components/StatsCard';

const Profile = () => {
  return (
    <VStack mt="5" spacing="6">
      <VStack w="full">
        <Avatar
          size={'2xl'}
          src={
            'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
          }
        />
        <FormControl isRequired>
          <FormLabel htmlFor="first-name">First name</FormLabel>
          <Input id="first-name" value="Grethen" placeholder="First name" />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="last-name">Last name</FormLabel>
          <Input id="last-name" value="Müller" placeholder="Last name" />
        </FormControl>
        <FormControl isRequired>
          <FormLabel htmlFor="email">Email</FormLabel>
          <Input
            id="email"
            value="greta.muller@gmail.com"
            placeholder="Email"
          />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="country">Country</FormLabel>
          <Select id="country" placeholder="Select country">
            <option>Lithuania</option>
            <option>Poland</option>
            <option selected>Germany</option>
          </Select>
        </FormControl>
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
          <StatsCard
            label="Preferred Duration"
            value="72"
            rightSymbol="h"
            // term={['May 1', 'May 29']}
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
          <StatsCard label="Eco Rate" value="4,5" />
          <StatsCard label="Claims" value="0" term={['May 1', 'May 29']} />
          <StatsCard
            label="Planned Trips"
            value="5"
            term={['May 29', 'June 29']}
          />
        </HStack>
        <Box w="full" pt={5}>
          <Link to="/login" style={{ width: '100%' }}>
            <Button colorScheme="red" width="full">
              Log out
            </Button>
          </Link>
        </Box>
      </VStack>
    </VStack>
  );
};

export default Profile;
