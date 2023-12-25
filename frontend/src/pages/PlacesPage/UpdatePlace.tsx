import {Asset} from '@/models/assets';
import React, { useEffect, useState } from 'react';
// import { useForm } from 'react-hook-form';
import { TextInput, NumberInput, Checkbox, Button, Box, Group, Title } from '@mantine/core';
import { DateInput, DatePicker, DatePickerInput } from '@mantine/dates';
import { useForm } from '@mantine/form';
// import { useQueryClient } from 'react-query';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { addAsset, editAsset } from '../../api/api-assets';
import { queryClient } from '../../util/queryClinet';
import Loading from '../Shared/Loading';
import { MyParams } from '../PlaceDeatilePage/PlaceDeatile';
import { useGetAssetsById } from '../../Querys/query-assets';
interface Props {
  close: () => void;
  id: string;
}

function getDatesBetween(start: Date, end: Date): Date[] {
  const dates: Date[] = [];
  let currentDate = new Date(start);

  while (currentDate <= end) {
    dates.push(new Date(currentDate));
    currentDate.setDate(currentDate.getDate() + 1);
  }

  return dates;
}

const UpdatePlace: React.FC<Props> = ({ close, id }) => {
  const { isLoading, error, data } = useGetAssetsById(id);
  const EditAssetMutation = useMutation({
    mutationFn: editAsset,
    onSuccess: () => {
      // Invalidates cache and refetch
      queryClient.invalidateQueries({ queryKey: ['assets'] });
    },
  });
  const form = useForm<Asset>({
    initialValues: {
      _id: '',
      grownupsNum: 0,
      childrenNum: 0,
      babies: 0,
      city: '',
      typeOfProperty: '',
      isBreakfast: false,
      availability: [],
      ownerId: '65647676ae692b64bc0c8d93',
    },
  });

  useEffect(() => {
    if (data) {
      console.log(data.availability);
      let dates: Date[] = [
        new Date(data.availability[0]),
        new Date(data.availability[data.availability.length - 1]),
      ];
      form.setValues({
        _id: data._id,
        grownupsNum: data.grownupsNum,
        childrenNum: data.childrenNum,
        babies: data.babies,
        city: data.city,
        typeOfProperty: data.typeOfProperty,
        isBreakfast: data.isBreakfast,
        availability: dates,
        ownerId: '65647676ae692b64bc0c8d93',
      });
    }
  }, [data]);
  if (isLoading) {
    return <Loading />;
  }
  if (!data) {
    return <h1>empty</h1>;
  }

  const onSubmit = async (values: Asset) => {
    form.values.availability = getDatesBetween(values.availability[0], values.availability[1]);
    console.log(data.availability);
    console.log(values);
    EditAssetMutation.mutateAsync(values);
  };

  return (
    <Box maw={340} mx="auto">
      <form onSubmit={form.onSubmit(onSubmit)}>
        <Title>Update the asset</Title>
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
          <Button loading={EditAssetMutation.isPending} type="submit" onClick={close}>
            Update
          </Button>
        </Group>
      </form>
    </Box>
  );
};

export default UpdatePlace;
