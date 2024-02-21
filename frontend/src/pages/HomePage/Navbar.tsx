import {
  ActionIcon,
  Button,
  Group,
  Menu,
  Modal,
  Text,
  UnstyledButton,
  useComputedColorScheme,
  useMantineColorScheme,
} from '@mantine/core';
import React, { useState } from 'react';
import { Form, Link, NavLink, Navigate, useNavigate, useRouteLoaderData } from 'react-router-dom';
import {
  IconArrowsLeftRight,
  IconHome,
  IconMenu2,
  IconMoon,
  IconSearch,
  IconSettings,
  IconSun,
  IconUserCircle,
  IconWorld,
} from '@tabler/icons-react';
import ChangeLanguage from './ChangeLanguage';
import { useDisclosure, useHeadroom } from '@mantine/hooks';
import CreatePlace from '../CreatePlacePage/CreatePlace';
import { useTokenStore } from '../../store/useTokenStore';
import { useRolesStore } from '../../store/useRolesStore';
import { ROLES_LIST } from '../../Router';
import useLogout from '../../hooks/useLogout';
import classes from './Navbar.module.css';
import cx from 'clsx';
import Guests from '../GeustsPage/Gusets';
import Time from '../TimePage/Time';
import Place from '../PlacePage/Place';
interface Props {}

const Navbar: React.FC<Props> = () => {
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme('light', { getInitialValueInEffect: true });
  const [opened, { toggle, open, close }] = useDisclosure();
  const [openedGuests, handlersGuests] = useDisclosure();
  const [openedPlace, handlersPlace] = useDisclosure();
  const navigate = useNavigate();
  const ownerId = '65647676ae692b64bc0c8d93';
  const token = useTokenStore((state) => state.token);
  const setToken = useTokenStore((state) => state.setToken);
  const roles = useRolesStore((state) => state.roles);
  const setRoles = useRolesStore((state) => state.setRoles);
  const logout = useLogout();
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenGuests, setIsOpenGuests] = useState(false);
  const [isOpenPlace, setIsOpenPlace] = useState(false);
  const signOut = async () => {
    await logout();
    navigate('/');
  };
  return (
    <>
      <Group justify="space-between" mt={2}>
        <UnstyledButton ml={80}>
          <Group gap={-5} justify="flex-start">
            <IconHome size="50" color="#F06595" />
            <Text size="xl" color="#F06595" fw={700} mt={5} onClick={() => navigate('/')}>
              airbnb
            </Text>
          </Group>
        </UnstyledButton>
        <Button.Group>
          <Menu shadow="md" width={200} opened = {isOpenPlace}>
            <Menu.Target>
              <Button variant="default" radius="xl" size="md" onClick={()=>setIsOpenPlace(!isOpenPlace)}>
                Anywhere
              </Button>
            </Menu.Target>

            <Menu.Dropdown>
              <Place onClose={() => setIsOpenPlace(false)} />
            </Menu.Dropdown>
          </Menu>
          <Menu shadow="md" width={200}  opened={isOpen}>
            <Menu.Target>
              <Button variant="default" size="md" onClick={()=>setIsOpen(!isOpen)}>
                Any week
              </Button>
            </Menu.Target>

            <Menu.Dropdown >
              <Time onClose={() => setIsOpen(false)}/>
            </Menu.Dropdown>
          </Menu>

          <Menu shadow="md" width={200} opened = {isOpenGuests}>
            <Menu.Target>
              <Button variant="default" radius="xl" size="md" rightSection={<IconSearch />} onClick={()=>setIsOpenGuests(!isOpenGuests)}>
                Add guests
              </Button>
            </Menu.Target>

            <Menu.Dropdown>
              <Guests onClose={() => setIsOpenGuests(false)}/>
            </Menu.Dropdown>
          </Menu>
        </Button.Group>
        <Group mr={80} gap="xs">
          <Modal opened={opened} onClose={close}>
            <CreatePlace close={close} />
          </Modal>
          {token ? (
            roles?.find((role: number) => role == ROLES_LIST.Admin) ? (
              <Button variant="subtle" color="gray" radius="xl" onClick={() => navigate('/users')}>
                users
              </Button>
            ) : (
              ''
            )
          ) : (
            ''
          )}
          {token ? (
            <Button
              variant="subtle"
              color="gray"
              radius="xl"
              onClick={() => navigate(`myassets/:${ownerId}`)}
            >
              Your Assets
            </Button>
          ) : (
            ''
          )}
          {token ? (
            <Button variant="subtle" color="gray" radius="xl" onClick={open}>
              Airbnb your home
            </Button>
          ) : (
            ''
          )}
          {token ? <Button onClick={signOut}>Logout</Button> : ''}

          {/* <Modal opened={opened} onClose={close} size="100%">
                <ChangeLanguage />
            </Modal>
            <ActionIcon variant="subtle" aria-label="Language" color="gray" radius="xl" size="xl" onClick={open}>
                <IconWorld />
            </ActionIcon> */}
          {!token ? (
            <Menu shadow="md" width={200}>
              <Menu.Target>
                <Button
                  rightSection={<IconUserCircle size={30} />}
                  leftSection={<IconMenu2 size={20} />}
                  variant="outline"
                  color="gray"
                  size="sm"
                  radius="lg"
                />
              </Menu.Target>

              <Menu.Dropdown>
                <Menu.Item fw={700} onClick={() => navigate('/sign-up')}>
                  Sign Up
                </Menu.Item>
                <Menu.Item onClick={() => navigate('/login')}>Log in</Menu.Item>
                <Menu.Divider />
                {/* <Menu.Item>Gift Cards</Menu.Item>
                <Menu.Item>Help Center</Menu.Item> */}
              </Menu.Dropdown>
            </Menu>
          ) : (
            ''
          )}

          <ActionIcon
            onClick={() => setColorScheme(computedColorScheme === 'light' ? 'dark' : 'light')}
            variant="default"
            size="xl"
            aria-label="Toggle color scheme"
          >
            <IconSun className={cx(classes.icon, classes.light)} stroke={1.5} />
            <IconMoon className={cx(classes.icon, classes.dark)} stroke={1.5} />
          </ActionIcon>
        </Group>
      </Group>
    </>
  );
};

export default Navbar;
