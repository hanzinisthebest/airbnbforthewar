
import { ActionIcon, Button, Group, Menu, Modal, Text, UnstyledButton } from '@mantine/core';
import React from 'react';
import { Link, NavLink, Navigate, useNavigate } from 'react-router-dom';
import {IconHome , IconMenu2, IconSearch, IconSettings, IconUserCircle, IconWorld} from '@tabler/icons-react'
import ChangeLanguage from './ChangeLanguage';
import { useDisclosure, useHeadroom } from '@mantine/hooks';

interface Props {
  
}

const Navbar: React.FC<Props> = () => {
  const [opened, { toggle  , open ,close}] = useDisclosure();
  const navigate = useNavigate();
  return (
     <>
         <Group justify="space-between" mt={2}>
          <UnstyledButton ml={80}>
          <Group gap={-5} justify="flex-start" >
          
            <IconHome size="50" color="#F06595"/>
            <Text size="xl" color="#F06595" fw={700} mt={5} onClick={() => navigate('/')}>airbnb</Text>
          </Group>
          </UnstyledButton>
          <Button.Group >
            <Button variant="default" radius="xl" size="md">Anywhere</Button>
            <Button variant="default" size="md">Any week</Button>
            <Button variant="default" radius="xl" size="md" rightSection={<IconSearch/>}>Add guests</Button>
          </Button.Group>
          <Group  mr={80} gap="xs">
            <Button variant="subtle" color="gray" radius="xl" onClick={() => navigate('/create-asset')}>Airbnb your home</Button>
            <Modal opened={opened} onClose={close} size="100%">
                <ChangeLanguage />
            </Modal>
            <ActionIcon variant="subtle" aria-label="Language" color="gray" radius="xl" size="xl" onClick={open}>
                <IconWorld />
            </ActionIcon>
            <Menu shadow="md" width={200}>
              <Menu.Target>
                <Button rightSection={<IconUserCircle size={30} />} leftSection={<IconMenu2 size={20} />} variant="outline" color="gray" size="sm" radius="lg"/>
              </Menu.Target>

              <Menu.Dropdown>
                <Menu.Item fw={700} >Sign Up</Menu.Item>
                <Menu.Item>Log in</Menu.Item>
                <Menu.Divider />  
                <Menu.Item>Gift Cards</Menu.Item>
                <Menu.Item>Help Center</Menu.Item>
              </Menu.Dropdown>
            </Menu>
          </Group>
          
        </Group>
  </>
  );
};

export default Navbar;