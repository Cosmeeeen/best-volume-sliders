import React from 'react';
import {VolumeBarContainer} from './index.style';

const VolumeBar = ({ volume }) => {
  return (
    <VolumeBarContainer>
      <progress value={volume} min={0} max={100} />
      <p>{volume}</p>
    </VolumeBarContainer>
  );
};

export default VolumeBar;