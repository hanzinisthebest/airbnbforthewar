// import { Button, ButtonGroup, Card, CardBody, CardFooter, ChakraBaseProvider, Divider, Heading, Image, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import { Card, Image, Text, Badge, Button, Group } from '@mantine/core';
import { Carousel } from '@mantine/carousel';
interface Props {
  id:number;
  available:boolean;
  name:string;
}

const PlaceCard: React.FC<Props> = ({id,available,name}) => {
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
        {available?<Badge color="pink" variant="light">
          On Sale
        </Badge>:
        <Badge color="pink" variant="light">
          closed
        </Badge>
}
      </Group>

      <Text size="sm" c="dimmed">
        With Fjord Tours you can explore more of the magical fjord landscapes with tours and
        activities on and around the fjords of Norway
      </Text>

      <Button variant="light" color="blue" fullWidth mt="md" radius="md">
        Book classic tour now
      </Button>
    </Card>
  </>
  );
};

export default PlaceCard;