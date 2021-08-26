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

  & p {
    color: ${theme.color.normal};
    font-size: 24px;
  }

  & progress {
    appearance: none;
    width: 100%;
    height: 10px;
  }

  & progress::-webkit-progress-bar {
    background-color: transparent;
  }

  & progress::-webkit-progress-value {
    background-color: ${theme.color.normal};
  }
`;
