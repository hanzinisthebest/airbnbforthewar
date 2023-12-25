// import { Button, ButtonGroup, Card, CardBody, CardFooter, ChakraBaseProvider, Divider, Heading, Image, Stack, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import { Card, Image, Text, Badge, Button, Group, SimpleGrid, Modal } from '@mantine/core';
import { Carousel } from '@mantine/carousel';
import { Link, useNavigate } from 'react-router-dom';
import { IconStar } from '@tabler/icons-react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import classes from '../PlacesPage/UI/PlaceCard.module.css';
import { deleteAsset } from '../../api/api-assets';
import { queryClient } from '../../util/queryClinet';
import { useDisclosure } from '@mantine/hooks';
import UpdatePlace from '../PlacesPage/UpdatePlace';

interface Props {
  id: string;
  name: string;
}
const images = [
  'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
  'https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
  'https://images.unsplash.com/photo-1605774337664-7a846e9cdf17?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
  'https://images.unsplash.com/photo-1554995207-c18c203602cb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
  'https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
];

const AssetCard: React.FC<Props> = ({
  id,
  name
}) => {
  const slides = images.map((image) => (
    <Carousel.Slide key={image}>
      <Image src={image} height={220} />
    </Carousel.Slide>
  ));
  const navigate = useNavigate();
  const [opened, { open, close }] = useDisclosure(false);
  const [openedUpdate, { open:openUpdate, close:closeUpdate }] = useDisclosure(false);
  function handleDelete() {
    deleteAssetMutation.mutateAsync(id);
    close();
  }
  const deleteAssetMutation = useMutation({
    mutationFn: deleteAsset,
    onSuccess: async () => {
      // Invalidates cache and refetch
      await queryClient.invalidateQueries({ queryKey: ['assets'] });
    },
  });
  return (
    <>
      <Modal opened={opened} onClose={close} size="auto" >
        <Text>are you sure you want to delete? </Text>

        <Group mt="xl">
          <Button onClick={handleDelete} loading={deleteAssetMutation.isPending}>delete</Button>
          <Button onClick={close}>cancel</Button>
        </Group>
      </Modal>


      <Modal opened={openedUpdate} onClose={closeUpdate}>
        <UpdatePlace close={closeUpdate} id ={id}/>
      </Modal>
      
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
          <Group justify="space-between" mt="md">
          {/* <Button radius="md" onClick={() => navigate(`/asset/${id}`)}>
            Book now
          </Button> */}
          <Button radius="md" color="green" onClick={openUpdate}>
            update
          </Button>
          <Button radius="md" onClick={open} color="red" >
            Delete
          </Button>
          </Group>
        </Group>
      </Card>
    </>
  );
};

export default AssetCard;
