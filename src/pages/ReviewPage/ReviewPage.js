import React, { useState } from 'react';
import { useQuery, gql } from '@apollo/client';
import { useParams } from 'react-router-dom';
import moment from 'moment';

import ShareMenu from 'layout/ShareMenu';
import Loader from 'layout/Loader';
import Stars from 'components/ReviewCard/Stars';
import RichText from 'layout/RichText';
import SpotifyTracks from 'components/SpotifyTracks';
import { ReactComponent as PlaySVG } from 'assets/icons/play.svg';
import { ReactComponent as CoverSVG } from 'assets/icons/cover.svg';
import {
  Header,
  TitleInfo,
  Rating,
  Band,
  Album,
  ContentFlex,
  MetaData,
  Text,
  AuthorData,
  ReleaseDate,
  Genre,
  ShareMenuContainer,
  TracksButton,
  FavTracks,
  AlbumCover,
  MobileTracks,
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
    tracks
    sys {
      id
      firstPublishedAt
    }
  }
}
`;

const ReviewPage = () => {
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_REVIEW(id));
  const [showFavs, setShowFavs] = useState(false);

  if (loading)
    return (
      <div style={{ display: 'grid', placeItems: 'center', height: '50vh' }}>
        <Loader />
      </div>
    );

  if (error) console.error(error);

  if (data) {
    const {
      artist,
      title,
      cover,
      releaseDate,
      rating,
      content,
      author,
      sys,
      genre,
      tracks,
    } = data.albumReview;

    const prettyPublishDate =
      moment().diff(sys.firstPublishedAt, 'days') > 3
        ? moment(sys.firstPublishedAt).format('LL').replace(',', ' ')
        : moment(sys.firstPublishedAt).fromNow();
    const prettyReleaseDate = moment(releaseDate).format('DD[/]MM[/]YY');

    return (
      <>
        <Header>
          <FavTracks show={showFavs}>
            <h3>Editor's Picks</h3>
            <SpotifyTracks tracks={tracks} />
          </FavTracks>
          <TitleInfo>
            <TracksButton onClick={() => setShowFavs(!showFavs)}>
              {showFavs ? <CoverSVG /> : <PlaySVG />}
            </TracksButton>
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
          </TitleInfo>
          <AlbumCover
            show={!showFavs}
            className="desktop-image"
            src={cover.url}
            alt={`Cover of the album '${title}' by ${artist}`}
          />
        </Header>
        <ContentFlex>
          <MetaData>
            <ReleaseDate>
              <span>{prettyReleaseDate}</span>
            </ReleaseDate>
            <Genre>
              <span>{genre}</span>
            </Genre>
            <ShareMenuContainer>
              <ShareMenu />
            </ShareMenuContainer>
          </MetaData>
          <Text>
            <RichText data={content.json} />
          </Text>
          <AuthorData>
            <div>
              by <strong>{author.name}</strong>
            </div>
            <small>
              published
              <br />
              {prettyPublishDate}
            </small>
          </AuthorData>
        </ContentFlex>
        <MobileTracks show={showFavs}>
          <h3>Editor's Picks</h3>
          <SpotifyTracks tracks={tracks} />
        </MobileTracks>
      </>
    );
  }
};

export default ReviewPage;
