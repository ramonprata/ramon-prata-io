import React, { PropsWithChildren } from 'react';
import { BoxContainer, IBoxContainerProps } from './BoxContent.styled';

export interface IBoxContentProps extends IBoxContainerProps {
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
}

const BoxContent: React.FC<IBoxContentProps & PropsWithChildren> = ({ children, ...props }) => {
  return <BoxContainer {...props}>{children}</BoxContainer>;
};

export default BoxContent;
