import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/HomePage/Home';
import Login from './pages/LoginPage/Login';
import Signup from './pages/SignupPage/Signup';

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
  // {
  //   path: "products/:id",
  //   element: <DeatilesPage />,
  // },

]);


export function Router() {
  return <RouterProvider router={router} />;
}
