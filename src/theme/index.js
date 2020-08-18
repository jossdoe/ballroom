import { createGlobalStyle } from 'styled-components';

export const theme = {
  primary: '#DA4167',
  secondary: '#00CC99',
  color: '#EAF2EF',
  colorDark: '#beb7c7',
  backgroundLight: '#53577D',
  backgroundMedium: '#3A3D57',
  backgroundDark: '#181a25',
  fontFamily: 'Mulish, sans-serif',
};

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: ${theme.fontFamily};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: ${theme.backgroundMedium};
    color: ${theme.color};
  }

  p {
    font-size: 1rem;
  }

  h3 {
    font-size: 1.333rem;
  }

  h2 {
    font-size: 1.777rem;
  }

  h1 {
    font-size: 2.369rem;
  }

  small {
    font-size: 0.75rem;
  }
`;
