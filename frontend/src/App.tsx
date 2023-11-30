import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';
import '@mantine/dates/styles.css';
// import '@mantine/form/styles.css';
import {Button , AppShell,  Text , AppShellFooter, AppShellMain, AppShellNavbar, Burger, Group, MantineProvider, Skeleton, UnstyledButton, ActionIcon, Menu ,rem, Modal } from '@mantine/core';
import { Router } from './Router';
import { theme } from './theme';
import { Route } from 'react-router-dom';
import { useDisclosure, useHeadroom } from '@mantine/hooks';
import {IconHome , IconMenu2, IconSearch, IconSettings, IconUserCircle, IconWorld} from '@tabler/icons-react'
import Navbar from './pages/HomePage/Navbar';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Root from './pages/HomePage/Root';



export default function App() {

  const queryClient = new QueryClient();
  const [opened, { toggle  , open ,close}] = useDisclosure();
  const pinned = useHeadroom({ fixedAt: 120 });
  return (
    <QueryClientProvider client={queryClient}>
    <MantineProvider theme={theme}>
      {/*<AppShell header={{ height: 60, collapsed: !pinned, offset: false }} padding="md">
      <AppShell.Header>
       <Navbar/>
      </AppShell.Header>
      <AppShell.Main pt={`calc(${rem(60)} + var(--mantine-spacing-md))`}>
        <Router />
      </AppShell.Main>
  </AppShell> */}
    <Router />
    </MantineProvider>
    </QueryClientProvider>

  );
}
