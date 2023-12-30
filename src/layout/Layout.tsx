import React, { PropsWithChildren } from 'react';
import { Header } from './Header';
import { StyledMain, PageContainer } from './styles/Layout.styled';

const Layout = (props: PropsWithChildren) => {
  return (
    <PageContainer flex center bg="background" direction="column">
      <Header />

      <StyledMain>{props.children}</StyledMain>
    </PageContainer>
  );
};
export default Layout;
