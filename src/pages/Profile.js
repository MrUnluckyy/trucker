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
  Text,
  Button,
  Box,
} from '@chakra-ui/react';

import { Link } from 'react-router-dom';

import QuickMenu from '../components/QuickMenu';

const Profile = () => {
  return (
    <VStack mt="5" spacing="6" p="3">
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
        <FormControl>
          <FormLabel htmlFor="email">License Number</FormLabel>
          <Input
            id="license"
            value="345340430"
            placeholder="License number"
            disabled
          />
        </FormControl>
      </VStack>

      <Box w="full" pt={5}>
        <Link to="/" style={{ width: '100%' }}>
          <Button colorScheme="red" width="full">
            Log out
          </Button>
        </Link>
      </Box>
      <QuickMenu />
    </VStack>
  );
};

export default Profile;
