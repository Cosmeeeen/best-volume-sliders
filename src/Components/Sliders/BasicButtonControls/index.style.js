import styled from 'styled-components';
import * as theme from '../../../Themes/default.json';

const NumberInputSliderContainer = styled.div`
  background-color: ${theme.color.background};
  color: ${theme.color.normal};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  && button{
    font-size: 16px;
    padding: 10px;
    margin: 3px;

    background-color: ${theme.color.normal};
    color: ${theme.color.background};
    border: none;
    border-radius: 5px;

    transition: .3s all;
    :hover{
      background-color: ${theme.color.highlight};
      transform: scale(0.9, 0.9);
    }
  }
`;

export default NumberInputSliderContainer;
