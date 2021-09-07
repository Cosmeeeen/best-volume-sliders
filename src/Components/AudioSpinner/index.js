import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { AudioSpinnerContainer } from './index.style';

const AudioSpinner = ({ playing, setPlaying }) => {
  const switchPlaying = useCallback(() => {
    setPlaying(!playing);
  }, [setPlaying, playing]);

  return (
    <AudioSpinnerContainer>
      <i
        className={`fas fa-play-circle${playing ? ' rotate' : ''}`}
        onClick={switchPlaying}
      />
    </AudioSpinnerContainer>
  );
};

AudioSpinner.propTypes = {
  playing: PropTypes.bool,
  setPlaying: PropTypes.func,
};

export default AudioSpinner;
