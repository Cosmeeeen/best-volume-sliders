import React, { useEffect, useState, useRef } from 'react';
import { AudioPlayerContainer } from './index.style';
import AudioSpinner from '../AudioSpinner/index';
import audioFile from '../../Audio/verySpecialAudioFile.mp3';

const AudioPlayer = ({volume}) => {
  const [playing, setPlaying] = useState(false);
  const audio = useRef(new Audio(audioFile));

  useEffect(() => {
    if(playing){
      audio.current.play();
    }else{
      audio.current.pause();
    }
  }, [playing]);

  useEffect(() => {
    if(playing)
      audio.current.volume = volume / 100;
  }, [volume, playing]);

  return (
    <AudioPlayerContainer>
      <AudioSpinner playing={playing} setPlaying={setPlaying}/>
    </AudioPlayerContainer>
  );
};

export default AudioPlayer;