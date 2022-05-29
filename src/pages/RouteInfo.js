import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  VStack,
  HStack,
  Heading,
  Text,
  Badge,
  Button,
  Circle,
  Alert,
  AlertIcon,
  Box,
  Flex,
  useColorModeValue,
  // Link,
  Image,
  List,
  ListIcon,
  ListItem,
} from '@chakra-ui/react';
import {
  ArrowForwardIcon,
  TimeIcon,
  CalendarIcon,
  WarningTwoIcon,
  ArrowBackIcon,
} from '@chakra-ui/icons';

import { FaCheckCircle } from 'react-icons/fa';

import { motion } from 'framer-motion';

import { FaTruckMoving } from 'react-icons/fa';
import { ROUTES } from '../config/routes';

import { useParams } from 'react-router-dom';

import routeImg from '../assets/route.png';

import StatusIndicator from '../components/Pulse';
import Navigation from '../components/Navigation';
import CargoTypeIcon from '../components/CargoTypeIcon';

const RouteInfo = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [isActive, setIsActive] = useState(false);

  let route = ROUTES.filter(route => {
    return route.id == id;
  });
  route = route[0];

  const bgColor = useColorModeValue('gray.100', 'gray.700');
  const bgHoverColor = useColorModeValue('gray.200', 'gray.600');

  const handleSubmit = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setIsActive(true);
    }, 3000);
  };

  const handleCancel = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setIsActive(false);
    }, 3000);
  };

  return (
    <>
      <Navigation />
      <Box p="3">
        <Box py="3" fontWeight="bold">
          <ArrowBackIcon /> <Link to="/routes">Back</Link>
        </Box>
        <VStack
          p="5"
          borderRadius="10px"
          w="100%"
          bg={bgColor}
          cursor="pointer"
          transition="0.3s ease"
          spacing={3}
        >
          {isActive && (
            <HStack
              borderBottom="1px solid"
              borderColor="gray.200"
              width="full"
              py="3"
              alignItems="center"
              lineHeight="1"
            >
              <StatusIndicator />
              <Text lineHeight={1}>Waiting</Text>
            </HStack>
          )}
          <HStack w="full" justifyContent="space-between">
            <HStack>
              <Heading>{route.startingPoint}</Heading>
              <ArrowForwardIcon />
              <Heading>{route.endPoint}</Heading>
            </HStack>
            <HStack fontWeight="Bold">
              <TimeIcon />
              <Text>{route.duration}h</Text>
            </HStack>
          </HStack>
          <HStack justifyContent="space-between" w="full">
            <HStack>
              <CalendarIcon />
              <Text>{route.startingDate}</Text>
            </HStack>
            <HStack>
              <Text>&euro; {route.price}</Text>
            </HStack>
          </HStack>
          <HStack justifyContent="space-between" w="full">
            <HStack>
              {/* <WarningTwoIcon /> */}
              <CargoTypeIcon type={route.cargoType} />
              <Text textTransform="capitalize">{route.cargoType}</Text>
            </HStack>
            <HStack>
              {route.trustedCompany && (
                <Badge p="2" colorScheme="purple">
                  Trusted Carrier
                </Badge>
              )}
            </HStack>
          </HStack>
          <HStack borderTop="1px solid" pt="3" borderColor="gray.200">
            <Image
              borderRadius="10px"
              w="full"
              src={routeImg}
              objectFit="cover"
            />
          </HStack>
          <VStack
            borderTop="1px solid"
            borderColor="gray.200"
            w="full"
            alignItems="start"
            justifyContent="start"
          >
            <Heading>Truck:</Heading>
            <HStack alignItems="start" justifyContent="start" spacing="5">
              {route.truck.image ? (
                <Image
                  src={route.truck.image}
                  boxSize="150px"
                  borderRadius="10px"
                  objectFit="cover"
                />
              ) : (
                <Flex
                  w="150px"
                  h="150px"
                  bg="gray"
                  borderRadius="10px"
                  color="white"
                  justifyContent="center"
                  alignItems="center"
                  fontWeight="bold"
                >
                  No Image
                </Flex>
              )}

              <VStack alignItems="start" spacing={3}>
                <HStack alignItems="start" textAlign="left">
                  <FaTruckMoving />
                  <Text lineHeight={1}>{route.truck.model}</Text>
                </HStack>
                <HStack alignItems="start">
                  <CalendarIcon />
                  <Text lineHeight={1}>{route.truck.year}</Text>
                </HStack>
                <List spacing={1}>
                  {route.truck.benefits.map(benefit => (
                    <ListItem key={benefit}>
                      <ListIcon as={FaCheckCircle} color="orange.500" />
                      {benefit}
                    </ListItem>
                  ))}
                </List>
              </VStack>
            </HStack>
          </VStack>
          <HStack
            borderTop="1px solid"
            borderColor="gray.200"
            pt={5}
            width="100%"
          >
            <>
              {isActive && route.status === 'accepted' && (
                <VStack w="full">
                  <Link to="/trip" style={{ width: '100%' }}>
                    <Button
                      variant="solid"
                      colorScheme="orange"
                      onClick={handleCancel}
                      isLoading={loading}
                      w="full"
                    >
                      Start Journey
                    </Button>
                  </Link>
                  <Button
                    variant="outline"
                    colorScheme="red"
                    onClick={handleCancel}
                    isLoading={loading}
                    w="full"
                  >
                    Cancel
                  </Button>
                </VStack>
              )}
              {!isActive && route.status === 'open' && (
                <Button
                  variant="solid"
                  colorScheme="green"
                  flex="1"
                  onClick={handleSubmit}
                  isLoading={loading}
                >
                  Accept
                </Button>
              )}
              {route.status === 'ongoing' && (
                <Link to="/trip" style={{ width: '100%' }}>
                  <Button
                    variant="solid"
                    colorScheme="orange"
                    flex="1"
                    onClick={handleSubmit}
                    isLoading={loading}
                    w="full"
                  >
                    Journey
                  </Button>
                </Link>
              )}
            </>
          </HStack>
        </VStack>
      </Box>
    </>
  );
};

export default RouteInfo;
