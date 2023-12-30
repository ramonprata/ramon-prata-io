import React, { PropsWithChildren, forwardRef } from 'react';
import { BoxContainer, IBoxContainerProps } from './BoxContent.styled';

export interface IBoxContentProps extends IBoxContainerProps {
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
}

const BoxFit = forwardRef<HTMLDivElement, PropsWithChildren<IBoxContentProps>>(
  ({ children, ...props }, ref) => (
    <BoxContainer w="fit" h="fit" {...props} ref={ref}>
      {children}
    </BoxContainer>
  )
);

BoxFit.displayName = 'BoxFit';

export default BoxFit;
