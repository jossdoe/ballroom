import React from 'react';
import { Container } from './styled';
import FeaturedNews from 'components/FeaturedNews';
import FeaturedReviews from 'components/FeaturedReviews';

const IndexPage = () => {
  return (
    <Container>
      <FeaturedNews />
      <FeaturedReviews />
    </Container>
  );
};

export default IndexPage;
