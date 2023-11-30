import React, { useEffect, useState } from 'react';
import PlaceCard from './UI/PlaceCard';
import { Button , Grid, LoadingOverlay, SimpleGrid } from '@mantine/core';
import Loading from '../Shared/Loading';
import { useGetAssets } from '../../Querys/query-assets';
import { useInfiniteQuery } from 'react-query';
import { fetchAssets } from '@/api/api-assets';
import Asset from '@/models/assets';


interface Props {
  
}

const Places: React.FC<Props> = () => {
  // const [items, setItems] = useState<Asset[]>([]);
  // // const [isLoading, setIsLoading] = useState(true);
  // const [page, setPage] = useState(1);

  // useEffect(() => {
  //   setIsLoading(true);
  //   fetch(`https://your-api.com/places?page=${page}&limit=10`)
  //     .then(response => response.json())
  //     .then((data:Asset[]) => {
  //       setItems(prevItems => [...prevItems, ...data]);
  //       setIsLoading(false);
  //     });
  // }, [page]);
  // const loadMore = () => {
  //   setPage(prevPage => prevPage + 1);
  // };
  const [showMore, setShowMore] = useState(false);
  const [visible, setVisible] = useState(12); // Number of items to show initially

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