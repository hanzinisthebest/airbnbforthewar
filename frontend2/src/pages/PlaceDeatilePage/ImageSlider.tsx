import React, { useState } from 'react';
import { Box,Image,Stack } from '@mantine/core';
import classes from "./Image.module.css";
interface ImageProps {
  url: string;
}

interface ImageComponentProps extends ImageProps {
  isActive: boolean;
  onClick: () => void;
}

const ImageComponent: React.FC<ImageComponentProps> = ({ url, isActive, onClick }) => {
  // Define your ImageComponent here
  return (
    <Image
      border={isActive ? '2px solid #ab7a5f' : 'none'}
      onClick={onClick}
      cursor="pointer"
      src={url}
      className={classes.img}
    />
  );
};

interface ImageSliderProps {
  images: ImageProps[];
}

const ImageSlider: React.FC<ImageSliderProps> = ({ images }) => {
  const [activeImage, setActiveImage] = useState(images[0].url);

  return (
    <Box>
      <Image
        src={activeImage}
        height="500px"
        width="800px" 
        display="block"
        borderRadius="0.25rem"
        objectFit="cover"
      />
      <Stack
        mt="1rem"
        display="grid"
        gridTemplateColumns="repeat(5, 1fr)"
        gap="1rem"
        cursor="pointer"
      >
        {images.map((image) => (
          <ImageComponent
            key={image.url}
            url={image.url}
            isActive={image.url === activeImage}
            onClick={() => setActiveImage(image.url)}
          />
        ))}
      </Stack>
    </Box>
  );
};

export default ImageSlider;
