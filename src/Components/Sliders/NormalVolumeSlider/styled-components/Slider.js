import styled from 'styled-components';

import * as theme from '../../../../Themes/default.json';

const sliderHeight = 20;

const Slider = styled.input`
  --webkit-appearance: none;
  appearance: none;
  cursor: pointer;
  display: block;
  width: 30vw;
  background: transparent;

  // Webkit configuration

  &::-webkit-slider-thumb {
    appearance: none;
    --webkit-appearance: none;
    background: ${theme.color.normal};
    border-radius: 100%;
    border: 0;
    width: ${sliderHeight}px;
    height: ${sliderHeight}px;
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    border: none;
    box-shadow: none;
    transition: 0.2s all;
  }

  &::-webkit-slider-thumb:hover {
    background: ${theme.color.highlight};
    width: ${sliderHeight + 5}px;
    height: ${sliderHeight + 5}px;
  }

  &::-webkit-slider-runnable-track {
    background: ${theme.color.light};
    width: 100%;
    height: ${sliderHeight * 0.2}px;
  }

  // Mozilla configuration

  &::-moz-range-track,
  &::-moz-range-progress {
    background: ${theme.color.light};
    width: 100%;
    height: ${sliderHeight * 0.2}px;
  }

  &::-moz-range-thumb {
    appearance: none;
    --webkit-appearance: none;
    background: ${theme.color.normal};
    border-radius: 100%;
    border: 0;
    width: ${sliderHeight}px;
    height: ${sliderHeight}px;
    position: relative;
    border: none;
    box-shadow: none;
    transition: 0.2s all;
  }

  &::-moz-range-thumb:hover {
    background: ${theme.color.highlight};
    width: ${sliderHeight + 5}px;
    height: ${sliderHeight + 5}px;
  }
`;

export default Slider;
