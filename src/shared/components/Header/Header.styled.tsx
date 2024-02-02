"use client";

import styled from "@emotion/styled";
import { desktopMediaQuery } from "../../styles";
import { ITheme } from "../../types/ITheme";
import BoxContent from "../BoxContent/BoxContent";
import Typography from "../Typography/Typography";

export const StyledHeader = styled.header((props: { theme: ITheme }) => ({
  padding: "0 0.8rem",
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  backgroundColor: props.theme.palette.primary,
  height: props.theme.layout.headerHeight.mobile,
  zIndex: 1,
  boxShadow: "0 1px 2px 0 rgba(0,0,0,.1)",
  display: "grid",
  gridTemplateColumns: "1fr auto auto",
  columnGap: 8,
  alignItems: "center",

  [desktopMediaQuery]: {
    height: props.theme.layout.headerHeight.desktop,
    gridTemplateColumns: "auto 1fr auto",
  },
}));

export const LogoContainer = styled(BoxContent)((props: { theme: ITheme }) => ({
  height: "inherit",
  width: "auto",
  cursor: "pointer",
}));
