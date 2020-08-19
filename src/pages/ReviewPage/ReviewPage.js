import React from 'react';
import { useQuery, gql } from '@apollo/client';
import { useParams } from 'react-router-dom';
import moment from 'moment';

import { ReactComponent as FacebookSVG } from 'assets/share/fb.svg';
import { ReactComponent as TwitterSVG } from 'assets/share/tw.svg';
import { ReactComponent as PinterestSVG } from 'assets/share/pi.svg';
import { ReactComponent as MailSVG } from 'assets/share/mail.svg';

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
  AuthorData,
  ReleaseDate,
  Genre,
  ShareMenu,
  ShareButton,
  Options,
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
      author,
      sys,
      genre,
    } = data.albumReview;

    const prettyPublishDate =
      moment().diff(sys.firstPublishedAt, 'days') > 3
        ? moment(sys.firstPublishedAt).format('LL').replace(',', ' ')
        : moment(sys.firstPublishedAt).fromNow();
    const prettyReleaseDate = moment(releaseDate).format('DD[/]MM[/]YY');

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
          <MetaData>
            <ReleaseDate>
              <span>{prettyReleaseDate}</span>
            </ReleaseDate>
            <Genre>{genre}</Genre>
            <ShareMenu>
              <ShareButton>SHARE</ShareButton>
              <Options>
                <div>
                  <FacebookSVG />
                </div>
                <div>
                  <TwitterSVG />
                </div>
                <div>
                  <PinterestSVG />
                </div>
              </Options>
            </ShareMenu>
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
      </>
    );
  }
};

export default ReviewsPage;
