import { Button, ButtonGroup, Card, CardBody, CardFooter, ChakraBaseProvider, Divider, Heading, Image, Stack, Text } from '@chakra-ui/react';
import React from 'react';

interface Props {
  
}

const PlaceCard: React.FC<Props> = () => {
  return (
    <Card maxW='sm'>
    <CardBody>
      <Image
        src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
        alt='Green double couch with wooden legs'
        borderRadius='lg'
      />
      <Stack mt='6' spacing='3'>
        <Heading size='md' dir='rtl'>ירושלים,רחביה</Heading>
        <Text dir='rtl' display={'inline'} >
        <Text color="black" dir='rtl'  fontWeight="bold">תאריכים:</Text>
        5-22 בנובמבר
      </Text>
      <Text dir='rtl'>
        <Text color="black"  fontWeight="bold">מס חדרים:</Text> 4

      </Text>
      <Text dir={'rtl'}>
        <Text color="black"  fontWeight="bold"> מרחק:</Text> 60 ק"מ
      </Text>
        {/* <Text color='blue.600' fontSize='2xl'>
          $450
        </Text> */}
      </Stack>
    </CardBody>
    <Divider />
    <CardFooter dir='rtl'>
        <Button variant='solid' dir='rtl' colorScheme='blue'>
          פרטים נוספים 
        </Button>
        {/* <Button variant='ghost' colorScheme='blue'>
          Add to cart
        </Button> */}
    </CardFooter>
  </Card>
  );
};

export default PlaceCard;