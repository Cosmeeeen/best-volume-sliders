import React from 'react';
import PropTypes from 'prop-types';

import { VolumeBarContainer } from './index.style';

const VolumeBar = ({ volume }) => {
  return (
    <VolumeBarContainer>
      <progress value={volume} min={0} max={100} />
      <p>{volume}</p>
    </VolumeBarContainer>
  );
};

VolumeBar.propTypes = {
  volume: PropTypes.number,
};

export default VolumeBar;
