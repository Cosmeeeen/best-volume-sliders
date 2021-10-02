import React from 'react';
import { Switch, Route, Redirect } from 'react-router';
import { BrowserRouter as Router } from 'react-router-dom';

import GlobalStyle from './globalStyles';
import AudioPlayer from './Components/AudioPlayer/index';
import VolumeBar from './Components/VolumeBar';
import NormalVolumeSlider from './Components/Sliders/NormalVolumeSlider';
import BasicButtonControls from './Components/Sliders/BasicButtonControls';
import PageSelector from './Components/PageSelector';

function App() {
  const [volume, setVolume] = React.useState(50);

  return (
    <Router>
      <div className="App">
        <GlobalStyle />
        <VolumeBar volume={volume} />
        <AudioPlayer volume={volume} />
        <PageSelector />
        <Switch>
          <Route exact path="/">
            <Redirect to="/normal-slider" />
          </Route>
          <Route path="/normal-slider">
            <NormalVolumeSlider volume={volume} setVolume={setVolume} />
          </Route>
          <Route path="/basic-buttons">
            <BasicButtonControls volume={volume} setVolume={setVolume} />
          </Route>
          <Route path="invisible-slider" />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
