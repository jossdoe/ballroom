import { useRouter } from 'next/router';
import moment from 'moment';

import useGQL from 'hooks/useGQL';
import Layout from 'layout/Layout';
import Loader from 'layout/Loader';
import {
  Container,
  Header,
  TourName,
  TourList,
  TourItem,
  BandName,
  Dates,
  City,
  ItemDate,
} from 'styles/pages/TourPage';

const GET_TOUR = (id) => `
  query Tour {
    tour(id: "${id}") {
      id
      name
      band
      shows {
        id
        date
        city
        venue
        support
      }
    }
  }
`;

const ReviewsPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const { loading, error, data } = useGQL(
    GET_TOUR(id),
    'http://api-backstage.herokuapp.com/graphql'
  );

  if (loading)
    return (
      <Layout title="reviews">
        <div style={{ display: 'grid', placeItems: 'center', height: '50vh' }}>
          <Loader />
        </div>
      </Layout>
    );
  if (error) return <p>{error.message}</p>;

  const tour = data.tour;

  function calcDates(shows) {
    const dates = shows
      .map((show) => show.date)
      .sort((a, b) => Date.parse(a) > Date.parse(b));

    const firstDate = moment(dates[0]).format('DD/MM/YYYY');
    const secondDate = moment(dates[dates.length - 1]).format('DD/MM/YYYY');

    return `${firstDate} – ${secondDate}`;
  }

  return (
    <Layout title="tours">
      <Container>
        <Header>
          <TourName>{tour.name}</TourName>
          <BandName>{tour.band}</BandName>
          <Dates>{calcDates(tour.shows)}</Dates>
        </Header>
        <TourList>
          {tour.shows.map((show) => (
            <TourItem key={show.id}>
              <div
                style={{
                  flex: '1',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'flex-start',
                }}
              >
                <City>{`${show.city}, ${show.venue}`}</City>
              </div>
              <ItemDate>{moment(show.date).format('DD/MM/YYYY')}</ItemDate>
            </TourItem>
          ))}
        </TourList>
      </Container>
    </Layout>
  );
};

export default ReviewsPage;
