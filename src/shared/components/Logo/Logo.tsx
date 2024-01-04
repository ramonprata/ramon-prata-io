import { Chakra_Petch } from 'next/font/google';
import React from 'react';
import { LogoText } from './Logo.styled';

const chakra = Chakra_Petch({
  weight: '700',
  subsets: ['latin'],
});

const Logo = () => {
  return <LogoText variant="caption" text="<ramon.prata.io />" className={chakra.className} />;
};

export default Logo;
