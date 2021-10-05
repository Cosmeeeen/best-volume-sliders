import React from 'react';
import PropTypes from 'prop-types';
import { AudioPlayerContainer } from './index.style';
import AudioSpinner from '../AudioSpinner/index';
import audioFile from '../../Audio/verySpecialAudioFile.mp3';

const AudioPlayer = ({ volume }) => {
  const [playing, setPlaying] = React.useState(false);
  const audio = React.useRef(new Audio(audioFile));

  React.useEffect(() => {
    // On iOS devices, the audio level is always under the user's
    // physical control. The volume property is not settable in
    // JavaScript. Reading the volume property always returns 1.
    // Source: https://apple.co/2Yk5IEK
    audio.current.volume = volume / 100;
  }, [audio, volume]);

  return (
    <AudioPlayerContainer>
      <AudioSpinner
        playing={playing}
        onClick={() => {
          playing ? audio.current.pause() : audio.current.play();
          setPlaying(!playing);
        }}
      />
    </AudioPlayerContainer>
  );
};

AudioPlayer.propTypes = {
  volume: PropTypes.number,
};

export default AudioPlayer;
