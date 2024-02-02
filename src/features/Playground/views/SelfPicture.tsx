"use client";
import React, { useState, useRef } from "react";
import { BoxContent, Icon } from "@/src/shared/components";
import { Avatar } from "@/src/shared/components";
import {
  InputPicture,
  SelfPictureContainer,
} from "./styles/SelfPicture.styled";

const SelfPicture = () => {
  const [imagePath, setImagePath] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const handleCapture = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target;
    if (target.files) {
      if (target.files.length !== 0) {
        const file = target.files[0];
        const newUrl = URL.createObjectURL(file);
        setImagePath(newUrl);
      }
    }
  };

  const handleIconClick = () => {
    if (inputRef.current) {
      inputRef?.current?.click();
    }
  };

  return (
    <BoxContent flex center direction="column">
      <SelfPictureContainer flex center direction="column">
        <Avatar src={imagePath} alt="" priority variant="large" />
        <InputPicture
          ref={inputRef}
          accept="image/*"
          type="file"
          capture="environment"
          onChange={(e) => handleCapture(e)}
        />
        <Icon iconName={"photo_camera"} onClick={handleIconClick} />
      </SelfPictureContainer>
    </BoxContent>
  );
};

export default SelfPicture;
