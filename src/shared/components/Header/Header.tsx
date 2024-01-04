'use client';

import React from 'react';
import { StyledHeader, LogoContainer } from './Header.styled';
import Icon from '../Icon/Icon';
import { ThemeModeEnum } from '../../types';
import Logo from '../Logo/Logo';

export interface IHeaderProps {
  menuIcon?: React.ReactNode;
  barNavigation?: React.ReactNode;
  isDarkMode?: boolean;
  handleChangeTheme?: (mode: ThemeModeEnum) => void;
}

const Header = ({
  menuIcon,
  isDarkMode = false,
  barNavigation,
  handleChangeTheme,
}: IHeaderProps) => {
  return (
    <StyledHeader>
      <LogoContainer flex align="center">
        <Logo />
      </LogoContainer>
      {barNavigation}
      <Icon
        iconName={isDarkMode ? 'dark_mode' : 'light_mode'}
        onClick={() => {
          handleChangeTheme?.(isDarkMode ? ThemeModeEnum.light : ThemeModeEnum.dark);
        }}
      />
      {menuIcon}
    </StyledHeader>
  );
};

export default Header;
