import React from 'react';
import { ChakraProvider, Box, theme } from '@chakra-ui/react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Navigation from './components/Navigation';
import Index from './pages/Index';
import RoutesList from './pages/RoutesList';
import Profile from './pages/Profile';
import Login from './pages/Login';
import RouteInfo from './pages/RouteInfo';
import QuickMenu from './components/QuickMenu';

function App() {
  // const bgColor = useColorModeValue('gray.100', 'red.700');
  return (
    <ChakraProvider theme={theme}>
      <Box p={3} mb="80px">
        <BrowserRouter>
          {/* HIDE NAVIGATION IF LOGI */}
          <Navigation />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/routes" element={<RoutesList />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/route/:id" element={<RouteInfo />} />
            <Route path="/login" element={<Login />} />
          </Routes>
          {/* HIDE NAVIGATION IF LOGI */}
          <QuickMenu />
        </BrowserRouter>
      </Box>
    </ChakraProvider>
  );
}

export default App;
