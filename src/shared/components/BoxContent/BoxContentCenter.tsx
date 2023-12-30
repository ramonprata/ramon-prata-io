import React, { PropsWithChildren } from 'react';
import { BoxContainer, IBoxContainerProps } from './BoxContent.styled';

export interface IBoxContentProps extends IBoxContainerProps {
  onClick?: (e?: unknown) => void;
}

const BoxContentCenter: React.FC<IBoxContentProps & PropsWithChildren> = ({
  children,
  ...props
}) => {
  return (
    <BoxContainer flex align="center" justify="center" {...props}>
      {children}
    </BoxContainer>
  );
};

export default BoxContentCenter;
