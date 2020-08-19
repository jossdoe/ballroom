import React from 'react';
import moment from 'moment';
import { Container } from './styled';

const LargeArticleCard = ({
  headline,
  imageUrl,
  teaser,
  author,
  publishDate,
  imageAlt,
  className,
}) => {
  const prettyPublishDate =
    moment().diff(publishDate, 'days') > 3
      ? moment(publishDate).format('LL').replace(',', ' ')
      : moment(publishDate).fromNow();

  return (
    <Container className={className}>
      <img src={imageUrl} alt={imageAlt} />
      <div className="news-content">
        <h3>{headline}</h3>
        <p>{teaser}</p>
        <small>{`by ${author} - ${prettyPublishDate}`}</small>
      </div>
    </Container>
  );
};

export default LargeArticleCard;
