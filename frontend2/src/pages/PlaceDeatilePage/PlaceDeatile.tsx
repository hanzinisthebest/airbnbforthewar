import React, { useState } from 'react';
import Loading from '../Shared/Loading';
import { useGetAssetsById } from '../../Querys/query-assets';
import { useParams } from 'react-router-dom';
import { Badge, Button, Group, Image, SimpleGrid, Stack, Text, Title } from '@mantine/core';
import ImageSlider from './ImageSlider';

interface Props {
  
}
type MyParams = {
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
  const [images,setImages] = useState([{url:"https://yt3.googleusercontent.com/tzvCrIaCNQpSlW1aInrYwZ6uccTquvwPL5sBS0QbcJT3wg0Z4qz3FhKxnZPRL5gGbbxoiofrDlY=s176-c-k-c0x00ffffff-no-rj"},
  {url:"https://yt3.googleusercontent.com/tzvCrIaCNQpSlW1aInrYwZ6uccTquvwPL5sBS0QbcJT3wg0Z4qz3FhKxnZPRL5gGbbxoiofrDlY=s176-c-k-c0x00ffffff-no-rj"},
  {url:"https://yt3.googleusercontent.com/tzvCrIaCNQpSlW1aInrYwZ6uccTquvwPL5sBS0QbcJT3wg0Z4qz3FhKxnZPRL5gGbbxoiofrDlY=s176-c-k-c0x00ffffff-no-rj"},
  {url:"https://yt3.googleusercontent.com/tzvCrIaCNQpSlW1aInrYwZ6uccTquvwPL5sBS0QbcJT3wg0Z4qz3FhKxnZPRL5gGbbxoiofrDlY=s176-c-k-c0x00ffffff-no-rj"},
  {url:"https://yt3.googleusercontent.com/tzvCrIaCNQpSlW1aInrYwZ6uccTquvwPL5sBS0QbcJT3wg0Z4qz3FhKxnZPRL5gGbbxoiofrDlY=s176-c-k-c0x00ffffff-no-rj"}]);

  return (
<SimpleGrid cols={2}>
  <Stack>
  <Title order={2}>Important to know:</Title>
  <SimpleGrid cols={2}>
      <Group>
      <Badge color="pink" variant="light">
          pets allowed:
      </Badge>
      <Text>
        {data.arePetsAllowed?'yes':'no'}
      </Text>
      </Group>
      <Group>
      <Badge color="pink" variant="light">
      Free Parking:
      </Badge>
      <Text>
        {data.isFreeParking?'yes':'no'}
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