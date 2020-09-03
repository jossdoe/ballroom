import { useRouter } from 'next/router';
import moment from 'moment';

import useGQL from 'hooks/useGQL';
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

const GET_TOURS = `
  query Tours {
    tours {
      id
      name
      band
      shows {
        date
        city
      }
    }
  }
`;

const ReviewsPage = () => {
  const history = useRouter();
  const { loading, error, data } = useGQL(
    GET_TOURS,
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

  const tours = data.tours;
  const featTour = tours[0];
  const toursArray = tours.slice(1);

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
        <Featured>
          <FeatName>{featTour.name}</FeatName>
          <FeatBand>{featTour.band}</FeatBand>
          <FeatDates>{calcDates(featTour.shows)}</FeatDates>
          <FeatButton onClick={() => history.push(`/tours/${featTour.id}`)}>
            See Shows
          </FeatButton>
        </Featured>
        <TourList>
          {toursArray.map((tour) => (
            <TourItem
              key={tour.id}
              onClick={() => history.push(`/tours/${tour.id}`)}
            >
              <div
                style={{
                  flex: '1',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'flex-start',
                }}
              >
                <ItemBand>{tour.band}</ItemBand>
              </div>
              <ItemDates>{calcDates(tour.shows)}</ItemDates>
            </TourItem>
          ))}
        </TourList>
      </Container>
    </Layout>
  );
};

export default ReviewsPage;
