import { useFilterStore } from '../../store/useFilterStore';
import { Menu, Button, Text, rem, TextInput, NumberInput, Group } from '@mantine/core';
import { DateInput } from '@mantine/dates';
import { useForm } from '@mantine/form';

interface Props {
  onClose:()=>void;

}
const Place: React.FC<Props> = ({onClose})=> {
  const city = useFilterStore((state) => state.city)
  const setCity = useFilterStore((state) => state.setCity);
    const form = useForm({
        initialValues: {
          place:'',
        },
      });
  return (
    <form onSubmit={form.onSubmit((values) => {console.log(city);
     setCity(values.place); onClose();})}>
   <TextInput
      size="md"
      label="City input"
      placeholder="City"
      {...form.getInputProps('place')}
    />

    

    <Group justify="flex-end" mt="md">
      <Button type="submit">Submit</Button> 
    </Group>
  </form>
  );
}
export default Place;