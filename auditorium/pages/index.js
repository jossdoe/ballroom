import React from 'react';
import useGQL from 'hooks/useGQL';
import { Container, SiteName } from 'styles/pages/IndexPage';
import FeaturedNews from 'components/FeaturedNews';
import FeaturedReviews from 'components/FeaturedReviews';
import Loader from 'layout/Loader';
import Layout from 'layout/Layout';

const GET_REVIEWS_AND_NEWS = `
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
  const { loading, data, error } = useGQL(GET_REVIEWS_AND_NEWS);

  if (loading)
    return (
      <Container
        style={{ display: 'grid', placeItems: 'center', height: '50vh' }}
      >
        <Loader />
      </Container>
    );

  if (error) return <p>{error.message + 'you dumb fuck'}</p>;

  return (
    <Layout>
      <Container>
        <div style={{ textAlign: 'center' }}>
          <SiteName>ballroom</SiteName>
        </div>
        <FeaturedNews data={data} />
        <FeaturedReviews data={data} />
      </Container>
    </Layout>
  );
};

export default IndexPage;
