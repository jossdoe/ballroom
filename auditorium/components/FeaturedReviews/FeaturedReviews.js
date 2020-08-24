import React from 'react';
import Link from 'next/link';
import { Container, TitleFlex } from './styled';
import RightSVG from 'assets/icons/right.svg';
import ReviewCard from 'components/ReviewCard';

const FeaturedReviews = ({ data }) => {
  return (
    <div>
      <TitleFlex>
        <h2>Latest Reviews</h2>
        <Link href="/reviews">
          <a>
            <aside>
              More
              <RightSVG />
            </aside>
          </a>
        </Link>
      </TitleFlex>
      <Container>
        {data.albumReviewCollection.items.map(
          ({
            cover: { url, description },
            artist,
            title,
            genre,
            releaseDate,
            sys,
            rating,
            author: { name },
          }) => (
            <ReviewCard
              key={sys.id}
              urlId={sys.id}
              cover={url}
              alt={description}
              artist={artist}
              title={title}
              genre={genre}
              releaseDate={releaseDate}
              publishDate={sys.firstPublishedAt}
              rating={rating}
              author={name}
            />
          )
        )}
      </Container>
    </div>
  );
};

export default FeaturedReviews;
