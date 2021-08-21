import React from 'react';

import NumberInputSliderContainer from './index.style';

const NumberInputSlider = ({volume, setVolume}) => {

  const increaseVolume = React.useCallback(() => {
    if(window.confirm("Are you sure you want to increase the volume?")){
      setVolume(volume + 1);
    }
  }, [volume, setVolume]);

  const decreaseVolume = React.useCallback(() => {
    if(window.confirm("Are you sure you want to decrease the volume?")){
      setVolume(volume - 1);
    }
  }, [volume, setVolume]);

  return (
    <NumberInputSliderContainer>
      <h3>Current volume is: {volume}</h3>
      <button type="button" onClick={increaseVolume}>Increase volume</button>
      <button type="button" onClick={decreaseVolume}>Decrease volume</button>
    </NumberInputSliderContainer>
  );
};

export default NumberInputSlider;
