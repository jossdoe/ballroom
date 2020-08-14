import React from 'react';
import { useQuery, gql } from '@apollo/client';
import Loader from 'layout/Loader';

import { Container } from './styled';
import ReviewCard from 'components/ReviewCard';

const GET_REVIEWS = gql`
  query Reviews {
    albumReviewCollection(limit: 3) {
      items {
        cover {
          url(transform: { width: 375, height: 400 })
          description
        }
        artist
        title
        genre
        releaseDate
        rating
        author {
          name
        }
      }
    }
  }
`;

const HomeReviews = () => {
  const { loading, error, data } = useQuery(GET_REVIEWS);

  if (loading) return <Loader />;
  if (error) return <p>{error.message}</p>;

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
            rating,
            author: { name },
          }) => (
            <ReviewCard
              cover={url}
              alt={description}
              artist={artist}
              title={title}
              genre={genre}
              releaseDate={releaseDate}
              rating={rating}
              author={name}
            />
          )
        )}
      </Container>
    </>
  );
};

export default HomeReviews;
