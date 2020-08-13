import React from 'react';
import { Container } from './styled';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

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
      {documentToReactComponents(teaser)}
      <small>{author}</small>
      <small>{publishDate}</small>
    </Container>
  );
};

export default ReviewCard;
