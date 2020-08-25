import React from 'react';
import { useRouter } from 'next/router';
import moment from 'moment';
import {
  Container,
  ImageContainer,
  Image,
  NewsContent,
  Title,
  Teaser,
  Meta,
} from './styled';

const LargeArticleCard = ({
  headline,
  imageUrl,
  teaser,
  author,
  publishDate,
  imageAlt,
  urlId,
}) => {
  const router = useRouter();
  const prettyPublishDate =
    moment().diff(publishDate, 'days') > 3
      ? moment(publishDate).format('LL').replace(',', ' ')
      : moment(publishDate).fromNow();

  return (
    <Container onClick={() => router.push(`/news/${urlId}`)}>
      <ImageContainer>
        <Image src={imageUrl} alt={imageAlt} />
      </ImageContainer>
      <NewsContent>
        <Title>{headline}</Title>
        <Teaser>{teaser}</Teaser>
        <Meta>{`by ${author} - ${prettyPublishDate}`}</Meta>
      </NewsContent>
    </Container>
  );
};

export default LargeArticleCard;
