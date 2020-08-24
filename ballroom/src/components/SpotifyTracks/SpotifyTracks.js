import React from 'react';
import { Container } from './styled';

const SpotifyTracks = ({ tracks = [] }) => {
  const cleanTracks = tracks?.length > 3 ? tracks.slice(0, 3) : tracks;

  return (
    <Container>
      {cleanTracks
        ? cleanTracks.map((track) => (
            <iframe
              key={track}
              src={`https://open.spotify.com/embed/track/${track}`}
              title={track}
              width="250"
              height="80"
              frameBorder="0"
              allowtransparency="true"
              allow="encrypted-media"
            ></iframe>
          ))
        : null}
    </Container>
  );
};

export default SpotifyTracks;
