import styled from 'styled-components';
import { Link } from 'react-router-dom';

import * as theme from '../../Themes/default.json';

const PageSelectorContainer = styled.div`
  position: fixed;

  bottom: 0;
  width: 100%;
  left: 0;

  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const StyledLink = styled(Link)`
  text-decoration: none;

  font-weight: 800;
  font-size: 32px;
  color: ${theme.color.normal};

  transition: 0.3s all;

  &:hover {
    color: ${theme.color.highlight};
  }
`;

const MenuText = styled.p`
  cursor: pointer;
  font-weight: 800;
  font-size: 32px;
  color: ${theme.color.normal};

  transition: 0.3s all;

  &:hover {
    color: ${theme.color.highlight};
  }
`;

const MenuContent = styled.div`
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const SpinnableIcon = styled.i`
  transition: 0.3s transform;

  &.flippedClockwise {
    transform: rotate(180deg);
  }

  &.flippedCounterClockwise {
    transform: rotate(-180deg);
  }
  &:hover {
    color: ${theme.color.highlight};
  }
`;

export {
  PageSelectorContainer,
  StyledLink,
  MenuText,
  MenuContent,
  SpinnableIcon,
};
