import React from 'react';
import moment from 'moment';
import { Container } from './styled';

const ArticleCard = ({
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
      <div className="news-content">
        <h3>{headline}</h3>
        <p>{teaser}</p>
        <small>{author}</small>
        <small>{prettyPublishDate}</small>
      </div>
    </Container>
  );
};

export default ArticleCard;
