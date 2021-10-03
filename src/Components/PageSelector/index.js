import React from 'react';
import { useLocation } from 'react-router';

import {
  PageSelectorContainer,
  StyledLink,
  MenuText,
  MenuContent,
  SpinnableIcon,
} from './styledComponents';

const sliders = ['normal-slider', 'basic-buttons', 'invisible-slider'];

const formatSliderName = sliderName => {
  // I know this is confusing, but I love writing this type of functions
  //   It just converts strings as follows:
  //   'basic-buttons' => 'Basic Buttons'
  if (sliderName.charAt(0) === '/') sliderName = sliderName.substr(1);
  return sliderName
    .split('-')
    .map(elem => elem.charAt(0).toUpperCase() + elem.slice(1))
    .join(' ')
    .toString();
};

const PageSelector = () => {
  const [displayMenu, setDisplayMenu] = React.useState(false);
  const [activeSlider, setActiveSlider] = React.useState('Normal Slider');

  const { pathname } = useLocation();

  const showMenu = React.useCallback(() => {
    setDisplayMenu(true);
  }, [displayMenu]);

  const hideMenu = React.useCallback(() => {
    setDisplayMenu(false);
  }, [displayMenu]);

  React.useEffect(() => {
    setActiveSlider(formatSliderName(pathname));
  }, [pathname]);

  return (
    <PageSelectorContainer>
      <MenuText onClick={displayMenu ? hideMenu : showMenu}>
        <SpinnableIcon
          className={`fas fas fa-chevron-up ${
            displayMenu && 'flippedClockwise'
          }`}
        />
        {' ' + activeSlider + ' '}
        <SpinnableIcon
          className={`fas fas fa-chevron-up ${
            displayMenu && 'flippedCounterClockwise'
          }`}
        />
      </MenuText>
      {displayMenu && (
        <MenuContent>
          {sliders.map(sliderName => {
            if (formatSliderName(sliderName) !== activeSlider) {
              return (
                <StyledLink
                  to={`/${sliderName}`}
                  onClick={hideMenu}
                  key={sliderName}
                >
                  {formatSliderName(sliderName)}
                </StyledLink>
              );
            }
          })}
        </MenuContent>
      )}
    </PageSelectorContainer>
  );
};

export default PageSelector;
