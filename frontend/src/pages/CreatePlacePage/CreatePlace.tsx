import {AssetToAdd} from '@/models/assets';
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
import { queryClient } from '../../util/queryClinet';
import { useTokenStore } from '../../store/useTokenStore';
// import { useCreateAsset } from '../../hooks/Querys/query-assets';
interface Props {
  close:()=>void
}

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

export function getDatesBetween(start: Date, end: Date): Date[] {
  const dates: Date[] = [];
  let currentDate = new Date(start);

  while (currentDate <= end) {
    dates.push(new Date(currentDate));
    currentDate.setDate(currentDate.getDate() + 1);
  }

  return dates;
}

const CreatePlace: React.FC<Props> = ({close}) => {
  const token = useTokenStore((state) => state.token);
  const form = useForm<AssetToAdd>({
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
const addAssetMutation=  useMutation({
    mutationFn:()=>addAsset(form.values, token?token:''),
    onSuccess: () => {
        // Invalidates cache and refetch 
        queryClient.invalidateQueries({queryKey:["assets"]});
    }
})
// const mutateAsync = useCreateAsset;
  const onSubmit = async (values:AssetToAdd) => {
    form.values.availability = getDatesBetween(values.availability[0],values.availability[1]);
    // const {data}=useCreateAsset(values,token?token:'');
    // console.log(data);
    // addAssetMutation.mutateAsync(values,token);
    addAssetMutation.mutateAsync(values,token?token:'');
  };

  
  return (
    <Box maw={340} mx="auto" >
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
          <Button 
          // loading={addAssetMutation.isPending} 
          type="submit" 
          onClick={close}>Create</Button>
        </Group>
      </form>
    </Box>
  );
};

export default CreatePlace;
