'use client';

import React, { PropsWithChildren } from 'react';
import { DrawerMenu, Header, Icon, BarNavigation } from '../../shared/components';
import { StyledMain, PageContainer } from './styles/Layout.styled';
import { useDrawerMenuState } from '../hooks/useDrawerMenuState';
import { useThemeModeState } from '../hooks/useThemeModeState';

const Layout = (props: PropsWithChildren) => {
  const { isDrawerMenuOpened, setDrawerMenuOpened } = useDrawerMenuState();
  const { isDarkMode, setThemeMode } = useThemeModeState();

  const menuIcon = (
    <Icon iconName="menu" onClick={() => setDrawerMenuOpened(!isDrawerMenuOpened)} onlyMobile />
  );

  const menu = [
    {
      title: 'About',
      path: '/',
    },
    {
      title: 'Playground',
      path: '/playground',
    },
    {
      title: 'Posts',
      path: '/posts',
    },
  ];

  const barNav = <BarNavigation menu={menu} />;
  return (
    <PageContainer flex center bg="background" direction="column">
      <Header
        menuIcon={menuIcon}
        barNavigation={barNav}
        isDarkMode={isDarkMode}
        handleChangeTheme={setThemeMode}
      />

      <StyledMain>{props.children}</StyledMain>
      <DrawerMenu showMenu={isDrawerMenuOpened} menu={menu} />
    </PageContainer>
  );
};
export default Layout;
