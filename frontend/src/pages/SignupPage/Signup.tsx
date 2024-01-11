import { addUser } from '../../api/api-users';
import { userToAdd } from '@/models/user';
import { Button, Checkbox, Paper, TextInput } from '@mantine/core';
import { DatePicker, DatePickerInput } from '@mantine/dates';
import { useForm } from '@mantine/form';
import { useMutation } from '@tanstack/react-query';
import { queryClient } from '../../util/queryClinet';
import React from 'react';
import { redirect, useNavigate } from 'react-router-dom';
import { useTokenStore } from '../../store/useTokenStore';

interface Props {
  
}

const Signup: React.FC<Props> = () => {
  const setToken = useTokenStore((state) => state.setToken);
  const form = useForm<userToAdd>({
    initialValues: {
      firstName: '',
      lastName: '',
      username: '',
      email: '',
      password: '',
      birthDate: new Date(),
      isRenter: false,
      phone: '',
    },
  });
  const navigate = useNavigate();
  const addUserMutation = useMutation({
    mutationFn:addUser, 
    // onSuccess: (data) => {
    //     // Invalidates cache and refetch 
    //     queryClient.invalidateQueries({queryKey:["assets"]});

    //   }
})
  const onSubmit = async (values:userToAdd) => {
    console.log(values);
   const token = await addUserMutation.mutateAsync(values).then((response) => {
      const accessToken = response.accessToken;
      console.log(accessToken);  // Outputs the accessToken
      return accessToken
  });
  localStorage.setItem('token', token);
  setToken(token);
    navigate('/');
  };

  return (
    <Paper  shadow="xs">
      <form onSubmit={form.onSubmit(onSubmit)}>
          <TextInput 
          required
          withAsterisk
          label="First Name"
          placeholder="Enter First Name"
          {...form.getInputProps('firstName')} />
          <TextInput 
          required
          withAsterisk
          label="Last Name"
          placeholder="Enter Last Name"
          {...form.getInputProps('lastName')} />
          <TextInput    required
          withAsterisk
          label="username"
          placeholder="Enter username"
          {...form.getInputProps('username')} />
          <TextInput 
          required
          withAsterisk
          label="email"
          placeholder="Enter email"
          {...form.getInputProps('email')} />
          <TextInput   required
          withAsterisk
          label="password"
          placeholder="Enter password"
          {...form.getInputProps('password')} />
          <DatePickerInput
          required 
          withAsterisk
          label="birthDate"
          placeholder="Enter birthDate"
          {...form.getInputProps('birthDate')}/>
          <TextInput   required 
          withAsterisk
          label="phone"
          placeholder="Enter phone"
          {...form.getInputProps('phone')} />
        <Checkbox
          label="are you the renter?"
          {...form.getInputProps('isRenter', { type: 'checkbox' })}
        />
          <Button type = "submit"  loading={addUserMutation.isPending} style={{ marginTop: 15 }}>Sign Up</Button>
      </form>
    </Paper>
  );
};

export default Signup;