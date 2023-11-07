import { useState } from 'react'

import './App.css'
import Root from './Pages/HomePage/Root';
import { QueryClientProvider,QueryClient } from '@tanstack/react-query';
import { AppShell, Group, MantineProvider ,Text ,rem } from '@mantine/core';
import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';
import Router from './Router';
import Navbar from './Pages/HomePage/Navbar';
import { theme } from './theme';
import { useHeadroom } from '@mantine/hooks';
import Home from './Pages/HomePage/Home';


function App() {


  const queryClient = new QueryClient();
  const pinned = useHeadroom({ fixedAt: 120 });
  return (
  <QueryClientProvider client={queryClient}>
<MantineProvider theme={theme}>
<AppShell header={{ height: 60, collapsed: !pinned, offset: false }} padding="md">
      <AppShell.Header>
       <Navbar/>
      </AppShell.Header>

      <AppShell.Main pt={`calc(${rem(60)} + var(--mantine-spacing-md))`}>
          <Home />
      </AppShell.Main>
    </AppShell>
    </MantineProvider>
    </QueryClientProvider>
  )
}

export default App
