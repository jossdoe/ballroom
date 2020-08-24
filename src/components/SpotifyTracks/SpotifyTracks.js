import React from 'react';
import { Container } from './styled';

const SpotifyTracks = ({ tracks }) => {
  return (
    <Container>
      {tracks.map((track) => (
        <iframe
          src="https://open.spotify.com/embed/track/7JPIRFlQL2acGnyqujDrDQ"
          width="250"
          height="80"
          frameborder="0"
          allowtransparency="true"
          allow="encrypted-media"
        ></iframe>
      ))}
    </Container>
  );
};

export default SpotifyTracks;
