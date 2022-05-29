import { useRef, useState } from 'react';
import {
  Button,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  VStack,
  DrawerFooter,
  IconButton,
  StackDivider,
  useColorModeValue,
  Image,
  Text,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  FormLabel,
  FormControl,
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  HStack,
  Box,
  Stack,
  Checkbox,
} from '@chakra-ui/react';

import { FaAlignJustify } from 'react-icons/fa';

import { FiMenu } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { ReactComponent as BlackLogo } from '../assets/1.svg';

import logo from '../assets/logo.png';
import logoDark from '../assets/logoDark.png';

const FilterDrawer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  const mode = useColorModeValue('light', 'dark');
  const [distance, setDistance] = useState([4000, 8000]);

  const handleChanges = value => {
    setDistance(value);
  };

  return (
    <>
      {/* <IconButton
        ref={btnRef}
        variant="ghost"
        icon={<FiMenu fontSize="1.25rem" />}
        aria-label="Open Menu"
        onClick={onOpen}
      /> */}
      <Button flex={1} variant="link" onClick={onOpen} ref={btnRef}>
        Filter
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="bottom"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>
            <Text>Filter</Text>
          </DrawerHeader>

          <DrawerBody>
            <VStack w="100%" spacing="6">
              <FormControl>
                <FormLabel>
                  Max distance ({`${distance[0]}km - ${distance[1]}km`})
                </FormLabel>
                <RangeSlider
                  defaultValue={[4000, 8000]}
                  min={0}
                  max={10000}
                  step={50}
                  onChangeEnd={val => handleChanges(val)}
                >
                  <RangeSliderTrack bg="red.100">
                    <RangeSliderFilledTrack bg="tomato" />
                  </RangeSliderTrack>
                  <RangeSliderThumb boxSize={6} index={0} />
                  <RangeSliderThumb boxSize={6} index={1} />
                </RangeSlider>
              </FormControl>
              <FormControl>
                <FormLabel>Cargo preference</FormLabel>
                <VStack
                  spacing={5}
                  direction="row"
                  w="full"
                  justifyContent="start"
                  alignItems="start"
                >
                  <HStack>
                    <Checkbox colorScheme="orange" defaultChecked>
                      Livestock
                    </Checkbox>
                    <Checkbox colorScheme="orange" defaultChecked>
                      Vehicles
                    </Checkbox>
                  </HStack>
                  <HStack>
                    <Checkbox colorScheme="orange" defaultChecked>
                      Dangerous
                    </Checkbox>
                    <Checkbox colorScheme="orange" defaultChecked>
                      Frozen goods
                    </Checkbox>
                  </HStack>
                  <HStack>
                    <Checkbox colorScheme="orange" defaultChecked>
                      Food
                    </Checkbox>
                    <Checkbox colorScheme="orange" defaultChecked>
                      Liquids
                    </Checkbox>
                  </HStack>
                </VStack>
              </FormControl>
              <FormControl>
                <FormLabel>Max duration (days)</FormLabel>
                <NumberInput value="5">
                  <NumberInputField />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
              </FormControl>
            </VStack>
          </DrawerBody>

          <DrawerFooter>
            <Button variant="ghost" mr={3} onClick={onClose} w="full">
              Close
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default FilterDrawer;
