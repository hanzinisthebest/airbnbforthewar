// import { Button, ButtonGroup, Card, CardBody, CardFooter, ChakraBaseProvider, Divider, Heading, Image, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import { Card, Image, Text, Badge, Button, Group, SimpleGrid } from '@mantine/core';
import { Carousel } from '@mantine/carousel';
import { Link, useNavigate } from 'react-router-dom';
import classes from './PlaceCard.module.css';
import { IconStar } from '@tabler/icons-react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteAsset } from '../../../api/api-assets';

interface Props {
  id: string;
  available: boolean;
  name: string;
  pets: Boolean;
  freeParking: Boolean;
  grownupsNum: Number;
  childrenNum: Number;
  babies: number;
}
const images = [
  'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
  'https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
  'https://images.unsplash.com/photo-1605774337664-7a846e9cdf17?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
  'https://images.unsplash.com/photo-1554995207-c18c203602cb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
  'https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
];

const PlaceCard: React.FC<Props> = ({
  id,
  available,
  name,
  pets,
  freeParking,
  grownupsNum,
  childrenNum,
  babies,
}) => {
  const slides = images.map((image) => (
    <Carousel.Slide key={image}>
      <Image src={image} height={220} />
    </Carousel.Slide>
  ));
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const deleteAssetMutation = useMutation({
    mutationFn: deleteAsset,
    onSuccess: async () => {
      // Invalidates cache and refetch
      // queryClient.setQueryData(['assets', data.id], data)
      await queryClient.invalidateQueries({ queryKey: ['assets'] });
      // queryClient.refetchQueries({ queryKey: ['assets'] });
    },
  });
  return (
    <>
      <Card shadow="sm" padding="lg" radius="md" withBorder>
        <Card.Section>
          <Carousel
            withIndicators
            loop
            classNames={{
              root: classes.carousel,
              controls: classes.carouselControls,
              indicator: classes.carouselIndicator,
            }}
          >
            {slides}
          </Carousel>
        </Card.Section>

        <Group justify="space-between" mt="md" mb="xs">
          <Text fw={500}>{name}</Text>
          <Group gap={5}>
            <IconStar style={{ width: 16, height: 16 }} />
            <Text fz="xs" fw={500}>
              4.78
            </Text>
          </Group>
        </Group>

        <Text fz="sm" c="dimmed" mt="sm">
          Relax, rejuvenate and unplug in this unique contemporary Birdbox. Feel close to nature in
          ultimate comfort. Enjoy the view of the epic mountain range of Blegja and the Førdefjord.
        </Text>

        <Group justify="space-between" mt="md">
          <div>
            <Text fz="xl" span fw={500} className={classes.price}>
              397$
            </Text>
            <Text span fz="sm" c="dimmed">
              {' '}
              / night
            </Text>
          </div>

          <Button radius="md" onClick={() => navigate(`/asset/${id}`)}>
            Book now
          </Button>
          <Button radius="md" onClick={() => navigate(`/asset/${id}`)} color="green">
            update
          </Button>
          <Button radius="md" onClick={() => deleteAssetMutation.mutateAsync(id)} color="red" loading={deleteAssetMutation.isPending}>
            Delete
          </Button>
        </Group>
      </Card>
    </>
  );
};

export default PlaceCard;
