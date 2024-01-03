import React from 'react';
import { StyledNavigation } from './BarNavigation.styled';
import Typography from '../Typography/Typography';

function BarNavigation() {
  return (
    <StyledNavigation>
      <ul>
        <li>
          <Typography variant="link" text="About" />
        </li>
        <li>
          <Typography variant="link" text="Posts" />
        </li>
      </ul>
    </StyledNavigation>
  );
}

export default BarNavigation;
