import React from 'react';
import AudioPlayer from "./Components/AudioPlayer/index";
import GlobalStyle from "./globalStyles";

import NumberInputSlider from "./Components/Sliders/NumberInputSlider";

function App() {
  const [volume, setVolume] = React.useState(50);

  return (
    <div className="App">
      <GlobalStyle />
      <AudioPlayer volume={volume}/>
      <NumberInputSlider volume={volume} setVolume={setVolume}/>
    </div>
  );
}

export default App;
