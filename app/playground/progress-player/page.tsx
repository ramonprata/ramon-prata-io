"use client";

import React, { useState, useRef, useEffect } from "react";
import {
  PageContainer,
  ProgressBarContainer,
  Audio,
  Progress,
  BarIndicator,
  BarGap,
  INDICATOR_WIDTH,
  GAP,
} from "./page.styled";

const ProgressPlayerPage = () => {
  const [isPlaying, setIsplaying] = useState(false);
  const [maxValue, setmaxValue] = useState(0);
  const [bars, setBars] = useState(0);

  const audioRef = useRef<HTMLAudioElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const progressContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (progressContainerRef.current && bars === 0) {
      const progressBarWidth =
        progressContainerRef.current.getBoundingClientRect().width;

      const numberOfBars = Math.floor(
        progressBarWidth / (INDICATOR_WIDTH + GAP)
      );
      setBars(numberOfBars);
      console.log("numberOfBars:>>: ", numberOfBars);
    }
  }, [bars]);

  const onPlay = () => {
    const refsSet = !!audioRef.current && progressRef.current;
    console.log("object:>>: ", refsSet);
    if (refsSet) {
      if (!isPlaying) {
        audioRef.current.play();
        setmaxValue(audioRef.current.duration);
        setIsplaying(true);
      } else {
        audioRef.current.pause();
        setIsplaying(false);
      }
    }
  };

  const onTimeUpdate = () => {
    const refsSet = !!audioRef.current && progressRef.current;
    if (refsSet) {
      progressRef.current.style.width = `${Math.floor(
        (100 * audioRef.current.currentTime) / audioRef.current.duration
      )}%`;
    }
  };

  return (
    <PageContainer>
      <button onClick={onPlay}>Play/Pause</button>

      <Audio ref={audioRef} onTimeUpdate={onTimeUpdate}>
        <source src="/cannon-in-D.mp3" type="audio/mp3" />
      </Audio>
      <ProgressBarContainer ref={progressContainerRef}>
        <Progress ref={progressRef} />

        {Array(bars)
          .fill(true)
          .map((_, i) => (
            <React.Fragment key={i}>
              <BarIndicator />
              <BarGap />
            </React.Fragment>
          ))}

        <BarIndicator />
      </ProgressBarContainer>
    </PageContainer>
  );
};

export default ProgressPlayerPage;
