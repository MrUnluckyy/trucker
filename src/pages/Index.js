import { VStack, Button } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as BlackLogo } from '../assets/1.svg';

const Index = () => {
  return (
    <VStack w="100%" p="3">
      <BlackLogo width="150px" height="150px" />
      <Link to="/login" style={{ width: '100%' }}>
        <Button colorScheme="orange" w="full">
          Log In
        </Button>
      </Link>
      <Link to="/login" style={{ width: '100%' }}>
        <Button variant="outline" colorScheme="orange" w="full">
          Register
        </Button>
      </Link>
      <Button variant="outline" colorScheme="green" w="full">
        Company
      </Button>
      {/* <Button variant="link">Become a Driver</Button> */}
    </VStack>
  );
};

export default Index;
