import { logUser } from '../../api/api-users';
import { loginUser } from '@/models/user';
import { useTokenStore } from '../../store/useTokenStore';
import { Button, Paper, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import { useMutation } from '@tanstack/react-query';
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
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
const location = useLocation();
const from = location.state?.from?.pathname || "/";
  const onSubmit = async (values:loginUser) => {
   const {accessToken,roles} = await logUserMutation.mutateAsync(values).then((response) => {
      // const accessToken = response.accessToken;
      // const roles = response.roles;
      // console.log(typeof(roles));
      // console.log(accessToken);  // Outputs the accessToken
      return response;
  });
  const token = accessToken;
  console.log(token);
  console.log(roles);
 
  setToken(token);
  setRoles(Object.values(roles).map(Number));
  
  navigate(from, { replace: true });   
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