import { useRouter } from 'next/router';
// import useGQL from 'hooks/useGQL';
import Layout from 'layout/Layout';
import Loader from 'layout/Loader';
import {
  Container,
  Featured,
  FeatBand,
  FeatName,
  FeatDates,
  TourList,
  TourItem,
  ItemBand,
  ItemDates,
  FeatButton,
} from 'styles/pages/ToursPage';

// const GET_REVIEWS = `
//   query Reviews {
//     albumReviewCollection {
//       items {
//         cover {
//           url(transform: { width: 300, height: 300 })
//         }
//         artist
//         title
//         genre
//         releaseDate
//         rating
//         author {
//           name
//         }
//         sys {
//           id
//           firstPublishedAt
//         }
//       }
//     }
//   }
// `;

const ReviewsPage = () => {
  // const history = useRouter();
  // const { loading, error, data } = useGQL(GET_REVIEWS);
  // const { artist, title, rating, author, cover, sys } =
  //   data?.albumReviewCollection?.items[0] || {};

  // if (loading)
  //   return (
  //     <Layout title="reviews">
  //       <div style={{ display: 'grid', placeItems: 'center', height: '50vh' }}>
  //         <Loader />
  //       </div>
  //     </Layout>
  //   );
  // if (error) return <p>{error.message}</p>;

  return (
    <Layout title="tours">
      <Container>
        <Featured>
          <FeatName>FeatName</FeatName>
          <FeatBand>FeatBand live</FeatBand>
          <FeatDates>11/04/20 – 19/04/20</FeatDates>
          <FeatButton>See Shows</FeatButton>
        </Featured>
        <TourList>
          <TourItem>
            <div
              style={{
                flex: '1',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-start',
              }}
            >
              <ItemBand>ItemBand</ItemBand>
            </div>
            <ItemDates>11/04/20 – 19/04/20</ItemDates>
          </TourItem>
        </TourList>
      </Container>
    </Layout>
  );
};

export default ReviewsPage;
