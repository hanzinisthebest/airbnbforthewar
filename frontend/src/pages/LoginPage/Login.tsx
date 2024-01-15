import { logUser } from '../../api/api-users';
import { loginUser } from '@/models/user';
import { useTokenStore } from '../../store/useTokenStore';
import { Button, Paper, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import { useMutation } from '@tanstack/react-query';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useRolesStore } from '../../store/useRolesStore';

interface Props {
  
}

const Login: React.FC<Props> = () => {
  // const roles = useRolesStore((state) => state.roles);
  
  const setToken = useTokenStore((state) => state.setToken);
  const setRoles = useRolesStore((state) => state.setRoles);
  const form = useForm<loginUser>({
    initialValues: {
      username: '',
      password: '',
    },
  });
  const logUserMutation = useMutation({
    mutationFn:logUser, 
})
const navigate = useNavigate();
  const onSubmit = async (values:loginUser) => {
    console.log(values);
   const {token,roles} = await logUserMutation.mutateAsync(values).then((response) => {
      const accessToken = response.accessToken;
      const roles = response.roles;
      console.log(typeof(roles));
      // console.log(accessToken);  // Outputs the accessToken
      return {token:accessToken,roles:roles}
  });
  localStorage.setItem('token', token);
  setToken(token);
  setRoles(roles);
  console.log(roles);
  
  navigate('/')    
  };

  return (
    <Paper  shadow="xs">
      <form onSubmit={form.onSubmit(onSubmit)}>
 
          <TextInput   
          required
          withAsterisk
          label="username"
          placeholder="Enter username"
          {...form.getInputProps('username')} />
          <TextInput   
          required
          withAsterisk
          label="password"
          placeholder="Enter password"
          {...form.getInputProps('password')} />
          <Button type = "submit" style={{ marginTop: 15 }}>Log In</Button>
      </form>
    </Paper>
  );
};

export default Login;