import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';


interface Props {
  
}

const Root: React.FC<Props> = () => {
  return (
    <>
    <Navbar/>
    <main>
    <Outlet/>
    </main>
    </>
  );
};

export default Root;