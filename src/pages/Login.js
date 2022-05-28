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
      <Stack spacing={8} mx={'auto'} width={'md'} px={6}>
        <Stack align={'center'}>
          {mode === 'light' ? (
            <BlackLogo width="150px" height="200px" />
          ) : (
            <WhiteLogo width="150px" height="200px" />
          )}
        </Stack>
        <Box>
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
                <Checkbox colorScheme="orange" isChecked>
                  Remember me
                </Checkbox>
              </Stack>
              <Link to="/dashboard" style={{ width: '100%' }}>
                <Button
                  borderRadius="10px"
                  py="2"
                  colorScheme="orange"
                  w="100%"
                >
                  Sign in
                </Button>
              </Link>
              <Link to="/">Back</Link>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
