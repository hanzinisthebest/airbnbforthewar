// import { Button, ButtonGroup, Card, CardBody, CardFooter, ChakraBaseProvider, Divider, Heading, Image, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import { Card, Image, Text, Badge, Button, Group, SimpleGrid } from '@mantine/core';
import { Carousel } from '@mantine/carousel';
import { Link, useNavigate } from 'react-router-dom';
interface Props {
  id:string;
  available:boolean;
  name:string;
  pets:Boolean;
  freeParking:Boolean;
  grownupsNum:Number;
  childrenNum:Number;
  babies:number
}

const PlaceCard: React.FC<Props> = ({id,available,name,pets,freeParking,grownupsNum,childrenNum,babies}) => {
  const navigate = useNavigate();
  return (
    <>
<Card shadow="sm" padding="lg" radius="md" withBorder>
      <Card.Section>
        <Carousel withIndicators height={200}>
          <Carousel.Slide>
            <Image
          src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
          height={160}
          alt="Norway"
        />
</Carousel.Slide>
          <Carousel.Slide>
          <Image
          src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
          height={160}
          alt="Norway"
        />
          </Carousel.Slide>
          <Carousel.Slide>
          <Image
          src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
          height={160}
          alt="Norway"
        />
          </Carousel.Slide>
          {/* ...other slides */}
        </Carousel>
      </Card.Section>

      <Group justify="space-between" mt="md" mb="xs">
        <Text fw={500}>{name}</Text>
        {/* {available?<Badge color="pink" variant="light">
          On Sale
        </Badge>:
        <Badge color="pink" variant="light">
          closed
        </Badge>
} */}
      </Group>

      <SimpleGrid cols={2}>
      <Group>
      <Badge color="pink" variant="light">
          pets allowed:
      </Badge>
      <Text>
        {pets?'yes':'no'}
      </Text>
      </Group>
      <Group>
      <Badge color="pink" variant="light">
      Free Parking:
      </Badge>
      <Text>
        {freeParking?'yes':'no'}
      </Text>
      </Group>

      <Group>
      <Badge color="pink" variant="light">
      grownups:
      </Badge>
      <Text>
        {String(grownupsNum)}
      </Text>
      </Group>
      <Group>
      <Badge color="pink" variant="light">
      children and babies:
      </Badge>
      <Text>
        {String(childrenNum)}
      </Text>
      </Group>
      </SimpleGrid>

      {/* <Text size="sm" c="dimmed">
        With Fjord Tours you can explore more of the magical fjord landscapes with tours and
        activities on and around the fjords of Norway
      </Text> */}

      <Button variant="light" color="blue" fullWidth mt="md" radius="md" onClick={() => navigate(`/asset/${id}`)}>
        Book classic tour now
      </Button>
    </Card>
  </>
  );
};

export default PlaceCard;