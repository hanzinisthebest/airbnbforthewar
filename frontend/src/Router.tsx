import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './Pages/HomePage/Home';
import Login from './Pages/LoginPage/Login';

interface Props {
  
}

const Router: React.FC<Props> = () => {
    const router = createBrowserRouter([
        
         
            { path:'/', element: <Home /> },
            {
              path: "login",
              element: <Login/>,
            },
            // {
            //   path: "products/:id",
            //   element: <DeatilesPage />,
            // },
        
    ]);
  return (
    <RouterProvider router={router} />
  );
};

export default Router;