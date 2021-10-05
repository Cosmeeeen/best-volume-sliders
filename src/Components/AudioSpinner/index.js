import React from 'react';
import PropTypes from 'prop-types';
import { AudioSpinnerContainer } from './index.style';

const AudioSpinner = ({ playing, onClick }) => {
  return (
    <AudioSpinnerContainer>
      <i
        className={`fas fa-play-circle${playing ? ' rotate' : ''}`}
        onClick={onClick}
      />
    </AudioSpinnerContainer>
  );
};

AudioSpinner.propTypes = {
  playing: PropTypes.bool,
  onClick: PropTypes.func,
};

export default AudioSpinner;
