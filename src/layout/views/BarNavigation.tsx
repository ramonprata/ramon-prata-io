import React from 'react';
import { StyledNavigation } from './styles/BarNavigation.styled';
import Typography from '../../shared/components/Typography/Typography';
import Link from 'next/link';
import Navigation, { INavigationProps } from '../../shared/components/Navigation/Navigation';

export interface IBarNavigationProps {
  menu: INavigationProps['menu'];
}
function BarNavigation({ menu }: IBarNavigationProps) {
  return (
    <StyledNavigation>
      <Navigation menu={menu} />
    </StyledNavigation>
  );
}

export default BarNavigation;
