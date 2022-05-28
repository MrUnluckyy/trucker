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
} from '@chakra-ui/react';
import {
  ArrowForwardIcon,
  TimeIcon,
  CalendarIcon,
  WarningTwoIcon,
} from '@chakra-ui/icons';

import { motion } from 'framer-motion';

import { FaTruckMoving } from 'react-icons/fa';
import { ROUTES } from '../config/routes';

import { useParams } from 'react-router-dom';

import routeImg from '../assets/route.png';

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
          >
            {/* <Heading color="green.500">Accepted</Heading> */}
            {/* <Alert status="success" borederRaius="10px">
              <AlertIcon
                as={motion.div}
                animate={{ rotate: 180 }}
                transition={{ repeat: Infinity, repeatDelay: 1 }}
              />
              Route has been accepted
            </Alert> */}

            <Box
              as={motion.div}
              animate={{ rotate: 360 }}
              transition={{ ease: 'linear', duration: 2, repeat: Infinity }}
              bg="green"
              borderRadius="full"
              width="10px"
              height="10px"
            />
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
            <WarningTwoIcon />
            <Text>{route.cargoType}</Text>
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
                boxSize="200px"
                borderRadius="10px"
                objectFit="cover"
              />
            ) : (
              <Flex
                w="200px"
                h="200px"
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
            <Link to="/" style={{ flex: '1' }}>
              <Button variant="solid" colorScheme="orange" w="100%">
                Back
              </Button>
            </Link>
            {isActive ? (
              <Button
                variant="solid"
                colorScheme="red"
                flex="1"
                onClick={handleCancel}
                isLoading={loading}
              >
                Cancel
              </Button>
            ) : (
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
          </>
        </HStack>
      </VStack>
    </>
  );
};

export default RouteInfo;
