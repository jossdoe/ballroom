import React from 'react';
import { useQuery, gql } from '@apollo/client';
import Stack from './layout/Stack';

const GET_POSTS = gql`
  query Posts {
    blogPostCollection {
      items {
        title
      }
    }
  }
`;

function App() {
  const { loading, error, data } = useQuery(GET_POSTS);

  if (loading) return <p>loading...</p>;
  if (error) return <p>{error.message}</p>;

  return (
    <div className='App'>
      <h1>Posts</h1>
      <ul>
        <Stack space={20}>
          {data.blogPostCollection.items.map((post, idx) => (
            <li key={idx}>{post.title}</li>
          ))}
        </Stack>
      </ul>
    </div>
  );
}

export default App;
