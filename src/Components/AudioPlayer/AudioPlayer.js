import React from 'react';
import { AudioPlayerContainer } from './AudioPlayer.style';
import audioFile from '../../Audio/verySpecialAudioFile.mp3';

const AudioPlayer = () => {

  return (
    <AudioPlayerContainer>
      <audio loop autoPlay controls>
        <source src={audioFile} type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>
    </AudioPlayerContainer>
  );
};

export default AudioPlayer;