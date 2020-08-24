import React from 'react';
import { useQuery, gql } from '@apollo/client';

import Loader from 'layout/Loader';
import LargeNewsCard from 'components/LargeNewsCard';
import SmallNewsCard from 'components/SmallNewsCard';
import { Container, GridContainer } from './styled';

const GET_FEATURED_NEWS = gql`
  query FeaturedNews {
    newsCollection(where: { featured: true }, limit: 1) {
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

const GET_ALL_NEWS = gql`
  query AllNews {
    newsCollection {
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

const NewsPage = () => {
  const featuredNews = useQuery(GET_FEATURED_NEWS);
  const allNews = useQuery(GET_ALL_NEWS);

  if (featuredNews.loading || allNews.loading)
    return (
      <div
        style={{
          display: 'grid',
          placeItems: 'center',
          height: '50vh',
        }}
      >
        <Loader />
      </div>
    );

  if (featuredNews.data && allNews.data) {
    const featuredItems = featuredNews.data.newsCollection.items;
    const allItems = allNews.data.newsCollection.items;

    return (
      <div>
        <Container>
          <LargeNewsCard
            key={featuredItems[0].sys.id}
            urlId={featuredItems[0].sys.id}
            headline={featuredItems[0].headline}
            imageUrl={featuredItems[0].image.url}
            imageAlt={featuredItems[0].image.description}
            author={featuredItems[0].author.name}
            teaser={featuredItems[0].teaser}
            publishDate={featuredItems[0].sys.firstPublishedAt}
          />
          <GridContainer>
            {allItems.map((item) => (
              <SmallNewsCard
                key={item.sys.id}
                urlId={item.sys.id}
                headline={item.headline}
                imageUrl={item.image.url}
                imageAlt={item.image.description}
                author={item.author.name}
                publishDate={item.sys.firstPublishedAt}
              />
            ))}
          </GridContainer>
        </Container>
      </div>
    );
  }
};

export default NewsPage;
