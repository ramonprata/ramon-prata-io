import React, { PropsWithChildren } from 'react';
import { BoxContainer, IBoxContainerProps } from './BoxContent.styled';

export interface IBoxContentProps extends IBoxContainerProps {
  onClick?: (e?: unknown) => void;
}

const BoxRounded: React.FC<IBoxContentProps & PropsWithChildren> = ({ children, ...props }) => {
  return (
    <BoxContainer w={props.w} h={props.w} radius="50" {...props}>
      {children}
    </BoxContainer>
  );
};

export default BoxRounded;
