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
import Dashboard from './pages/Dashboard';
import Register from './pages/Register';
import Schedule from './pages/Schedule';
import InProcessPage from './pages/InProcessPage';

function App() {
  // const bgColor = useColorModeValue('gray.100', 'red.700');
  return (
    <ChakraProvider theme={theme}>
      <Box mb="80px">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/routes" element={<RoutesList />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/route/:id" element={<RouteInfo />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/schedule" element={<Schedule />} />
            <Route path="/trip" element={<InProcessPage />} />
          </Routes>
        </BrowserRouter>
      </Box>
    </ChakraProvider>
  );
}

export default App;
