import React from 'react';
import { Container } from './styled';

const ReviewCard = ({
  cover,
  alt,
  artist,
  title,
  genre,
  releaseDate,
  rating,
  author,
}) => {
  return (
    <Container>
      <img src={cover} alt={alt} />
      <p>{artist}</p>
      <p>{title}</p>
      <p>{genre}</p>
      <p>{rating}/5</p>
      <small>{releaseDate}</small>
      <small>{author}</small>
    </Container>
  );
};

export default ReviewCard;
