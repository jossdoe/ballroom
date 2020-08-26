import React from 'react';
import useGQL from 'hooks/useGQL';
import Layout from 'layout/Layout';
import Loader from 'layout/Loader';
import LargeNewsCard from 'components/LargeNewsCard';
import SmallNewsCard from 'components/SmallNewsCard';
import { Container, GridContainer } from 'styles/pages/NewsPage';

const GET_FEATURED_NEWS = `
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

const GET_ALL_NEWS = `
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
  const featuredNews = useGQL(GET_FEATURED_NEWS);
  const allNews = useGQL(GET_ALL_NEWS);

  if (featuredNews.loading || allNews.loading)
    return (
      <Layout title="news">
        <div
          style={{
            display: 'grid',
            placeItems: 'center',
            height: '50vh',
          }}
        >
          <Loader />
        </div>
      </Layout>
    );

  if (featuredNews.data && allNews.data) {
    const featuredItems = featuredNews.data.newsCollection.items;
    const allItems = allNews.data.newsCollection.items;
    const latestNews = allItems.filter(
      (item) => item.sys.id !== featuredItems[0].sys.id
    );

    return (
      <Layout title="news">
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
            {latestNews.map((item) => (
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
      </Layout>
    );
  }
};

export default NewsPage;
