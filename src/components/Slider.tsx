import React, { useEffect } from "react";
import { useState } from "react";
import * as styles from "../styles/Slider.module.css";

type Range = { max: number; min: number };

export interface SliderstyleConfig {
  sliderTrack?: {
    colors?: {
      inRange?: string;
      outRange?: string;
    };
  };
  sliderThumb?: {
    colors?: {
      fill?: string;
      outline?: string;
    };
  };
}

interface SliderProps {
  minRange: number;
  maxRange: number;
  min: number;
  max: number;
  onChange?: ({ min, max }: Range) => void;
  onStop?: ({ min, max }: Range) => void;
  styleConfig?: SliderstyleConfig;
}

export const Slider: React.FC<SliderProps> = ({
  min,
  minRange,
  max,
  maxRange,
  onChange,
  onStop,
  styleConfig
}) => {
  const [internalMin, setInternalMin] = useState(min);
  const [internalMax, setInternalMax] = useState(max);
  const thumbStyle = {
    "--thumb-fill-color": styleConfig?.sliderThumb?.colors?.fill || "#00f",
    "--thumb-outline-color": styleConfig?.sliderThumb?.colors?.outline || "#FFFFFF",
  } as React.CSSProperties;
  
  useEffect(() => {
    onChange?.({
      min: internalMin,
      max: internalMax
    });
  }, [internalMax, internalMin, onChange]);
  const startPecentage = (internalMin / maxRange) * 100;
  const stopPercentage = (internalMax / maxRange) * 100;
  return (
    <div className={styles.sliderContainer}>
      <div
        className={styles.sliderTrack}
        style={{
          background: `linear-gradient(to right, ${
            styleConfig?.sliderTrack?.colors?.outRange || "#7c7c7c"
          } ${startPecentage}%, 
          ${
            styleConfig?.sliderTrack?.colors?.inRange || "#FFFFFF"
          } ${startPecentage}%, ${
            styleConfig?.sliderTrack?.colors?.inRange || "#FFFFFF"
          } ${stopPercentage}%, ${
            styleConfig?.sliderTrack?.colors?.outRange || "#7c7c7c"
          } ${stopPercentage}%
        )`
        }}
      />
      <input
        style={thumbStyle} 
        className={styles.sliderInput}
        onMouseUp={(e) =>
          onStop?.({
            min: internalMin,
            max: internalMax
          })
        }
        onChange={(e) => {
          const newValue = Number(e.target.value);
          if (newValue <= internalMax) {
            setInternalMin(newValue);
          }
        }}
        value={internalMin}
        min={minRange}
        max={maxRange}
        type="range"
        name=""
        id=""
      />
      <input
        style={thumbStyle} 
        className={styles.sliderInput}
        onChange={(e) => {
          const newValue = Number(e.target.value);
          if (newValue >= internalMin) {
            setInternalMax(newValue);
          }
        }}
        value={internalMax}
        min={minRange}
        max={maxRange}
        type="range"
        name=""
        id=""
      />
    </div>
  );
};
