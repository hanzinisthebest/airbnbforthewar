import React, { useState } from 'react';
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormLabel,
  Input,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Select,
  Stack,
  Textarea,
} from '@chakra-ui/react';

import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

interface FormData {
  assetID: string;
  grownupsNum: number;
  childrenNum: number;
  babies: number;
  arePetsAllowed: boolean;
  city: string;
  typeOfProperty: string;
  isWifi: boolean;
  isLaundryMachine: boolean;
  isAirConditioner: boolean;
  isKitchen: boolean;
  isTV: boolean;
  isWorkstation: boolean;
  isPool: boolean;
  isFreeParking: boolean;
  isCradle: boolean;
  isGym: boolean;
  isBreakfast: boolean;
  isSmokingAllowed: boolean;
  isElectricCarCharger: boolean;
  isSmokeDetector: boolean;
  isCO2Detector: boolean;
  isWithoutStairs: boolean;
  isAccessibleParkingLot: boolean;
  isEntranceAccessible: boolean;
  isShowerHandrail: boolean;
  isToiletHandrail: boolean;
  isChairInShower: boolean;
  hostLanguage: string;
  availability: Date[];
}

const PropertyForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    assetID: '1',
    grownupsNum: 0,
    childrenNum: 0,
    babies: 0,
    arePetsAllowed: false,
    city: '',
    typeOfProperty: '',
    isWifi: false,
    isLaundryMachine: false,
    isAirConditioner: false,
    isKitchen: false,
    isTV: false,
    isWorkstation: false,
    isPool: false,
    isFreeParking: false,
    isCradle: false,
    isGym: false,
    isBreakfast: false,
    isSmokingAllowed: false,
    isElectricCarCharger: false,
    isSmokeDetector: false,
    isCO2Detector: false,
    isWithoutStairs: false,
    isAccessibleParkingLot: false,
    isEntranceAccessible: false,
    isShowerHandrail: false,
    isToiletHandrail: false,
    isChairInShower: false,
    hostLanguage: '',
    availability: [],
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement | HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;

    setFormData({ ...formData, [name]: newValue });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Assuming formData is defined and contains your form data
    console.log(formData);
  
    // Define the URL of your server
    const serverURL = 'http://localhost:4000/api/assets'; // Update with your server URL
  
    // Send the form data to the server using fetch
    fetch(serverURL, {
      method: 'POST', // Use 'POST' for form submissions
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        // Handle the response data as needed
        console.log('Server response:', data);
      })
      .catch((error) => {
        // Handle errors, e.g., network issues or server errors
        console.error('Error:', error);
      });
  };  

  return (
    <Box>
      <form onSubmit={handleSubmit}>
        <Stack spacing={4}>
        <FormControl isRequired>
            <FormLabel>City</FormLabel>
            <Input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
            />
          </FormControl>

          <FormControl isRequired>
            <FormLabel>Type of Property</FormLabel>
              <Select
                name="typeOfProperty"
                value={formData.typeOfProperty}
                onChange={handleChange}
              >
                <option value="house">House</option>
                <option value="apartment">Apartment</option>
                <option value="separate unit">Separate Unit</option>
                <option value="hotel">Hotel</option>
              </Select>
          </FormControl>

          <FormControl isRequired>
          <FormLabel>Grownups Number Available</FormLabel>
          <NumberInput defaultValue={formData.grownupsNum} min={0} max={20} step={1} onChange={(valueString) => setFormData({ ...formData, grownupsNum: parseInt(valueString) })}>
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
        </FormControl>


        <FormControl isRequired>
        <FormLabel>Children Number Available</FormLabel>
          <NumberInput defaultValue={formData.childrenNum} min={0} max={20} step={1} onChange={(valueString) => setFormData({ ...formData, childrenNum: parseInt(valueString) })}>
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
        </FormControl>


        <FormControl isRequired>
        <FormLabel>Babies Number Available</FormLabel>
          <NumberInput defaultValue={formData.babies} min={0} max={20} step={1} onChange={(valueString) => setFormData({ ...formData, babies: parseInt(valueString) })}>
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
        </FormControl>

          <FormControl>
            <FormLabel>Are Pets Allowed?</FormLabel>
            <Checkbox
              name="arePetsAllowed"
              isChecked={formData.arePetsAllowed}
              onChange={handleChange}
            >
              Are pets allowed?
            </Checkbox>
          </FormControl>

          <FormControl>
            <FormLabel>Is WiFi Available?</FormLabel>
            <Checkbox
              name="isWifi"
              isChecked={formData.isWifi}
              onChange={handleChange}
            >
              Is WiFi available?
            </Checkbox>
          </FormControl>

          <FormControl>
            <FormLabel>Is Laundry Machine Available?</FormLabel>
            <Checkbox
              name="isLaundryMachine"
              isChecked={formData.isLaundryMachine}
              onChange={handleChange}
            >
              Is laundry machine available?
            </Checkbox>
          </FormControl>

  <FormControl>
  <FormLabel>Is Air Conditioner Available?</FormLabel>
  <Checkbox
    name="isAirConditioner"
    isChecked={formData.isAirConditioner}
    onChange={handleChange}
  >
    Is air conditioner available?
  </Checkbox>
</FormControl>

<FormControl>
  <FormLabel>Is Kitchen Available?</FormLabel>
  <Checkbox
    name="isKitchen"
    isChecked={formData.isKitchen}
    onChange={handleChange}
  >
    Is kitchen available?
  </Checkbox>
</FormControl>

<FormControl>
  <FormLabel>Is TV Available?</FormLabel>
  <Checkbox
    name="isTV"
    isChecked={formData.isTV}
    onChange={handleChange}
  >
    Is TV available?
  </Checkbox>
</FormControl>

<FormControl>
  <FormLabel>Is Workstation Available?</FormLabel>
  <Checkbox
    name="isWorkstation"
    isChecked={formData.isWorkstation}
    onChange={handleChange}
  >
    Is workstation available?
  </Checkbox>
</FormControl>

<FormControl>
  <FormLabel>Is Pool Available?</FormLabel>
  <Checkbox
    name="isPool"
    isChecked={formData.isPool}
    onChange={handleChange}
  >
    Is pool available?
  </Checkbox>
</FormControl>

<FormControl>
  <FormLabel>Is Free Parking Available?</FormLabel>
  <Checkbox
    name="isFreeParking"
    isChecked={formData.isFreeParking}
    onChange={handleChange}
  >
    Is free parking available?
  </Checkbox>
</FormControl>

<FormControl>
  <FormLabel>Is Cradle Available?</FormLabel>
  <Checkbox
    name="isCradle"
    isChecked={formData.isCradle}
    onChange={handleChange}
  >
    Is cradle available?
  </Checkbox>
</FormControl>

<FormControl>
  <FormLabel>Is Gym Available?</FormLabel>
  <Checkbox
    name="isGym"
    isChecked={formData.isGym}
    onChange={handleChange}
  >
    Is gym available?
  </Checkbox>
</FormControl>

<FormControl>
  <FormLabel>Is Breakfast Available?</FormLabel>
  <Checkbox
    name="isBreakfast"
    isChecked={formData.isBreakfast}
    onChange={handleChange}
  >
    Is breakfast available?
  </Checkbox>
</FormControl>

<FormControl>
  <FormLabel>Is Smoking Allowed?</FormLabel>
  <Checkbox
    name="isSmokingAllowed"
    isChecked={formData.isSmokingAllowed}
    onChange={handleChange}
  >
    Is smoking allowed?
  </Checkbox>
</FormControl>

<FormControl>
  <FormLabel>Is Electric Car Charger Available?</FormLabel>
  <Checkbox
    name="isElectricCarCharger"
    isChecked={formData.isElectricCarCharger}
    onChange={handleChange}
  >
    Is an electric car charger available?
  </Checkbox>
</FormControl>

<FormControl>
  <FormLabel>Is Smoke Detector Available?</FormLabel>
  <Checkbox
    name="isSmokeDetector"
    isChecked={formData.isSmokeDetector}
    onChange={handleChange}
  >
    Is a smoke detector available?
  </Checkbox>
</FormControl>

<FormControl>
  <FormLabel>Is CO2 Detector Available?</FormLabel>
  <Checkbox
    name="isCO2Detector"
    isChecked={formData.isCO2Detector}
    onChange={handleChange}
  >
    Is a CO2 detector available?
  </Checkbox>
</FormControl>

<FormControl>
  <FormLabel>Is Without Stairs?</FormLabel>
  <Checkbox
    name="isWithoutStairs"
    isChecked={formData.isWithoutStairs}
    onChange={handleChange}
  >
    Is the property without stairs?
  </Checkbox>
</FormControl>

<FormControl>
  <FormLabel>Is Accessible Parking Lot Available?</FormLabel>
  <Checkbox
    name="isAccessibleParkingLot"
    isChecked={formData.isAccessibleParkingLot}
    onChange={handleChange}
  >
    Is an accessible parking lot available?
  </Checkbox>
</FormControl>

<FormControl>
  <FormLabel>Is Entrance Accessible?</FormLabel>
  <Checkbox
    name="isEntranceAccessible"
    isChecked={formData.isEntranceAccessible}
    onChange={handleChange}
  >
    Is the entrance accessible?
  </Checkbox>
</FormControl>

<FormControl>
  <FormLabel>Is Shower Handrail Available?</FormLabel>
  <Checkbox
    name="isShowerHandrail"
    isChecked={formData.isShowerHandrail}
    onChange={handleChange}
  >
    Is a shower handrail available?
  </Checkbox>
</FormControl>

<FormControl>
  <FormLabel>Is Toilet Handrail Available?</FormLabel>
  <Checkbox
    name="isToiletHandrail"
    isChecked={formData.isToiletHandrail}
    onChange={handleChange}
  >
    Is a toilet handrail available?
  </Checkbox>
</FormControl>

<FormControl>
  <FormLabel>Is Chair in Shower?</FormLabel>
  <Checkbox
    name="isChairInShower"
    isChecked={formData.isChairInShower}
    onChange={handleChange}
  >
    Is a chair available in the shower?
  </Checkbox>
</FormControl>



  {/* Add similar FormControl elements for other fields with appropriate input types */}
</Stack>
        <Button type="submit" colorScheme="teal" mt={4}>
          Submit
        </Button>
      </form>
    </Box>
  );
};

export default PropertyForm;
