import React from 'react';
import {
  VStack,
  HStack,
  Text,
  Button,
  StackDivider,
  Box,
  Heading,
  Progress,
  Image,
} from '@chakra-ui/react';

import Navigation from '../components/Navigation';
import QuickMenu from '../components/QuickMenu';
import routeImg from '../assets/route.png';

const InProcessPage = () => {
  return (
    <VStack w="full">
      <Navigation />
      <VStack spacing={3} w="100%" p="3" divider={<StackDivider />}>
        <Box w="full">
          <Heading textAlign="center" mb="3">
            Your Progress
          </Heading>
          <HStack w="full" mb="3">
            <Text flex="1">Vilnius</Text>
            <Progress flex="4" colorScheme="green" size="md" value={10} />
            <Text flex="1" textAlign="right ">
              Berlin
            </Text>
          </HStack>
          <Image
            borderRadius="10px"
            w="full"
            src={routeImg}
            objectFit="cover"
          />
        </Box>
        <VStack w="full">
          <Button w="full" colorScheme="orange">
            Travel Docs
          </Button>
          <Button w="full" colorScheme="orange">
            Contact Manager
          </Button>
          <Button w="full" colorScheme="red">
            Report an Issue
          </Button>
          <Button w="full" colorScheme="green">
            Contact Drivers
          </Button>
        </VStack>
      </VStack>
      <QuickMenu />
    </VStack>
  );
};

export default InProcessPage;
