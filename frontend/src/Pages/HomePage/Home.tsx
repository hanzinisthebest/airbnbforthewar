import React from 'react';
import { VStack,Heading } from '@chakra-ui/react';
import Navbar from './Navbar';
import PlaceCard from '../PlacesPage/UI/PlaceCard';
import Places from '../PlacesPage/Places';
interface Props {
  
}

const Home: React.FC<Props> = () => {
  return (
    <VStack>
      <Places/>
    </VStack>
  );
};

export default Home;