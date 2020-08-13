import React from 'react';
import { useQuery, gql } from '@apollo/client';
import Loader from 'layout/Loader';

import { Container } from './styled';
import ArticleCard from 'components/ArticleCard';
import Stack from 'layout/Stack';

const GET_NEWS = gql`
  query News {
    newsCollection {
      items {
        headline
        image {
          url(transform: { width: 375, height: 200, resizeStrategy: FILL })
          description
        }
        author {
          name
        }
        teaser {
          json
        }
        sys {
          id
          firstPublishedAt
        }
      }
    }
  }
`;
// headline, url, teaser, author, publishDate
const FeaturedNews = () => {
  const { loading, error, data } = useQuery(GET_NEWS);

  if (loading) return <Loader />;
  if (error) return <p>{error.message}</p>;

  return (
    <>
      <h2>Featured News</h2>
      <Container>
        {data.newsCollection.items.map(
          ({
            headline,
            image: { url, description },
            author: { name },
            teaser: { json },
            sys: { id, firstPublishedAt },
          }) => (
            <ArticleCard
              key={id}
              headline={headline}
              imageUrl={url}
              imageAlt={description}
              author={name}
              teaser={json}
              publishDate={firstPublishedAt}
            />
          )
        )}
      </Container>
    </>
  );
};

export default FeaturedNews;
