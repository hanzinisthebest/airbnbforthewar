import useRefreshToken from '../hooks/useRefreshToken';
import { Outlet } from "react-router-dom";
import React, { useEffect, useState } from 'react'
import Loading from './Shared/Loading';
import { useTokenStore } from '../store/useTokenStore';

const PersistLogin = () => {
    const [isLoading, setIsLoading] = useState(true);
    const refresh = useRefreshToken();
    const token = useTokenStore((state) => state.token);
    useEffect(() => {
        let isMounted = true;

        const verifyRefreshToken = async () => {
            try {
                await refresh();
            }
            catch (err) {
                console.error(err);
            }
            finally {
                isMounted && setIsLoading(false);
            }
        }

        // persist added here AFTER tutorial video
        // Avoids unwanted call to verifyRefreshToken
        !token  ? verifyRefreshToken() : setIsLoading(false);

        return () => {isMounted = false};
    }, [])

    useEffect(() => {
        console.log(`isLoading: ${isLoading}`)
        console.log(`aT: ${JSON.stringify(token)}`)
    }, [isLoading])
  return (
    <>
    {
        isLoading? <Loading/>:<Outlet/>
    }
    </>
  )
}

export default PersistLogin
