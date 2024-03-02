"use client";

import styled from "@emotion/styled";
import React from "react";
import {
  CSSProperties,
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";

const mediaKey = "@media only screen and (min-width: 768px)";

const Wrapper = styled.div({
  position: "absolute",
  background: "orange",
  width: "100%",
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  "& *": {
    boxSizing: "border-box",
  },
});
const Container = styled.div({
  position: "relative",
  // background: "lightblue",
  width: "100%",
  height: "100%",
  alignItems: "center",
  overflowY: "scroll",
  scrollSnapType: "y mandatory",
  [mediaKey]: {
    height: "80%",
    background: "greenn",
  },
  "& .idx-0": {
    background: "lightpink",
  },
  "& .idx-1": {
    background: "lightgreen",
  },
  "& .idx-2": {
    background: "lightyellow",
  },
  "& *": {
    fontWeight: "bold",
  },
});
const Content = styled.div({
  position: "relative",
  scrollSnapAlign: "start",
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  margin: "auto",
  width: "100%",
  [mediaKey]: {
    width: "300px",
    borderRadius: 32,
  },
});

const NUMBER_OF_ELEMENTS = 3;

export default function DesktopWrapper() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState<DOMRect | null>(null);

  useEffect(() => {
    if (containerRef.current && !position) {
      const newPosition = containerRef.current.getBoundingClientRect();
      setPosition(newPosition);
      const anchor = document.createElement("a");
      anchor.href = `#idx${0}`;
      anchor.click();
    }
  }, [containerRef, position]);

  const scrollSnaps = getScrollSnapSteps(
    containerRef.current?.getBoundingClientRect().height
  );

  return (
    <Wrapper>
      <Container
        ref={containerRef}
        onScroll={(e) => {
          if (containerRef.current) {
            if (
              scrollSnaps.includes(containerRef.current.scrollTop) &&
              position
            ) {
              const child = Array.from(containerRef.current.children).find(
                (c) => {
                  const childPosition = c.getBoundingClientRect();

                  return (
                    childPosition.top >= position.top - 24 &&
                    childPosition.top <= position.top + 24
                  );
                }
              ) as HTMLAnchorElement;

              if (child) {
                const anchor = document.createElement("a");
                anchor.href = `#${child.id}`;
                anchor.click();
                return;
              }
            }
          }
        }}
      >
        {scrollSnaps.map((i, idx) => (
          <ContentComponent key={idx} classname={`idx-${idx}`} />
        ))}
      </Container>
    </Wrapper>
  );
}

const ContentComponent = ({ classname }: { classname: string }) => {
  return (
    <Content className={classname} id={classname}>
      <a href={`#${classname}`}>{`conetent-${classname}`}</a>
    </Content>
  );
};

const getScrollSnapSteps = (containerHeight: number | undefined) => {
  return Array(NUMBER_OF_ELEMENTS)
    .fill(3)
    .map((c, idx) => {
      if (containerHeight) {
        return Math.floor(idx * containerHeight);
      }
    });
};
