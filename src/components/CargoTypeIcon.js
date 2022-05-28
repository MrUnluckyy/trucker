import React from 'react';
import {
  FaSnowflake,
  FaRadiationAlt,
  FaHorse,
  FaCarSide,
} from 'react-icons/fa';

export const CargoTypeIcon = ({ type }) => {
  switch (type) {
    case type === 'freezer':
      return <FaSnowflake />;
    case type === 'livestock':
      return <FaHorse />;
    case type === 'radioactive':
      return <FaRadiationAlt />;
    case type === 'transport':
      return <FaCarSide />;
    default:
      break;
  }
};
