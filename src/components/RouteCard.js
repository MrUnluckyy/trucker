import React from 'react';
import {
  VStack,
  HStack,
  Heading,
  Text,
  Badge,
  Box,
  useColorModeValue,
} from '@chakra-ui/react';
import {
  ArrowForwardIcon,
  TimeIcon,
  CalendarIcon,
  WarningTwoIcon,
} from '@chakra-ui/icons';
import {
  FaSnowflake,
  FaRadiationAlt,
  FaHorse,
  FaCarSide,
  FaCubes,
  FaFontAwesome,
  FaRadiation,
} from 'react-icons/fa';

import StatusIndicator from '../components/Pulse';
import CargoTypeIcon from './CargoTypeIcon';

const RouteCard = ({ route, ongoing }) => {
  const bgColor = useColorModeValue('gray.100', 'gray.700');
  const bgHoverColor = useColorModeValue('gray.200', 'gray.600');
  return (
    <VStack
      p="5"
      borderRadius="10px"
      w="100%"
      bg={bgColor}
      _hover={{ bg: bgHoverColor }}
      cursor="pointer"
      transition="0.3s ease"
      spacing={3}
    >
      {ongoing && <StatusIndicator />}
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
          <CargoTypeIcon type={route.cargoType} />
          {/* {cargoIcon} */}
          <Text textTransform="capitalize">{route.cargoType}</Text>
        </HStack>
        <HStack>
          {route.badge && (
            <Badge
              p="2"
              colorScheme={route.badge === '2x Money' ? 'red' : 'purple'}
            >
              {route.badge}
            </Badge>
          )}
        </HStack>
      </HStack>
    </VStack>
  );
};

export default RouteCard;
