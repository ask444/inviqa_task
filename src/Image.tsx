import React from 'react';

interface ImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  defaultSrc: string;
}

const Image: React.FC<ImageProps> = ({ src, alt, width, height,defaultSrc }) => {
    const handleImageError = (event: React.SyntheticEvent<HTMLImageElement>) => {
        event.currentTarget.src = defaultSrc;
      };

    return (
        <div>
            <img src={src} alt={alt} width={width} height={height} onError={handleImageError}  />
        </div>
      );
};

export default Image;
