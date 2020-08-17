import React from 'react';

import { Container } from './styled';
import ArticleCard from 'components/ArticleCard';
//! import Stack from 'layout/Stack';

const FeaturedNews = ({ data }) => {
  return (
    <>
      <h2>Featured News</h2>
      <Container active={true}>
        {data.newsCollection.items.map(
          (
            {
              headline,
              image: { url, description },
              author: { name },
              teaser,
              sys: { id, firstPublishedAt },
            },
            idx
          ) => (
            <ArticleCard
              key={id}
              className={`article${idx}`}
              headline={headline}
              imageUrl={url}
              imageAlt={description}
              author={name}
              teaser={teaser}
              publishDate={firstPublishedAt}
            />
          )
        )}
      </Container>
    </>
  );
};

export default FeaturedNews;
