import { loginUser } from '@/models/user';
import { Button, Paper, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import React from 'react';

interface Props {
  
}

const Login: React.FC<Props> = () => {
  const form = useForm<loginUser>({
    initialValues: {
      username: '',
      password: '',
    },
  });
  const onSubmit = async (values:loginUser) => {
    console.log(values);

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