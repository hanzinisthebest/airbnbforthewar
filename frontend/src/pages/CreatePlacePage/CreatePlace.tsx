import Asset from '@/models/assets';
import React from 'react';
import { useForm } from 'react-hook-form';
import { TextInput, NumberInput, Checkbox, Button, Box } from '@mantine/core';
import { DatePicker, DatePickerInput } from '@mantine/dates';
interface Props {}

const CreatePlace: React.FC<Props> = () => {
  const { register, handleSubmit, watch, setValue } = useForm<Asset>({
    defaultValues: {
      // other fields...
      availability: null,
    },
  });

  const onSubmit = (data: Asset) => {
    console.log(data);
  };

  return (
    <Box maw={340} mx="auto" radioGroup="md" p="xl">
      <form onSubmit={handleSubmit(onSubmit)}>
        <NumberInput
          label="Number of adults"
          value={watch('grownupsNum')}
          onChange={(value) => setValue('grownupsNum', Number(value))}
        />
        <NumberInput
          label="Number of children"
          value={watch('childrenNum')}
          onChange={(value) => setValue('childrenNum', Number(value))}
        />
        <NumberInput
          label="Number of babies"
          value={watch('babies')}
          onChange={(value) => setValue('babies', Number(value))}
        />
        <TextInput label="City" {...register('city')} />
        <TextInput label="Type of property" {...register('typeOfProperty')} />
        <Checkbox label="Is breakfast provided?" {...register('isBreakfast')} />
        <Checkbox label="Are pets allowed?" {...register('arePetsAllowed')} />
        {/* <DatePicker
  label="Availability"
  value={watch('availability') || []}
  onChange={(value) => setValue('availability', value)}
  multiple
/> */}

        <DatePickerInput mt="md" label="Pick date" placeholder="Pick date" />
        <Button type="submit">Submit</Button>
      </form>
    </Box>
  );
};

export default CreatePlace;
