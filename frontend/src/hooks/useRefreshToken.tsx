import { useTokenStore } from '../store/useTokenStore';
import { userApi } from '../api/api-users';
import { useRolesStore } from '../store/useRolesStore';
// import useAuth from './useAuth';

const useRefreshToken = () => {
    const token = useTokenStore((state) => state.token);
    const setToken = useTokenStore((state) => state.setToken);
    const setRoles = useRolesStore((state) => state.setRoles);
    const refresh = async () => {
        const response = await userApi.get('/refresh', {
            withCredentials: true
        });
        console.log(token);
        
        setToken(response.data.accessToken);
        setRoles(response.data.roles)
        console.log(token);
        // setAuth(prev => {
        //     console.log(JSON.stringify(prev));
        //     console.log(response.data.accessToken);
        //     return { ...prev, accessToken: response.data.accessToken }
        // });
        return response.data.accessToken;
    }
    return refresh;
};

export default useRefreshToken;