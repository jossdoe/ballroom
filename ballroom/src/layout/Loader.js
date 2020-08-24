import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { default as Loading } from 'react-loader-spinner';

const Loader = () => {
  const theme = useContext(ThemeContext);
  return <Loading color={theme.primary} type="Audio" />;
};

export default Loader;
