import React from 'react';
import moment from 'moment';
import { useParams } from 'react-router-dom';
import { useQuery, gql } from '@apollo/client';

import Loader from 'layout/Loader';
import ShareMenu from 'layout/ShareMenu';
import RichText from 'layout/RichText';
import SmallNewsCard from 'components/SmallNewsCard';
import {
  Container,
  FlexContainer,
  GridContainer,
  Meta,
  Title,
  Teaser,
  ImageContainer,
  Image,
  ImageDescription,
  Content,
  Separator,
  Author,
  Publishing,
} from './styled';

const GET_ARTICLE = (id) => gql`
  query Article {
    news(id: "${id}") {
      headline
      teaser
      image {
        url
        description
      }
      content {
        json
      }
      author {
        name
      }
      sys {
        firstPublishedAt
      }
    }
  }
`;

const GET_MORE_NEWS = gql`
  query MoreNews {
    newsCollection(limit: 8) {
      items {
        headline
        image {
          url(transform: { width: 600, height: 600 })
          description
        }
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

const ArticlePage = () => {
  const { id } = useParams();
  const {
    loading: articleLoading,
    error: articleError,
    data: articleData,
  } = useQuery(GET_ARTICLE(id));
  const {
    loading: moreNewsLoading,
    error: moreNewsError,
    data: moreNewsData,
  } = useQuery(GET_MORE_NEWS);

  if (articleLoading)
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

  if (articleError || moreNewsError) return <h3>{articleError.message}</h3>;

  const {
    headline,
    teaser,
    image: { url: imageUrl, description: imageDescription },
    content: { json: JSONcontent },
    author: { name: authorName },
    sys: { firstPublishedAt: publishingDate },
  } = articleData.news;

  const prettyPublishDate =
    moment().diff(publishingDate, 'days') > 3
      ? moment(publishingDate).format('LL').replace(',', ' ')
      : moment(publishingDate).fromNow();

  return (
    <Container>
      <Title>{headline}</Title>
      <Separator />
      <Teaser>{teaser}</Teaser>

      <ImageContainer>
        <Image src={imageUrl} />
        <ImageDescription>{imageDescription}</ImageDescription>
      </ImageContainer>
      <FlexContainer>
        <Content>
          <RichText data={JSONcontent} />
        </Content>
        <Meta>
          <Author>
            by <span>{authorName}</span>
          </Author>
          <Publishing>
            published <br />
            {prettyPublishDate}
          </Publishing>
          <ShareMenu />
        </Meta>
      </FlexContainer>
      <h3 style={{ marginTop: '80px', fontSize: '2.5rem' }}>More News</h3>
      {moreNewsLoading && (
        <div
          style={{
            display: 'grid',
            placeItems: 'center',
            height: '50vh',
          }}
        >
          <Loader />
        </div>
      )}
      <GridContainer>
        {moreNewsData &&
          moreNewsData.newsCollection.items.map((item) => (
            <SmallNewsCard
              key={item.sys.id}
              headline={item.headline}
              imageUrl={item.image.url}
              imageAlt={item.image.description}
              author={item.author.name}
              publishDate={item.sys.firstPublishedAt}
            />
          ))}
      </GridContainer>
    </Container>
  );
};

export default ArticlePage;
