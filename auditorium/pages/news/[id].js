import moment from 'moment';
import { useRouter } from 'next/router';
import useGQL from 'hooks/useGQL';

import Layout from 'layout/Layout';
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
} from 'styles/pages/ArticlePage';

const GET_ARTICLE = (id) => `
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

const GET_MORE_NEWS = `
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
  const router = useRouter();
  const { id } = router.query;
  const {
    loading: articleLoading,
    error: articleError,
    data: articleData,
  } = useGQL(GET_ARTICLE(id));
  const {
    loading: moreNewsLoading,
    error: moreNewsError,
    data: moreNewsData,
  } = useGQL(GET_MORE_NEWS);

  if (articleLoading)
    return (
      <Layout>
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
    <Layout>
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
    </Layout>
  );
};

export default ArticlePage;
