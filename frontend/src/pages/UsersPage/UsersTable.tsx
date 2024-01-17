import { useGetUsers } from '../../hooks/Querys/query-users';
import { useTokenStore } from '../../store/useTokenStore';
import React from 'react';
import Loading from '../Shared/Loading';

interface Props {
  
}

const UsersTable: React.FC<Props> = () => {
    const token = useTokenStore((state) => {;
    return state.token});
const { isLoading, error, data } = useGetUsers(token?token:'');
  if (isLoading) {
    return <Loading />;
  }

  if(error){
    return <h1>{error.message}</h1>
  }
    if(!data){
    return <h1>empty</h1>;
  }
  console.log(data);
  return (
    <div>
      <h1>data</h1>
    </div>
  );
};

export default UsersTable;