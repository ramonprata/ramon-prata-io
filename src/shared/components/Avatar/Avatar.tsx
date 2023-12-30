'use client';

import Image, { ImageProps } from 'next/image';
import React from 'react';
import { AvatarContainer, sizeByVariant } from './Avatar.styled';

export interface IAvatarProps extends ImageProps {
  variant: 'small' | 'medium' | 'large';
}

const Avatar = ({ variant, ...imageProps }: IAvatarProps) => {
  return (
    <AvatarContainer variant={variant}>
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
