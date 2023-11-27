import { Loader } from '@mantine/core';
import React from 'react';

interface Props {
  
}

const Loading: React.FC<Props> = () => {
  return (
    <div>
     <Loader color="blue" size="lg" type="dots" />;
    </div>
  );
};

export default Loading;