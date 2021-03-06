import React from 'react';
import { useQuery, gql } from '@apollo/client';
import { Container, SiteName } from './styled';
import FeaturedNews from 'components/FeaturedNews';
import FeaturedReviews from 'components/FeaturedReviews';
import Loader from 'layout/Loader';

const GET_REVIEWS_AND_NEWS = gql`
  query HomeReviewsAndNews {
    albumReviewCollection(limit: 5) {
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
        sys {
          id
          firstPublishedAt
        }
      }
    }
    newsCollection(where: { featured: true }, limit: 4) {
      items {
        headline
        image {
          url(transform: { width: 600, height: 600 })
          description
        }
        author {
          name
        }
        teaser
        sys {
          id
          firstPublishedAt
        }
      }
    }
  }
`;

const IndexPage = () => {
  const { loading, data } = useQuery(GET_REVIEWS_AND_NEWS);

  if (loading)
    return (
      <Container
        style={{ display: 'grid', placeItems: 'center', height: '50vh' }}
      >
        <Loader />
      </Container>
    );

  return (
    <Container>
      <div style={{ textAlign: 'center' }}>
        <SiteName>ballroom</SiteName>
      </div>
      <FeaturedNews data={data} />
      <FeaturedReviews data={data} />
    </Container>
  );
};

export default IndexPage;
