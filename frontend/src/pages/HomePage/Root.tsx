import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import { useTokenStore } from '../../store/useTokenStore';
import { getAuthToken } from '../../util/auth';


interface Props {
  
}

const Root: React.FC<Props> = () => {
  // const setToken = useTokenStore((state) => state.setToken);
  // useEffect(() => {
  //   setToken(getAuthToken())
  // }, [])
  
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