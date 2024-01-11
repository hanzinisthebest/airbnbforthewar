
import { ActionIcon, Button, Group, Menu, Modal, Text, UnstyledButton } from '@mantine/core';
import React from 'react';
import { Form, Link, NavLink, Navigate, useNavigate, useRouteLoaderData } from 'react-router-dom';
import {IconHome , IconMenu2, IconSearch, IconSettings, IconUserCircle, IconWorld} from '@tabler/icons-react'
import ChangeLanguage from './ChangeLanguage';
import { useDisclosure, useHeadroom } from '@mantine/hooks';
import CreatePlace from '../CreatePlacePage/CreatePlace';
import { useTokenStore } from '../../store/useTokenStore';

interface Props {
  
}

const Navbar: React.FC<Props> = () => {
  const [opened, { toggle  , open ,close}] = useDisclosure();
  const navigate = useNavigate();
  const ownerId = '65647676ae692b64bc0c8d93';
  const token = useTokenStore((state) => state.token);
  const setToken = useTokenStore((state) => state.setToken);
  
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
          <Modal opened={opened} onClose={close} >
         <CreatePlace close={close}/>
         </Modal>
            {token?<Button variant="subtle" color="gray" radius="xl" onClick={() => navigate(`myassets/:${ownerId}`)}>Your Assets</Button>:''}
            {token?<Button variant="subtle" color="gray" radius="xl" onClick={open}>Airbnb your home</Button>:''}
            {token ?< Button onClick={()=> {
             setToken('');
            localStorage.removeItem('token');
            navigate('/');}}>
              Logout
            </Button>:''}
            {/* <Modal opened={opened} onClose={close} size="100%">
                <ChangeLanguage />
            </Modal>
            <ActionIcon variant="subtle" aria-label="Language" color="gray" radius="xl" size="xl" onClick={open}>
                <IconWorld />
            </ActionIcon> */}
            {!token?<Menu shadow="md" width={200}>
              <Menu.Target>
                <Button rightSection={<IconUserCircle size={30} />} leftSection={<IconMenu2 size={20} />} variant="outline" color="gray" size="sm" radius="lg"/>
              </Menu.Target>

              <Menu.Dropdown>
                <Menu.Item fw={700} onClick={() => navigate("/sign-up")} >Sign Up</Menu.Item>
                <Menu.Item onClick={() => navigate("/login")} >Log in</Menu.Item>
                <Menu.Divider />  
                {/* <Menu.Item>Gift Cards</Menu.Item>
                <Menu.Item>Help Center</Menu.Item> */}
              </Menu.Dropdown>
            </Menu>:''}
          </Group>
          
        </Group>
  </>
  );
};

export default Navbar;