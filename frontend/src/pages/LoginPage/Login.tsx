import { logUser } from '../../api/api-users';
import { loginUser } from '@/models/user';
import { useTokenStore } from '../../store/useToken';
import { Button, Paper, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import { useMutation } from '@tanstack/react-query';
import React from 'react';
import { useNavigate } from 'react-router-dom';

interface Props {
  
}

const Login: React.FC<Props> = () => {
  // const token = useTokenStore((state) => state.token);
  const setToken = useTokenStore((state) => state.setToken);
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
   const token = await logUserMutation.mutateAsync(values).then((response) => {
      const accessToken = response.accessToken;
      // console.log(accessToken);  // Outputs the accessToken
      return accessToken
  });
  
  localStorage.setItem('token', token);
  setToken(token);
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