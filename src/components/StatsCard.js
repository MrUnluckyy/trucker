import React from 'react';
import {
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  StatGroup,
} from '@chakra-ui/react';

const StatsCard = ({ label, value, term, leftSymbol, rightSymbol }) => {
  return (
    <Stat
      border="1px solid"
      borderColor="gray"
      p="3"
      borderRadius="10px"
      h="100%"
    >
      <StatLabel>{label}</StatLabel>
      <StatNumber>
        {leftSymbol ? leftSymbol : ''}
        {value}
        {rightSymbol ? rightSymbol : ''}
      </StatNumber>
      {term && (
        <StatHelpText>
          {term[0]} - {term[1]}
        </StatHelpText>
      )}
    </Stat>
  );
};

export default StatsCard;
