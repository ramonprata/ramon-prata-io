import styled from "@emotion/styled";
import { ITheme } from "../../types/ITheme";
import { desktopMediaQuery } from "../../styles";

export const IconContainer = styled.button(
  (props: { onlyMobile: boolean }) => ({
    padding: 8,
    borderRadius: "50%",
    outline: "none",
    border: "none",
    cursor: "pointer",
    width: 42,
    height: 42,

    backgroundColor: "transparent",
    "&:hover": {
      backgroundColor: "rgba(0,0,0, 0.1)",
    },
    [`${desktopMediaQuery}`]: {
      ...(props.onlyMobile && {
        display: "none",
      }),
    },
  })
);

export const StyledIcon = styled.span((props: { theme: ITheme }) => ({
  color: props.theme.palette.primaryText,
  fontSize: 24,
}));
