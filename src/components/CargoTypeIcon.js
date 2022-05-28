import React from 'react';
import {
  FaSnowflake,
  FaRadiationAlt,
  FaHorse,
  FaCarSide,
  FaCubes,
} from 'react-icons/fa';

const CargoTypeIcon = ({ type }) => {
  switch (type) {
    case 'freezer':
      return <FaSnowflake />;
    case 'livestock':
      return <FaHorse />;
    case 'radioactive':
      return <FaRadiationAlt />;
    case 'cars':
      return <FaCarSide />;
    case 'dry bulk':
      return <FaCubes />;
    default:
      break;
  }
};

export default CargoTypeIcon;
