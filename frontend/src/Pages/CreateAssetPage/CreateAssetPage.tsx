import React from 'react';
import PropertyForm from './PropertyForm';
import { Center ,Box } from "@chakra-ui/react";

interface Props {
  
}

const CreateAsset: React.FC<Props> = () => {
  return (
      <Box m="5">
      <PropertyForm />
      </Box>
  );
};

export default CreateAsset;