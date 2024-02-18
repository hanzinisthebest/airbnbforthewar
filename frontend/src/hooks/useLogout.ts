import { userApi } from '../api/api-users';
import { useRolesStore } from '../store/useRolesStore';
import { useTokenStore } from '../store/useTokenStore';
import React from 'react'

export const useLogout = () => {
    const setToken = useTokenStore((state) => state.setToken);
    const setRoles = useRolesStore((state) => state.setRoles);
    const logout = async () => {
        setToken('');
        setRoles(null);
        try {
            const response = await userApi.get('/logout', {
                withCredentials: true
            });
        } catch (err) {
            console.error(err);
        }
    }

    return logout;
}
export default useLogout;