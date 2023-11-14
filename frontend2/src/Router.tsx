import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/HomePage/Home';
import Login from './pages/LoginPage/Login';
import Signup from './pages/SignupPage/Signup';
import PlaceDeatile from './pages/PlaceDeatilePage/PlaceDeatile';

const router = createBrowserRouter([
        
         
  { path:'/', element: <Home /> },
  {
    path: "login",
    element: <Login/>,
  },
  {
    path: "signup",
    element: <Signup/>,
  },
  {
    path: "asset/:id",
    element: <PlaceDeatile/>,
  },
  // {
  //   path: "products/:id",
  //   element: <DeatilesPage />,
  // },

]);


export function Router() {
  return <RouterProvider router={router} />;
}
