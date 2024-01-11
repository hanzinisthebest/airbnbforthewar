import React, { useState } from 'react';
import Loading from '../Shared/Loading';
import { useGetAssetsById } from '../../hooks/Querys/query-assets';
import { useParams } from 'react-router-dom';
import { Badge, Button, Group, Image, SimpleGrid, Stack, Text, Title } from '@mantine/core';
import ImageSlider from './ImageSlider';

interface Props {
  
}
export type MyParams = {
  id: string;
};

const PlaceDeatile: React.FC<Props> = () => {
  let {id} =useParams<MyParams>();
  id = typeof id === 'string' ? id : '';
  const { isLoading, error, data } = useGetAssetsById(id);
  if (isLoading) {
    return <Loading />;
  }
  if(!data){
    return <h1>empty</h1>;
  }
  const images = [{url:"https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aG91c2V8ZW58MHx8MHx8fDA%3D"},
  {url:"https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bHV4dXJ5JTIwaG91c2V8ZW58MHx8MHx8fDA%3D"},
  {url:"https://images.adsttc.com/media/images/5ecd/d4ac/b357/65c6/7300/009d/large_jpg/02C.jpg?1590547607"},
  {url:"https://i.pinimg.com/550x/fc/07/40/fc0740d7c26d93974e117cb88a81bc36.jpg"},
  {url:"https://cdn.thecoolist.com/wp-content/uploads/2022/01/Types-of-Houses.png"}];

  const formattedFirstDate = new Date(data.availability[0]).toLocaleDateString('en-US', {
    day: 'numeric', 
    month: 'short',
    year: 'numeric',
  });
  const formattedLastDate = new Date(data.availability[data.availability.length-1]).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });

  return (
<SimpleGrid cols={2}>
  <Stack>
  <Title order={2}>Important to know about:{data.city}</Title>
  <SimpleGrid cols={2}>
      <Group>
      <Badge color="pink" variant="light">
          pets allowed:
      </Badge>
      <Text>
        {data.isBreakfast?'yes':'no'}
      </Text>
      </Group>
      <Group>
      <Badge color="pink" variant="light">
      Free Parking:
      </Badge>
      <Text>
        {data.isBreakfast?'yes':'no'}
      </Text>
      </Group>

      <Group>
      <Badge color="pink" variant="light">
      grownups:
      </Badge>
      <Text>
        {String(data.grownupsNum)}
      </Text>
      </Group>
      <Group>
      <Badge color="pink" variant="light">
      children and babies:
      </Badge>
      <Text>
        {String(data.childrenNum)}
      </Text>
      </Group>

      <Group>
      <Badge color="pink" variant="light">
      Dates:
      </Badge>
      <Text>
        {formattedFirstDate} - {formattedLastDate}
      </Text>
      </Group>


      <Group>
      <Badge color="pink" variant="light">
      children and babies:
      </Badge>
      <Text>
        {String(data.ownerId)}
      </Text>
      </Group>
      </SimpleGrid>
      <Button mt={400}>To Chat</Button>
  </Stack>

  <ImageSlider images = {images}/>
{/* <Stack>
  <Image src={activeImage}/>
  <SimpleGrid cols={5}>
    {images.map((image)=>(<Image src={image}/>))}
  </SimpleGrid>
</Stack> */}
</SimpleGrid>
  );
};

export default PlaceDeatile;