import React from 'react';
import { useQuery, gql } from '@apollo/client';

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
    <div className="App">
      <h1>Posts</h1>
      <ul>
        {data.blogPostCollection.items.map((post, idx) => (
          <li key={idx}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
