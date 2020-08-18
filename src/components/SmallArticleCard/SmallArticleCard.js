import React from 'react';
import moment from 'moment';
import { Container, NewsContent, Title, Teaser, Meta } from './styled';

const SmallArticleCard = ({
  headline,
  imageUrl,
  teaser,
  author,
  publishDate,
  imageAlt,
  className,
}) => {
  const prettyPublishDate =
    moment(publishDate).fromNow() === '4 days ago'
      ? moment(publishDate).format('LL').replace(',', ' ')
      : moment(publishDate).fromNow();

  return (
    <Container className={className}>
      <img src={imageUrl} alt={imageAlt} />
      <NewsContent>
        <Title>{headline}</Title>
        <Teaser>{teaser}</Teaser>
        <Meta>{`by ${author} - ${prettyPublishDate}`}</Meta>
      </NewsContent>
    </Container>
  );
};

export default SmallArticleCard;
