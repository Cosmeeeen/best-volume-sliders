import React, { useCallback } from 'react';
import { AudioSpinnerContainer } from './index.style';

const AudioSpinner = ({ playing, setPlaying }) => {

  const switchPlaying = useCallback(() => {
    setPlaying(!playing);
  }, [setPlaying, playing]);

  return (
    <AudioSpinnerContainer>
      <i class={`fas fa-play-circle${playing ? ' rotate' : ''}`} onClick={switchPlaying}/>
    </AudioSpinnerContainer>
  );
};

export default AudioSpinner;