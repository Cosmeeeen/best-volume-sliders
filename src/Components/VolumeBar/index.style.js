import styled from 'styled-components';

import * as theme from '../../Themes/default.json';

export const VolumeBarContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: auto;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-direction: column;
  background: transparent;

  & p {
    color: ${theme.color.normal};
    font-size: 24px;
  }

  & progress {
    appearance: none;
    width: 100%;
    height: 10px;
  }

  // Webkit configuration

  & progress::-webkit-progress-bar {
    background: transparent;
  }

  & progress::-webkit-progress-value {
    background: ${theme.color.normal};
  }

  // Mozilla configuration

  & progress::-moz-progress-bar {
    background: transparent;
  }

  // This is where IE configuration would go if I had what to test it on :|
  // (But tbh who even uses IE anymore)
`;
