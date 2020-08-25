import React from 'react';
import { useRouter } from 'next/router';
import moment from 'moment';
import {
  Container,
  ImageContainer,
  Image,
  NewsContent,
  Title,
  Meta,
  Highlight,
} from './styled';

const SmallNewsCard = ({
  headline,
  imageUrl,
  author,
  publishDate,
  imageAlt,
  className,
  urlId,
}) => {
  const router = useRouter();
  const prettyPublishDate =
    moment().diff(publishDate, 'days') > 3
      ? moment(publishDate).format('LL').replace(',', ' ')
      : moment(publishDate).fromNow();

  return (
    <Container
      className={className}
      onClick={() => router.push(`/news/${urlId}`)}
    >
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
