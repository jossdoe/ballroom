import React from 'react';
import { useQuery, gql } from '@apollo/client';
import { Container, Author } from './styled';
import ReviewCard from 'components/ReviewCard';
import Loader from 'layout/Loader';
import { TitleInfo, Header, Band, Album, Rating } from './styled';
import Stars from 'components/ReviewCard/Stars';

const GET_REVIEWS = gql`
  query Reviews {
    albumReviewCollection {
      items {
        cover {
          url(transform: { width: 300, height: 300 })
        }
        artist
        title
        genre
        releaseDate
        rating
        author {
          name
        }
        sys {
          id
          firstPublishedAt
        }
      }
    }
  }
`;

const ReviewsPage = () => {
  const { loading, error, data } = useQuery(GET_REVIEWS);

  if (loading)
    return (
      <div style={{ display: 'grid', placeItems: 'center', height: '50vh' }}>
        <Loader />
      </div>
    );
  if (error) return <p>{error.message}</p>;

  return (
    <>
      <Header>
        <TitleInfo>
          <Band>{data?.albumReviewCollection.items[0].artist}</Band>
          <Album>{data?.albumReviewCollection.items[0].title}</Album>
          <Rating>
            <Stars rating={data?.albumReviewCollection.items[0].rating} />
          </Rating>
          <Author>by {data?.albumReviewCollection.items[0].author.name}</Author>
        </TitleInfo>
        <img
          src={data?.albumReviewCollection.items[0].cover.url}
          alt={`Cover of the album '${data?.albumReviewCollection.items[0].title}' by ${data?.albumReviewCollection.items[0].artist}`}
        />
      </Header>
      <h2>Latest Reviews</h2>
      <Container>
        {data?.albumReviewCollection.items.map(
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

export default ReviewsPage;
