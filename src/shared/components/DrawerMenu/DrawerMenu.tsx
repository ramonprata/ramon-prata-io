import React from 'react';
import { Drawer, IDrawerProps } from './DrawerMenu.styled';
import { Typography } from '..';

export interface IDrawerMenuProps extends IDrawerProps {}
const DrawerMenu = ({ showMenu }: IDrawerMenuProps) => {
  return (
    <Drawer showMenu={showMenu}>
      <nav>
        <Typography text={`<building.../>`} />
      </nav>
    </Drawer>
  );
};

export default DrawerMenu;
