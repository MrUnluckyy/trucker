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

const Register = () => {
  return (
    <VStack mt="5" spacing="6" p="3">
      <VStack w="full">
        <Avatar size={'2xl'} />
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
        <Link to="/login" style={{ width: '100%' }}>
          <Button colorScheme="red" width="full">
            Log out
          </Button>
        </Link>
      </Box>
      <QuickMenu />
    </VStack>
  );
};

export default Register;
