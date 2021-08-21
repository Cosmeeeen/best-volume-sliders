import React from 'react';

import NumberInputSliderContainer from './index.style';

const NumberInputSlider = ({volume, setVolume}) => {

  const changeVolume = (e) => {
    setVolume(e.target.value);
  }

  return (
    <NumberInputSliderContainer>
      <input type="number" min={0} max={100} defaultValue={volume} onChange={e => changeVolume(e)}/>
    </NumberInputSliderContainer>
  );
};

export default NumberInputSlider;
