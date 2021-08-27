import React from 'react';
import PropTypes from 'prop-types';

import Button from '../../Common/Styled/Button/index.styled';
import BasicButtonControlsContainer from './index.style';

const BasicButtonControls = ({ volume, setVolume }) => {
  const increaseVolume = React.useCallback(() => {
    if (window.confirm('Are you sure you want to increase the volume?')) {
      setVolume(volume + 1);
    }
  }, [volume, setVolume]);

  const decreaseVolume = React.useCallback(() => {
    if (window.confirm('Are you sure you want to decrease the volume?')) {
      setVolume(volume - 1);
    }
  }, [volume, setVolume]);

  return (
    <BasicButtonControlsContainer>
      <Button type="button" onClick={increaseVolume}>
        Increase volume
      </Button>
      <Button type="button" onClick={decreaseVolume}>
        Decrease volume
      </Button>
    </BasicButtonControlsContainer>
  );
};

BasicButtonControls.propTypes = {
  volume: PropTypes.bool,
  setVolume: PropTypes.func,
};

export default BasicButtonControls;
