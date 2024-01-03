'use client';

import React from 'react';
import { StyledHeader, LogoContainer, LogoText } from './Header.styled';
import { useThemeModeState } from '@/src/layout';
import BarNavigation from '../BarNavigation/BarNavigation';
import Icon from '../Icon/Icon';
import { ThemeModeEnum } from '../../types';

export interface IHeaderProps {
  menuIcon?: React.ReactNode;
  isDarkMode?: boolean;
  handleChangeTheme?: (mode: ThemeModeEnum) => void;
}

const Header = ({ menuIcon, isDarkMode = false, handleChangeTheme }: IHeaderProps) => {
  return (
    <StyledHeader>
      <LogoContainer flex align="center">
        <LogoText variant="caption" text="<ramon.prata.io />" />
      </LogoContainer>
      <BarNavigation />
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
