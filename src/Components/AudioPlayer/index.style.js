import styled from 'styled-components';
import * as theme from '../../Themes/default.json';

export const AudioPlayerContainer = styled.div`
  background-color: ${theme.color.background};
  color: ${theme.color.highlight};
  flex-grow: 1;
  display: flex;
  justify-content: center;
`;
