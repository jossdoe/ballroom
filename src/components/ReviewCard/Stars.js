import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';

import { ReactComponent as DiscoSVG } from 'assets/icons/discoball.svg';
import { ReactComponent as ShoeSVG } from 'assets/icons/shoetop.svg';

const Stars = ({ rating }) => {
  const theme = useContext(ThemeContext);

  return (
    <>
      {Array(rating).fill(
        <div>
          <ShoeSVG />
        </div>
      )}
      {Array(5 - rating).fill(
        <div style={{ opacity: '0.3' }}>
          <ShoeSVG />
        </div>
      )}
    </>
  );
};

export default Stars;
