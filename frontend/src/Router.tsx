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
import RequireAuth from "./pages/RequireAuth";
import UsersTable from "./pages/UsersPage/UsersTable";
const ROLES_LIST = {
  "Admin": 5150,
  "Editor": 1984,
  "User": 2001
}
// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Root />,
//     id: 'root',
//     children: [
//       { index: true, element: <Home /> },
//       {
//         path: 'myassets/:ownerId',
//         element: <MyAssets/>,
//         loader:checkAuthLoader([ROLES_LIST.Editor])
//       },
//       {
//         path: 'asset/:id',
//         element: <PlaceDeatile />,
//       },
//       {
//         path: 'sign-up',
//         element: <Signup />,
//       },
//       {
//         path: 'login',
//         element: <Login/>,
//       },
//     ],
//   },
// ]);

export function Router() {
  return(
    <Routes>
    <Route path="/" element={<Root />} children={
          <>
          <Route path="/" element={<Home/>} />
          <Route element={<RequireAuth allowedRoles={[ROLES_LIST.Admin]} />}>
          <Route path="/myassets/:ownerId" element={<MyAssets/>} />
          </Route>
          <Route path="/users" element={<UsersTable/>} />
          <Route path="sign-up" element={<Signup/>} />
          <Route path="login" element={<Login/>} />
          <Route path="/asset/:id" element={<PlaceDeatile/>} />
          </>
        }
        />
        {/* public routes */}
        {/* <Route path="login" element={<Login />} />
        <Route path= 'sign-up' element={<Signup />} /> */}
        {/* <Route path="linkpage" element={<LinkPage />} />
        <Route path="unauthorized" element={<Unauthorized />} /> */}

        {/* we want to protect these routes */}
        {/* <Route element={<RequireAuth allowedRoles={[ROLES.User]} />}>
          <Route path="/" element={<Home />} />
        </Route>

        <Route element={<RequireAuth allowedRoles={[ROLES.Editor]} />}>
          <Route path="editor" element={<Editor />} />
        </Route>


        <Route element={<RequireAuth allowedRoles={[ROLES.Admin]} />}>
          <Route path="admin" element={<Admin />} />
        </Route>

        <Route element={<RequireAuth allowedRoles={[ROLES.Editor, ROLES.Admin]} />}>
          <Route path="lounge" element={<Lounge />} />
        </Route> */}
    </Routes>
  )
}