import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { AudioPlayerContainer } from './index.style';
import AudioSpinner from '../AudioSpinner/index';
import audioFile from '../../Audio/verySpecialAudioFile.mp3';

const AudioPlayer = ({ volume }) => {
  const [playing, setPlaying] = useState(false);
  const audio = useRef(new Audio(audioFile));

  useEffect(() => {
    if (playing) {
      audio.current.play();
    } else {
      audio.current.pause();
    }
  }, [playing]);

  useEffect(() => {
    audio.current.volume = volume / 100;
  }, [volume, playing]);

  return (
    <AudioPlayerContainer>
      <AudioSpinner playing={playing} setPlaying={setPlaying} />
    </AudioPlayerContainer>
  );
};

AudioPlayer.propTypes = {
  volume: PropTypes.number,
};

export default AudioPlayer;
