'use client';

import React, { PropsWithChildren } from 'react';
import { DrawerMenu, Header, Icon } from '../shared/components';
import { StyledMain, PageContainer } from './styles/Layout.styled';
import { useDrawerMenuState } from './hooks/useDrawerMenuState';
import { useThemeModeState } from '.';

const Layout = (props: PropsWithChildren) => {
  const { isDrawerMenuOpened, setDrawerMenuOpened } = useDrawerMenuState();
  const { isDarkMode, setThemeMode } = useThemeModeState();
  const menuIcon = (
    <Icon iconName="menu" onClick={() => setDrawerMenuOpened(!isDrawerMenuOpened)} onlyMobile />
  );
  return (
    <PageContainer flex center bg="background" direction="column">
      <Header menuIcon={menuIcon} handleChangeTheme={setThemeMode} isDarkMode={isDarkMode} />

      <StyledMain>{props.children}</StyledMain>
      <DrawerMenu showMenu={isDrawerMenuOpened} />
    </PageContainer>
  );
};
export default Layout;
