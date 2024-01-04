import React from 'react';
import { Drawer, IDrawerProps, Content, CloseIconContainer } from './styles/DrawerMenu.styled';
import { Navigation, INavigationProps, Icon } from '@/src/shared/components';
import { useDrawerMenuState } from '../hooks/useDrawerMenuState';

export interface IDrawerMenuProps extends IDrawerProps {
  menu: INavigationProps['menu'];
}

const DrawerMenu = ({ showMenu, menu }: IDrawerMenuProps) => {
  const { setDrawerMenuOpened } = useDrawerMenuState();
  return (
    <Drawer showMenu={showMenu}>
      <Content>
        <CloseIconContainer flex h="fit" justify="end" pad="4">
          <Icon iconName="close" onClick={() => setDrawerMenuOpened(false)} onlyMobile />
        </CloseIconContainer>
        <Navigation menu={menu} onClick={() => setDrawerMenuOpened(false)} />
      </Content>
    </Drawer>
  );
};

export default DrawerMenu;
