import React from 'react';
import {
  VStack,
  HStack,
  Heading,
  Text,
  Badge,
  useColorModeValue,
} from '@chakra-ui/react';
import {
  ArrowForwardIcon,
  TimeIcon,
  CalendarIcon,
  WarningTwoIcon,
} from '@chakra-ui/icons';

const RouteCard = ({ route }) => {
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
    </VStack>
  );
};

export default RouteCard;
