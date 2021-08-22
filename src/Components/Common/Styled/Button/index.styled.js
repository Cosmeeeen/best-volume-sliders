import styled from 'styled-components';
import * as theme from '../../../../Themes/default.json';

const Button = styled.button`
  font-size: 16px;
  padding: 10px;
  margin: 3px;

  background-color: ${theme.color.normal};
  color: ${theme.color.background};
  border: none;
  border: 2px solid ${theme.color.normal};
  border-radius: 5px;

  transition: .3s all;

  cursor: pointer;

  :hover{
    background-color: ${theme.color.background};
    color: ${theme.color.highlight};
    border: 2px solid ${theme.color.highlight};
    transform: scale(0.9, 0.9);
  }
`;

export default Button;
