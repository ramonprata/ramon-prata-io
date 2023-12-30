import Image, { ImageProps } from 'next/image';
import React from 'react';
import { AvatarContainer } from './Avatar.styled';

export interface IAvatarProps extends ImageProps {
  variant: 'small' | 'medium' | 'large';
}

const Avatar = ({ variant, ...imageProps }: IAvatarProps) => {
  const sizeByVariant = {
    small: 48,
    medium: 72,
    large: 180,
  };
  return (
    <AvatarContainer>
      <Image
        {...imageProps}
        alt={imageProps.alt}
        width={sizeByVariant[variant ?? 'small']}
        height={sizeByVariant[variant ?? 'small']}
      />
    </AvatarContainer>
  );
};
export default Avatar;
