import React from 'react';
import PropTypes from 'prop-types';

import { VolumeBarContainer } from './styled-components';

const NormalVolumeSlider = ({ volume, setVolume }) => {
  return (
    <VolumeBarContainer>
      <h1>This is the volume bar container</h1>
      <input
        type="range"
        min={0}
        max={100}
        value={volume}
        onChange={e => {
          setVolume(e.target.value);
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
