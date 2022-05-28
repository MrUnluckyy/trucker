import { VStack, Button } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <VStack w="100%">
      <Link to="/login" style={{ width: '100%' }}>
        <Button colorScheme="orange" w="full">
          Driver
        </Button>
      </Link>
      <Button colorScheme="orange" w="full">
        Carrier
      </Button>
      <Button colorScheme="orange" w="full">
        Company
      </Button>
      <Button variant="link">Become a Driver</Button>
    </VStack>
  );
};

export default Index;
