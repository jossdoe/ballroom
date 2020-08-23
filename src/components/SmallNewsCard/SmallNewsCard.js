import React from 'react';
import moment from 'moment';
import {
  Container,
  ImageContainer,
  Image,
  NewsContent,
  Title,
  Teaser,
  Meta,
  Highlight,
} from './styled';

const SmallNewsCard = ({
  headline,
  imageUrl,
  teaser,
  author,
  publishDate,
  imageAlt,
  className,
}) => {
  const prettyPublishDate =
    moment().diff(publishDate, 'days') > 3
      ? moment(publishDate).format('LL').replace(',', ' ')
      : moment(publishDate).fromNow();

  return (
    <Container className={className}>
      <ImageContainer>
        <Image src={imageUrl} alt={imageAlt} />
      </ImageContainer>
      <NewsContent>
        <Title>{headline}</Title>
        <Meta>{`by ${author} - ${prettyPublishDate}`}</Meta>
      </NewsContent>
      <Highlight />
    </Container>
  );
};

export default SmallNewsCard;
