import React from 'react';

import Button from '../../Common/Styled/Button/index.styled';
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
      <Button type="button" onClick={increaseVolume}>Increase volume</Button>
      <Button type="button" onClick={decreaseVolume}>Decrease volume</Button>
    </NumberInputSliderContainer>
  );
};

export default NumberInputSlider;
