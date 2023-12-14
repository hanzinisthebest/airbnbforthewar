import React, { useEffect, useState } from 'react';
import PlaceCard from './UI/PlaceCard';
import { Button , Grid, Loader, LoadingOverlay, SimpleGrid } from '@mantine/core';
import Loading from '../Shared/Loading';
import { useGetAssets } from '../../Querys/query-assets';
// import { useInfiniteQuery } from '@tanstack/react-query'
// import { fetchAssets } from '@/api/api-assets';
// import Asset from '@/models/assets';
// import axios, { AxiosResponse } from 'axios';
// import InfiniteScroll from 'react-infinite-scroller';
// import { useInfiniteQuery } from 'react-query';
// import { fetchAssets } from '../../api/api-assets';


interface Props {
  
}

const Places: React.FC<Props> = () => {


  // const [items, setItems] = useState<Asset[]>([]);
  // const [page, setPage] = useState<number>(1);

  // const [hasMore, setHasMore] = useState(true);
  //  const fetchData = async () => {
  //   const response = await axios.get(
  //     `http://localhost:4000/api/assets?_page=${page}&_limit=9`
  //   );
  //   setItems([...items, ...response.data]);
  //   setPage(page + 1);

  //   // Check if we've reached the end of the data
  // if (response.data.length < 9) {
  //   setHasMore(false); 
  // }
  // };

  const { isLoading, error, data } = useGetAssets();
  if (isLoading) {
    return <Loading />;
  }
  if(!data){
    return <h1>empty</h1>;
  }

  // const { isLoading, error, data,refetch} = useGetAssets();

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
        {/* <InfiniteScroll
      style={{ margin: "10px" }}
      pageStart={0}
      loadMore={fetchData}
      hasMore={hasMore}
      loader={
        <Loader color="blue" />
      }
    > */}
           <SimpleGrid cols={3}>
      {data.map((item)=>{
        return(
          <PlaceCard id={item._id}  name={item.city}   />
        )
      })}
    </SimpleGrid>
      
    {/* </InfiniteScroll> */}

    </>) }



export default Places;