import React from 'react';
import Link from 'next/link';
import { Container, TitleFlex, FlexContainer } from './styled';
import RightSVG from 'assets/icons/right.svg';
import SmallArticleCard from 'components/SmallArticleCard';
import LargeArticleCard from 'components/LargeArticleCard';

const FeaturedNews = ({ data }) => {
  const items = data.newsCollection.items;

  return (
    <div>
      <TitleFlex>
        <h2>Featured News</h2>
        <Link href="/news">
          <a>
            <aside>
              More
              <RightSVG />
            </aside>
          </a>
        </Link>
      </TitleFlex>
      <Container active={true}>
        <LargeArticleCard
          key={items[0].sys.id}
          urlId={items[0].sys.id}
          className={'article0'}
          headline={items[0].headline}
          imageUrl={items[0].image.url}
          imageAlt={items[0].image.description}
          author={items[0].author.name}
          teaser={items[0].teaser}
          publishDate={items[0].sys.firstPublishedAt}
        />
        <FlexContainer>
          <SmallArticleCard
            key={items[1].sys.id}
            urlId={items[1].sys.id}
            className={'article1'}
            headline={items[1].headline}
            imageUrl={items[1].image.url}
            imageAlt={items[1].image.description}
            author={items[1].author.name}
            teaser={items[1].teaser}
            publishDate={items[1].sys.firstPublishedAt}
          />
          <SmallArticleCard
            key={items[2].sys.id}
            urlId={items[2].sys.id}
            className={'article2'}
            headline={items[2].headline}
            imageUrl={items[2].image.url}
            imageAlt={items[2].image.description}
            author={items[2].author.name}
            teaser={items[2].teaser}
            publishDate={items[2].sys.firstPublishedAt}
          />
          <SmallArticleCard
            key={items[3].sys.id}
            urlId={items[3].sys.id}
            className={'article3'}
            headline={items[3].headline}
            imageUrl={items[3].image.url}
            imageAlt={items[3].image.description}
            author={items[3].author.name}
            teaser={items[3].teaser}
            publishDate={items[3].sys.firstPublishedAt}
          />
        </FlexContainer>
      </Container>
    </div>
  );
};

export default FeaturedNews;
