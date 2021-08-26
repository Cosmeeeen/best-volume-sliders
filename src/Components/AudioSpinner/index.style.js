import styled from 'styled-components';
import * as theme from '../../Themes/default.json';

export const AudioSpinnerContainer = styled.div`
  color: ${theme.color.normal};
  font-size: 100px;
  margin: 15px;
  .fas {
    transition: 0.3s all;
  }
  .fas:hover {
    font-size: 90%;
    color: ${theme.color.highlight};
  }
  .rotate {
    animation: rotation 2s infinite linear;
  }
  @keyframes rotation {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(359deg);
    }
  }
`;
