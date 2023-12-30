import Image, { ImageProps } from 'next/image';
import React from 'react';
import { AvatarContainer, IAvatarContainerProps } from './Avatar.styled';

export interface IAvatarProps extends ImageProps {
  variant: IAvatarContainerProps['variant'];
}

const Avatar = ({ variant, ...imageProps }: IAvatarProps) => {
  return (
    <AvatarContainer variant={variant}>
      <Image layout="responsive" {...imageProps} />
    </AvatarContainer>
  );
};
export default Avatar;
