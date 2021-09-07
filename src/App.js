import React from 'react';
import GlobalStyle from './globalStyles';
import AudioPlayer from './Components/AudioPlayer/index';
import VolumeBar from './Components/VolumeBar';
import NormalVolumeSlider from './Components/Sliders/NormalVolumeSlider';

// import BasicButtonControls from './Components/Sliders/BasicButtonControls';

function App() {
  const [volume, setVolume] = React.useState(50);

  return (
    <div className="App">
      <GlobalStyle />
      <AudioPlayer volume={volume} />
      {/* <BasicButtonControls volume={volume} setVolume={setVolume} /> */}
      <NormalVolumeSlider volume={volume} setVolume={setVolume} />
      <VolumeBar volume={volume} />
    </div>
  );
}

export default App;
