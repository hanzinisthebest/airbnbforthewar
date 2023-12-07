import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';
import '@mantine/dates/styles.css';
// import '@mantine/form/styles.css';
import {Button , AppShell,  Text , AppShellFooter, AppShellMain, AppShellNavbar, Burger, Group, MantineProvider, Skeleton, UnstyledButton, ActionIcon, Menu ,rem, Modal } from '@mantine/core';
import { Router, clerkPubKey } from './Router';
import { theme } from './theme';
import { Route } from 'react-router-dom';
import { useDisclosure, useHeadroom } from '@mantine/hooks';
import {IconHome , IconMenu2, IconSearch, IconSettings, IconUserCircle, IconWorld} from '@tabler/icons-react'
import Navbar from './pages/HomePage/Navbar';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Root from './pages/HomePage/Root';
import { ClerkProvider } from '@clerk/clerk-react';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';


const queryClient = new QueryClient();
export default function App() {
  const [opened, { toggle  , open ,close}] = useDisclosure();
  const pinned = useHeadroom({ fixedAt: 120 });
  return (
    <QueryClientProvider client={queryClient}>
    <ReactQueryDevtools  />
    <MantineProvider theme={theme}>
    <Router />
    </MantineProvider>
    </QueryClientProvider>

  );
}
