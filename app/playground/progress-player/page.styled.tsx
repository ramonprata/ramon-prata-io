"use client";

import styled from "@emotion/styled";

export const INDICATOR_WIDTH = 4;
export const GAP = 12;
export const HEIGHT = 32;
const BACKGROUND = "#1b1b1b";
const PROGRESS_BACKGROUND = "#FFF";

export const PageContainer = styled.div({
  height: "50%",
  width: "100%",
  background: BACKGROUND,
  padding: 24,
  boxSizing: "border-box",
  display: "flex",
  flexDirection: "column",
  gap: 32,
  "& *": {
    boxSizing: "border-box",
  },
});

export const ProgressBarContainer = styled.div({
  width: "100%",
  height: HEIGHT,
  background: "black",
  position: "relative",
  display: "flex",
  justifyContent: "space-between",
  overflow: "hidden",
  alignItems: "center",
});

export const Audio = styled.audio({
  visibility: "hidden",
});

export const Progress = styled.div(() => ({
  position: "absolute",
  zIndex: 0,
  borderRadius: 0,
  height: "100%",
  backgroundColor: PROGRESS_BACKGROUND,
  transition: "width 0.5s linear",
  // "&::-webkit-progress-bar": {
  //   backgroundColor: "transparent",
  // },
  // "&::-webkit-progress-value": {
  // },
  // "&::-moz-progress-bar": {

  // }
}));

export const BarIndicator = styled.div({
  width: INDICATOR_WIDTH,
  height: "100%",
  overflow: "hidden",
  background: "transparent",
  position: "relative",
});
export const BarGap = styled.div({
  overflow: "hidden",
  width: GAP,
  height: "100%",

  background: BACKGROUND,
  position: "relative",
});
