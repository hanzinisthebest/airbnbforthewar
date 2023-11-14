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
      onClick={onClick}
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
        className={classes.big}
      />
      <Stack
      className={classes.stack}
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
