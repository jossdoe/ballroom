import React from 'react';
import { useHistory } from 'react-router-dom';
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
  const history = useHistory();
  const { loading, error, data } = useQuery(GET_REVIEWS);
  const { artist, title, rating, author, cover, sys } =
    data?.albumReviewCollection?.items[0] || {};

  if (loading)
    return (
      <div style={{ display: 'grid', placeItems: 'center', height: '50vh' }}>
        <Loader />
      </div>
    );
  if (error) return <p>{error.message}</p>;

  return (
    <>
      <Header onClick={() => history.push(`/reviews/${sys.id}`)}>
        <TitleInfo>
          <Band>{artist}</Band>
          <Album>{title}</Album>
          <img
            className="mobile-image"
            src={cover.url}
            alt={`Cover of the album '${title}' by ${artist}`}
          />
          <Rating>
            <Stars rating={rating} />
          </Rating>
          <Author>by {author.name}</Author>
        </TitleInfo>
        <img
          className="desktop-image"
          src={cover.url}
          alt={`Cover of the album '${title}' by ${artist}`}
        />
      </Header>
      <h2>Latest Reviews</h2>
      <Container>
        {data?.albumReviewCollection.items
          .filter((el, idx) => idx !== 0)
          .map(
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
                urlId={sys.id}
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
