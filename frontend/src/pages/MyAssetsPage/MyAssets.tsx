import React, { useEffect, useState } from 'react';
import Loading from '../Shared/Loading';
import { useGetAssets, useGetAssetsByOwnerId } from '../../hooks/Querys/query-assets';
import { SimpleGrid } from '@mantine/core';
import PlaceCard from '../PlacesPage/UI/PlaceCard';
import AssetCard from './AssetCard';
import { useParams } from 'react-router-dom';
import { MyParams } from '../PlaceDeatilePage/PlaceDeatile';
import { useTokenStore } from '../../store/useTokenStore';

interface Props {
  
}
export type OwnerParams = {
    ownerId: string;
  };

const MyAssets: React.FC<Props> = () => {
  const token = useTokenStore((state) => state.token);
// const [ownerId,setOwnerId] = useState('');

// useEffect(() => {
// setOwnerId('65647676ae692b64bc0c8d93');
// }, [])
// let {ownerId} = useParams<OwnerParams>();
// ownerId = typeof ownerId === 'string' ? ownerId : '';
const ownerId = '65647676ae692b64bc0c8d93';
const { isLoading, error, data } = useGetAssetsByOwnerId(ownerId,token?token:'');
  if (isLoading) {
    return <Loading />;
  }

  if(error){
    return <h1>{error.message}</h1>
  }
    if(!data){
    return <h1>empty</h1>;
  }
  return (
    <SimpleGrid cols={3}>
    {data.map((item)=>{
      return(
        <AssetCard id={item._id}  name={item.city}   />
      )
    })}
  </SimpleGrid>
  );
};

export default MyAssets;