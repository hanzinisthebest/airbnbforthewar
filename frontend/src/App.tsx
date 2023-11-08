import { useState } from 'react'

import './App.css'
import Root from './Pages/HomePage/Root';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { QueryClientProvider,QueryClient } from '@tanstack/react-query';
import { ChakraProvider, useMediaQuery } from "@chakra-ui/react";
import Home from './Pages/HomePage/Home';
import Login from './Pages/LoginPage/Login';
import CreateAsset from './Pages/CreateAssetPage/CreateAssetPage';
function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      id: "root",
      children: [
        { index: true, element: <Home /> },
        {
          path: "login",
          element: <Login/>,
        },
        // {
        //   path: "products/:id",
        //   element: <DeatilesPage />,
        // },
        {
          path: "create-asset",
          element: <CreateAsset />,
        }
      ],
    },
  ]);

  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
        <ChakraProvider>
          <RouterProvider router={router} />
        </ChakraProvider>
    </QueryClientProvider>
  )
}

export default App
