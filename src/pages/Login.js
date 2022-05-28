import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  // Link as ChakraLink,
  Image,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

import { ReactComponent as BlackLogo } from '../assets/1.svg';
import { ReactComponent as WhiteLogo } from '../assets/2.svg';

export default function Login() {
  const mode = useColorModeValue('light', 'dark');
  return (
    <Flex align={'center'} justify={'center'}>
      <Stack spacing={8} mx={'auto'} width={'md'} py={12} px={6}>
        <Stack align={'center'}>
          {/* <Heading fontSize={'4xl'}>Sign in to your account</Heading> */}
          {/* <Text fontSize={'lg'} color={'gray.600'}>
            to enjoy all of our cool{' '}
            <Link to="/" color={'blue.400'}>
              features
            </Link>{' '}
            ✌️
          </Text> */}
          {mode === 'light' ? (
            <BlackLogo width="200px" height="200px" />
          ) : (
            <WhiteLogo width="200px" height="200px" />
          )}
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}
        >
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input type="email" value="grethen.muller@gmail.com" />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input type="password" value="asdasdasd" />
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}
              >
                <Checkbox isChecked>Remember me</Checkbox>
                {/* <ChakraLink color={'blue.400'}>Forgot password?</ChakraLink> */}
              </Stack>
              <Link to="/" style={{ width: '100%' }}>
                <Button borderRadius="10px" py="2" colorScheme="blue" w="100%">
                  Sign in
                </Button>
              </Link>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
