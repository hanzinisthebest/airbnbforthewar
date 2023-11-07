import { Box, keyframes, usePrefersReducedMotion } from '@chakra-ui/react';
import React from 'react';

interface Props {
  
}
const spin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`
const Loading: React.FC<Props> = () => {
  const prefersReducedMotion = usePrefersReducedMotion()

  const animation = prefersReducedMotion
    ? undefined
    : `${spin} .6s linear infinite`
  return (
    <Box animation={animation} border={'4px solid #ccc'} borderRadius={'50%'} borderTop={'4px solid #ab7a5f'}
     height={'6rem'} margin={'10rem auto 0'} width={'6rem'} transform={'rotate(0deg)'}  >

    </Box>
  );
};

export default Loading;
