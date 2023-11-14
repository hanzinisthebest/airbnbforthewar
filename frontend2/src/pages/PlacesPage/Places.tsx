import React, { useState } from 'react';
import PlaceCard from './UI/PlaceCard';
import { Button , Grid, SimpleGrid } from '@mantine/core';
import Loading from '../Shared/Loading';
import { useGetAssets } from '../../Querys/query-assets';


interface Props {
  
}

const Places: React.FC<Props> = () => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };
  const { isLoading, error, data } = useGetAssets();
  if (isLoading) {
    return <Loading />;
  }
  if(!data){
    return <h1>empty</h1>;
  }
  return (
    <>
     <SimpleGrid cols={3}>
      {data.map((item)=>{
        return(
          <PlaceCard id={item._id} available={item.isKitchen} name={item.city} pets={item.arePetsAllowed} freeParking = {item.isFreeParking} 
          grownupsNum={item.grownupsNum} childrenNum={item.childrenNum} babies={item.babies}  />
        )
      })}
    </SimpleGrid>
     <Button onClick={toggleShowMore}>
        {showMore ? 'Show Less' : 'Show More'}
      </Button>
    </>) }



export default Places;