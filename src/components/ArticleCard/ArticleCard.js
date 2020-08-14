import React from 'react';
import { Container } from './styled';

const ReviewCard = ({
  headline,
  imageUrl,
  teaser,
  author,
  publishDate,
  imageAlt,
}) => {
  return (
    <Container>
      <h3>{headline}</h3>
      <img src={imageUrl} alt={imageAlt} />
      <p>{teaser}</p>
      <small>{author}</small>
      <small>{publishDate}</small>
    </Container>
  );
};

export default ReviewCard;
