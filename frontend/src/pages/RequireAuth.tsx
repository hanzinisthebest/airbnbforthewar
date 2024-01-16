import { useRolesStore } from '../store/useRolesStore';
import { useTokenStore } from '../store/useTokenStore';
import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router';

interface Props {
  allowedRoles:number[]
}

const RequireAuth: React.FC<Props> = ({allowedRoles}) => {
  const token = useTokenStore((state) => state.token);
  const roles = useRolesStore((state) => state.roles);
  const location = useLocation();
  return (
    token
    ? (roles?.find((role: number) => allowedRoles?.includes(role))
        ? <Outlet />
        : <Navigate to="/login" state={{ from: location }} replace />)
    : <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default RequireAuth;