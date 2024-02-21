import { useFilterStore } from '../../store/useFilterStore';
import { Menu, Button, Text, rem, TextInput, NumberInput, Group } from '@mantine/core';
import { useForm } from '@mantine/form';

interface Props {
  onClose:()=>void;

}
const Guests: React.FC<Props> = ({onClose})=> {
  const setGuests = useFilterStore((state) => state.setGuests);
    const form = useForm({
        initialValues: {
          grownupsNum: 0 ,
          childrenNum: 0,
          babies: 0,
        },
      });
  return (
    <form onSubmit={form.onSubmit((values) => {console.log(values);
    ;onClose()})}>
    <NumberInput
      variant="unstyled"
      size="md"
      label="grownupsNum"
      placeholder="Input placeholder"
      {...form.getInputProps('grownupsNum')}
    />
     <NumberInput
      variant="unstyled"
      size="md"
      label="childrenNum"
      placeholder="Input placeholder"
      {...form.getInputProps('childrenNum')}
    />

<NumberInput
      variant="unstyled"
      size="md"
      label="babies"
      placeholder="Input placeholder"
      {...form.getInputProps('babies')}
    />

    <Group justify="flex-end" mt="md">
      <Button type="submit">Submit</Button>
    </Group>
  </form>
  );
}
export default Guests;