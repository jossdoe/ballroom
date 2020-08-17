import React from 'react';

import { Container } from './styled';
import ReviewCard from 'components/ReviewCard';

const FeaturedReviews = ({ data }) => {
  return (
    <>
      <h2>Featured Reviews</h2>
      <Container>
        {data.albumReviewCollection.items.map(
          ({
            cover: { url, description },
            artist,
            title,
            genre,
            releaseDate,
            sys,
            rating,
            author: { name },
          }) => (
            <ReviewCard
              key={sys.id}
              cover={url}
              alt={description}
              artist={artist}
              title={title}
              genre={genre}
              releaseDate={releaseDate}
              publishDate={sys.firstPublishedAt}
              rating={rating}
              author={name}
            />
          )
        )}
      </Container>
    </>
  );
};

export default FeaturedReviews;
