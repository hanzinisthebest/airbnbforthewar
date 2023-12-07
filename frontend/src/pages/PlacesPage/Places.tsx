import React, { useEffect, useState } from 'react';
import PlaceCard from './UI/PlaceCard';
import { Button , Grid, Loader, LoadingOverlay, SimpleGrid } from '@mantine/core';
import Loading from '../Shared/Loading';
import { useGetAssets } from '../../Querys/query-assets';
// import { useInfiniteQuery } from '@tanstack/react-query'
// import { fetchAssets } from '@/api/api-assets';
import Asset from '@/models/assets';
import axios, { AxiosResponse } from 'axios';
import InfiniteScroll from 'react-infinite-scroller';
import { useInfiniteQuery } from 'react-query';


interface Props {
  
}

// async function fetchAssets({ pageParam = 1 }): Promise<Asset[]> {
//   const response: AxiosResponse<Asset[]> = await axios.get(`http://localhost:4000/api/assets?_page=${pageParam}&_limit=10`);
//   return response.data;
// }

const Places: React.FC<Props> = () => {


  const [items, setItems] = useState<Asset[]>([]);
  const [page, setPage] = useState<number>(1);

  const [hasMore, setHasMore] = useState(true);

  const fetchData = async (__page:number) => {
    console.log(__page);
    const response = await axios.get(
      `http://localhost:4000/api/assets?_page=${page}&_limit=9`
    );
    setItems([...items, ...response.data]);
    setPage(page + 1);

    // Check if we've reached the end of the data
  if (response.data.length < 9) {
    setHasMore(false);
  }
  };

  // const {
  //   data,
  //   fetchNextPage,
  //   hasNextPage,
  //   isLoading,
  //   isError,
  // } = useInfiniteQuery('assets', fetchAssets, {
  //   getNextPageParam: (lastPage) => lastPage.nextPage,
  // });

  // if (isLoading) {
  //   return <div>Loading...</div>;
  // }

  // if (isError) {
  //   return <h1>Error</h1>;
  // }
  return (
    <>
        <InfiniteScroll
      style={{ margin: "10px" }}
      pageStart={0}
      loadMore={fetchData}
      hasMore={hasMore}
      loader={
        <Loader color="blue" />
      }
    >
           <SimpleGrid cols={3}>
      {items.map((item)=>{
        return(
          <PlaceCard id={item._id} available={item.isKitchen} name={item.city} pets={item.arePetsAllowed} freeParking = {item.isFreeParking} 
          grownupsNum={item.grownupsNum} childrenNum={item.childrenNum} babies={item.babies}  />
        )
      })}
    </SimpleGrid>
      
    </InfiniteScroll>


    {/* <LoadingOverlay visible={isLoading} /> */}
    {/* {!isLoading && <Button onClick={loadMore}>Show More</Button>} */}
     {/* <Button onClick={toggleShowMore}>
        {showMore ? 'Show Less' : 'Show More'}
      </Button> */}
    </>) }



export default Places;