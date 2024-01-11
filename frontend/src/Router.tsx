import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  RedirectToSignIn,
  SignIn,
  SignUp,
  UserButton,
} from "@clerk/clerk-react";
import { BrowserRouter, Route, RouterProvider, Routes, createBrowserRouter, useNavigate } from "react-router-dom";

import Home from './pages/HomePage/Home';
import Login from './pages/LoginPage/Login';
import Signup from './pages/SignupPage/Signup';
import PlaceDeatile from './pages/PlaceDeatilePage/PlaceDeatile';
import { element } from 'prop-types';

import Root from "./pages/HomePage/Root";
import CreatePlace from "./pages/CreatePlacePage/CreatePlace";
import { QueryClientProvider, useQueryClient } from "@tanstack/react-query";
import MyAssets from "./pages/MyAssetsPage/MyAssets";
import { checkAuthLoader } from './util/auth';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    id: 'root',
    children: [
      { index: true, element: <Home /> },
      {
        path: 'myassets/:ownerId',
        element: <MyAssets/>,
        loader:checkAuthLoader
      },
      {
        path: 'asset/:id',
        element: <PlaceDeatile />,
      },
      {
        path: 'sign-up',
        element: <Signup />,
      },
      {
        path: 'login',
        element: <Login/>,
      },
    ],
  },
]);

export function Router() {
  return <RouterProvider router={router} />
}