import styled from 'styled-components';
import * as theme from '../../../Themes/default.json';

const BasicButtonControlsContainer = styled.div`
  background-color: ${theme.color.background};
  color: ${theme.color.normal};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export default BasicButtonControlsContainer;
