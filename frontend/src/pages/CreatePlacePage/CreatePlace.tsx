import Asset from '@/models/assets';
import React, { useState } from 'react';
// import { useForm } from 'react-hook-form';
import { TextInput, NumberInput, Checkbox, Button, Box, Group, Title } from '@mantine/core';
import { DateInput, DatePicker, DatePickerInput } from '@mantine/dates';
import { useForm } from '@mantine/form';
// import { useQueryClient } from 'react-query';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { addAsset } from '../../api/api-assets';
interface Props {}

// export const useCreateAsset = () => {
//   const queryClient = useQueryClient();
//   return useMutation<Asset, Error, void, unknown>(async (newAsset: Asset) :Promise<Asset> => {
//     const response = await axios.post('http://localhost:4000/api/assets', newAsset);
//     return response.data;
//   }, {
//     onSuccess: () => {
//       queryClient.invalidateQueries('assets');
//     },
//   });
// };

function getDatesBetween(start: Date, end: Date): Date[] {
  const dates: Date[] = [];
  let currentDate = new Date(start);

  while (currentDate <= end) {
    dates.push(new Date(currentDate));
    currentDate.setDate(currentDate.getDate() + 1);
  }

  return dates;
}

const CreatePlace: React.FC<Props> = ({}) => {
  console.log('here');
  
  const queryClient = useQueryClient();
  const form = useForm<Asset>({
    initialValues: {
      grownupsNum: 0,
      childrenNum: 0,
      babies: 0,
      city: '',
      typeOfProperty: '',
      isBreakfast: false,
      availability: [],
      ownerId:'65647676ae692b64bc0c8d93'
    },
  });
  const navigate = useNavigate();
  // const createAssetMutation = useCreateAsset();
  const addAssetMutation = useMutation({
    mutationFn:addAsset, 
    onSuccess: (data) => {
        // Invalidates cache and refetch 
        // queryClient.setQueryData(['assets', data.id], data)
        queryClient.invalidateQueries({queryKey:["assets"]});
        // queryClient.refetchQueries({ queryKey: ['assets'] });
    }
})


  const onSubmit = async (values: Asset) => {
    form.values.availability = getDatesBetween(values.availability[0],values.availability[1]);
    console.log(values);
    addAssetMutation.mutateAsync(values);
    // navigate('/');
    // try {
    //   form.values.availability = getDatesBetween(values.availability[0],values.availability[1]);
    //   console.log(values);
    //   const response = await addAsset(values);
    //   console.log(response.data);
    //   navigate('/');
    // } catch (error) {
    //   console.error(error);
    // }
  };

  
  return (
    <Box maw={340} mx="auto" mt={100}>
      <form onSubmit={form.onSubmit(onSubmit)}>
        <Title>Create an asset</Title>
        <NumberInput
        required
          withAsterisk
          label="Number of adults"
          placeholder="Enter number of adults"
          {...form.getInputProps('grownupsNum')}
        />
        <NumberInput
        required
          withAsterisk
          label="Number of children"
          placeholder="Enter number of children"
          {...form.getInputProps('childrenNum')}
        />
        <NumberInput
        required
          withAsterisk
          label="Number of babies"
          placeholder="Enter number of babies"
          {...form.getInputProps('babies')}
        />
        <TextInput
          required
          withAsterisk
          label="City"
          placeholder="Enter city"
          {...form.getInputProps('city')}
        />
        <TextInput
          withAsterisk
          label="Type of property"
          placeholder="Enter type of property"
          {...form.getInputProps('typeOfProperty')}
        />
         <DatePickerInput
         required
         withAsterisk
      type="range"
      label="Pick dates range"
      placeholder="Pick dates range"
      {...form.getInputProps('availability')}
      />

        <Checkbox
          label="Is breakfast provided?"
          {...form.getInputProps('isBreakfast', { type: 'checkbox' })}
        />
        <Group justify="flex-end" mt="md">
          <Button loading={addAssetMutation.isPending} type="submit">Create</Button>
        </Group>
      </form>
    </Box>
  );
};

export default CreatePlace;
