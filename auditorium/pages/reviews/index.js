import { useRouter } from 'next/router';
import useGQL from 'hooks/useGQL';
import Layout from 'layout/Layout';
import ReviewCard from 'components/ReviewCard';
import Loader from 'layout/Loader';
import Stars from 'components/ReviewCard/Stars';
import {
  Container,
  Author,
  TitleInfo,
  Header,
  Band,
  Album,
  Rating,
} from 'styles/pages/ReviewsPage';

const GET_REVIEWS = `
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
  const history = useRouter();
  const { loading, error, data } = useGQL(GET_REVIEWS);
  const { artist, title, rating, author, cover, sys } =
    data?.albumReviewCollection?.items[0] || {};

  if (loading)
    return (
      <Layout title="reviews">
        <div style={{ display: 'grid', placeItems: 'center', height: '50vh' }}>
          <Loader />
        </div>
      </Layout>
    );
  if (error) return <p>{error.message}</p>;

  return (
    <Layout title="reviews">
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
    </Layout>
  );
};

export default ReviewsPage;
