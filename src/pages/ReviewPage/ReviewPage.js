import React from 'react';
import { useQuery, gql } from '@apollo/client';
import { useParams } from 'react-router-dom';
import moment from 'moment';

import Loader from 'layout/Loader';
import Stars from 'components/ReviewCard/Stars';
import RichText from 'layout/RichText';
import {
  Header,
  TitleInfo,
  Rating,
  Band,
  Album,
  ContentFlex,
  MetaData,
  Text,
  Empty,
} from './styled';

const GET_REVIEW = (id) => gql`
query Review {
  albumReview(id: "${id}") {
    cover {
      url(transform: { width: 400, height: 400 })
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
    content {
      json
    }
    sys {
      id
      firstPublishedAt
    }
  }
}
`;

const ReviewsPage = () => {
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_REVIEW(id));

  if (loading)
    return (
      <div style={{ display: 'grid', placeItems: 'center', height: '50vh' }}>
        <Loader />
      </div>
    );

  if (error) console.error(error);
  if (data) console.log(data);

  if (data) {
    const {
      artist,
      title,
      cover,
      releaseDate,
      rating,
      content,
    } = data.albumReview;

    return (
      <>
        <Header>
          <TitleInfo>
            <Band>{artist}</Band>
            <Album>{title}</Album>
            <Rating>
              <Stars rating={rating} />
            </Rating>
          </TitleInfo>
          <img
            src={cover.url}
            alt={`Cover of the album '${title}' by ${artist}`}
          />
        </Header>
        <ContentFlex>
          <MetaData></MetaData>
          <Text>
            <RichText data={content.json} />
          </Text>
          <Empty />
        </ContentFlex>
      </>
    );
  }
};

export default ReviewsPage;
