'use client';

import React, { RefObject, useEffect } from 'react';
import { ITextProps, TextFactory } from './Typography.styled';

export interface ITypographyProps extends ITextProps {
  text?: string;
  className?: string;
  fallbackText?: string;
  onLayout?: (r: RefObject<HTMLElement>) => void;
}

const Typography: React.FC<ITypographyProps> = ({
  text,
  className,
  fallbackText: fallbackText,
  onLayout,
  ...textProps
}) => {
  const textRef = React.useRef(null);
  useEffect(() => {
    if (textRef.current) {
      onLayout?.(textRef);
    }
  }, [textRef, onLayout]);

  const Text = TextFactory(textProps) as any;
  return (
    <Text ref={textRef} className={className}>
      {text ? text : fallbackText ? fallbackText : ''}
    </Text>
  );
};

export default Typography;
