import React from 'react';
import PlaceCard from './UI/PlaceCard';
import { HStack } from '@chakra-ui/react';

interface Props {
  
}

const Places: React.FC<Props> = () => {
  return (
    <HStack>
      <PlaceCard/>
      <PlaceCard/>
      <PlaceCard/>
      <PlaceCard/>
    </HStack>

  );
};

export default Places;