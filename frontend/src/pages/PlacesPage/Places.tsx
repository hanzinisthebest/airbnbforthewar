import React, { useEffect, useState } from 'react';
import PlaceCard from './UI/PlaceCard';
import { Button , Grid, LoadingOverlay, SimpleGrid } from '@mantine/core';
import Loading from '../Shared/Loading';
import { useGetAssets } from '../../Querys/query-assets';
import { useInfiniteQuery } from '@tanstack/react-query'
import { fetchAssets } from '@/api/api-assets';
import Asset from '@/models/assets';


interface Props {
  
}

const Places: React.FC<Props> = () => {
  const [showMore, setShowMore] = useState(false);
  const [visible, setVisible] = useState(12); // Number of items to show initially

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };
  const { isLoading, error, data } = useGetAssets();
  if (isLoading) {
    return <Loading />;
  }
  if(error){
    <h1>error</h1>
  }
  if(!data){
    return <h1>empty</h1>;
  }
  const loadMore = () => { 
    setVisible(prevVisible => prevVisible + 12); // Show 10 more items
  };
  return (
    <>
     <SimpleGrid cols={3}>
      {data.slice(0, visible).map((item)=>{
        return(
          <PlaceCard id={item._id} available={item.isKitchen} name={item.city} pets={item.arePetsAllowed} freeParking = {item.isFreeParking} 
          grownupsNum={item.grownupsNum} childrenNum={item.childrenNum} babies={item.babies}  />
        )
      })}
    </SimpleGrid>

    {/* <LoadingOverlay visible={isLoading} /> */}
    {!isLoading && <Button onClick={loadMore}>Show More</Button>}
     {/* <Button onClick={toggleShowMore}>
        {showMore ? 'Show Less' : 'Show More'}
      </Button> */}
    </>) }



export default Places;