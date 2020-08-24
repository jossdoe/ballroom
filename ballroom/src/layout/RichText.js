import React from 'react';
import styled from 'styled-components';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const Container = styled.div`
  font-size: 1.2rem;
`;

const RichText = ({ data }) => {
  return <Container>{documentToReactComponents(data)}</Container>;
};

export default RichText;
