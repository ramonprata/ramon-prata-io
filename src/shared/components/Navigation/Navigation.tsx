import React from 'react';
import Typography from '../Typography/Typography';
import { StyledNav, StyledLink } from './Navigation.styled';

export interface INavigationProps {
  menu: {
    title: string;
    path: string;
  }[];
  onClick?: () => void;
}

const Navigation = ({ menu, onClick }: INavigationProps) => {
  return (
    <StyledNav>
      <ul>
        {menu.map((i) => (
          <li key={i.path} onClick={() => onClick?.()}>
            <StyledLink href={i.path}>
              <Typography variant="link" text={i.title} />
            </StyledLink>
          </li>
        ))}
      </ul>
    </StyledNav>
  );
};

export default Navigation;
