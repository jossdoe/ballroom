import React from 'react';
import { useHistory } from 'react-router-dom';
import moment from 'moment';

import Stars from './Stars';
import {
  ReleaseDate,
  Container,
  AlbumTitle,
  BandName,
  AlbumDetails,
  Rating,
  Meta,
} from './styled';

const ReviewCard = ({
  cover,
  alt,
  artist,
  title,
  genre,
  releaseDate,
  publishDate,
  rating,
  author,
  urlId,
}) => {
  const history = useHistory();
  const prettyPublishDate =
    moment().diff(publishDate, 'days') > 3
      ? moment(publishDate).format('LL').replace(',', ' ')
      : moment(publishDate).fromNow();
  const prettyReleaseDate = moment(releaseDate).format('DD[/]MM[/]YY');

  return (
    <Container onClick={() => history.push(`/reviews/${urlId}`)}>
      <img src={cover} alt={alt} />
      <ReleaseDate>{prettyReleaseDate}</ReleaseDate>
      <AlbumTitle>{title}</AlbumTitle>
      <BandName>{artist}</BandName>
      <AlbumDetails>{genre}</AlbumDetails>
      <Rating>
        <Stars rating={rating} />
      </Rating>
      <Meta>{`by ${author} – ${prettyPublishDate}`}</Meta>
    </Container>
  );
};

export default ReviewCard;
