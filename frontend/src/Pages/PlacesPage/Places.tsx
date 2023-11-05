import React from 'react';
import PlaceCard from './UI/PlaceCard';
import { Grid, HStack } from '@chakra-ui/react';

interface Props {
  
}

const Places: React.FC<Props> = () => {
  return (
    <Grid templateColumns="repeat(5, 1fr)" gap={4}>
      <PlaceCard/>
      <PlaceCard/>
      <PlaceCard/>
      <PlaceCard/>
      <PlaceCard/>
      <PlaceCard/>
      <PlaceCard/>
      <PlaceCard/>
      <PlaceCard/>
      <PlaceCard/>
      <PlaceCard/>
      <PlaceCard/>
      <PlaceCard/>
      <PlaceCard/>
      <PlaceCard/>
      </Grid>

  );
};

export default Places;