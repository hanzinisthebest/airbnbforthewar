import React, { useState } from 'react';
import PlaceCard from './UI/PlaceCard';
import { Button , Grid } from '@mantine/core';


interface Props {
  
}

const Places: React.FC<Props> = () => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };
  return (
    <>
     <Grid>
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
     <Button onClick={toggleShowMore}>
        {showMore ? 'Show Less' : 'Show More'}
      </Button>
    </>) }



export default Places;