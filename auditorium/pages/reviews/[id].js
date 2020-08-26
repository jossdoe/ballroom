import React, { useState } from 'react';
import useGQL from 'hooks/useGQL';
import { useRouter } from 'next/router';
import moment from 'moment';

import Layout from 'layout/Layout';
import ShareMenu from 'layout/ShareMenu';
import Loader from 'layout/Loader';
import Stars from 'components/ReviewCard/Stars';
import RichText from 'layout/RichText';
import SpotifyTracks from 'components/SpotifyTracks';
import PlaySVG from 'assets/icons/play.svg';
import CoverSVG from 'assets/icons/cover.svg';
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
  ReleaseDateMobile,
  Genre,
  GenreMobile,
  ShareMenuContainer,
  TracksButton,
  FavTracks,
  AlbumCover,
  MobileTracks,
  MobileImageContainer,
} from 'styles/pages/ReviewPage';

const GET_REVIEW = (id) => `
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
  const router = useRouter();
  const { id } = router.query;
  const { loading, error, data } = useGQL(GET_REVIEW(id));
  const [showFavs, setShowFavs] = useState(false);

  if (loading)
    return (
      <Layout title="loading ...">
        <div style={{ display: 'grid', placeItems: 'center', height: '50vh' }}>
          <Loader />
        </div>
      </Layout>
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
    const hasTracks = !!(tracks?.length > 0);

    const prettyPublishDate =
      moment().diff(sys.firstPublishedAt, 'days') > 3
        ? moment(sys.firstPublishedAt).format('LL').replace(',', ' ')
        : moment(sys.firstPublishedAt).fromNow();
    const prettyReleaseDate = moment(releaseDate).format('DD[/]MM[/]YY');

    return (
      <Layout title={`'${title}' by ${artist}`}>
        <Header>
          {hasTracks ? (
            <FavTracks show={showFavs}>
              <h3>Editor's Picks</h3>
              <SpotifyTracks tracks={tracks} />
            </FavTracks>
          ) : null}
          <TitleInfo>
            {hasTracks ? (
              <TracksButton onClick={() => setShowFavs(!showFavs)}>
                {showFavs ? <CoverSVG /> : <PlaySVG />}
              </TracksButton>
            ) : null}
            <GenreMobile>
              <span>{genre}</span>
            </GenreMobile>
            <Band>{artist}</Band>
            <Album>{title}</Album>
            <MobileImageContainer>
              <img
                className="mobile-image"
                src={cover.url}
                alt={`Cover of the album '${title}' by ${artist}`}
              />
              <ReleaseDateMobile>
                <span>{prettyReleaseDate}</span>
              </ReleaseDateMobile>
            </MobileImageContainer>
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
        {hasTracks ? (
          <MobileTracks show={showFavs}>
            <h3>Editor's Picks</h3>
            <SpotifyTracks tracks={tracks} />
          </MobileTracks>
        ) : null}
      </Layout>
    );
  }
};

export default ReviewPage;
