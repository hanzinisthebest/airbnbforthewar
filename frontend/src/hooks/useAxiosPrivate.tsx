import { axiosPrivate } from '../api/api-users';
import React, { useEffect } from 'react'
import useRefreshToken from './useRefreshToken';
import { useTokenStore } from '../store/useTokenStore';

const useAxiosPrivate = () => {
  const refresh = useRefreshToken();
  const token = useTokenStore((state) => state.token);
  const setToken = useTokenStore((state) => state.setToken);
  // const { auth } = useAuth();

  useEffect(() => {

      const requestIntercept = axiosPrivate.interceptors.request.use(
          config => {
              if (!config.headers['Authorization']) {
                  config.headers['Authorization'] = `Bearer ${token}`;
              }
              return config;
          }, (error) => Promise.reject(error)
      );

      const responseIntercept = axiosPrivate.interceptors.response.use(
          response => response,
          async (error) => {
              const prevRequest = error?.config;
              if (error?.response?.status === 403 && !prevRequest?.sent) {
                  prevRequest.sent = true;
                  const newAccessToken = await refresh();
                  prevRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;
                  console.log(prevRequest);
                  return axiosPrivate(prevRequest);
              }
              return Promise.reject(error);
          }
      );

      return () => {
          axiosPrivate.interceptors.request.eject(requestIntercept);
          axiosPrivate.interceptors.response.eject(responseIntercept);
      }
  }, [token, refresh])

  return axiosPrivate;
}

export default useAxiosPrivate
