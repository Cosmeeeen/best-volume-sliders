import React from 'react';
import PropTypes from 'prop-types';

import { VolumeBarContainer, Slider } from './styled-components';

const NormalVolumeSlider = ({ volume, setVolume }) => {
  return (
    <VolumeBarContainer>
      <Slider
        type="range"
        min={0}
        max={100}
        value={volume}
        onChange={e => {
          setVolume(parseInt(e.target.value));
        }}
      />
    </VolumeBarContainer>
  );
};

NormalVolumeSlider.propTypes = {
  volume: PropTypes.number,
  setVolume: PropTypes.func,
};

export default NormalVolumeSlider;
