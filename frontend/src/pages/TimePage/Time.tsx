import { AssetToAdd } from '@/models/assets';
import { Menu, Button, Text, rem, TextInput, NumberInput, Group } from '@mantine/core';
import { DateInput, DatePickerInput } from '@mantine/dates';
import { useForm } from '@mantine/form';
import { IconCalendar } from '@tabler/icons-react';
import { getDatesBetween } from '../CreatePlacePage/CreatePlace';
import { useFilterStore } from '../../store/useFilterStore';


type AvailabilityOnly = Pick<AssetToAdd, 'availability'>;
interface Props {
  onClose:()=>void;

}
const Time: React.FC<Props> = ({onClose}) => {
  const setDates = useFilterStore((state) => state.setDates);
  const dates = useFilterStore((state) => state.dates);
  const availabilityForm = useForm<AvailabilityOnly>({
    initialValues: {
      availability: [],
    },
});
const icon = <IconCalendar style={{ width: rem(18), height: rem(18) }} stroke={1.5} />;
  return (
    <form onSubmit={availabilityForm.onSubmit((values) => {
      console.log(values);
      if(values.availability.length>1){
        values.availability = getDatesBetween(values.availability[0],values.availability[1])
        console.log(values);
        console.log(dates);
        setDates(values.availability)
        onClose();
      }
      })}>
    <DatePickerInput
      required
      leftSection={icon}
      type="range"
      label="Pick dates range"
      placeholder="Pick dates range"
      onClick={(event) => event.stopPropagation()}
      {...availabilityForm.getInputProps('availability')}
      />

    <Group justify="flex-end" mt="md">
      <Button type="submit">Submit</Button>
    </Group>
  </form>
  );
}
export default Time;