import { useState, useEffect } from 'react';

// api creds totally exposed, yikes, sorry fey (:
const useGQL = (
  query,
  url = 'https://graphql.contentful.com/content/v1/spaces/geppoz0ltnws'
) => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!query.includes('undefined')) {
      fetch(url, {
        method: 'POST',
        headers: {
          Authorization: 'Bearer S59pgvtqOoS2UaFMsWeplWOAi2fFV2J3PMQhluTDDxI',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query }),
      })
        .then((res) => res.json())
        .then((res) => {
          setData(res.data);
          setLoading(false);
        })
        .catch((err) => setError(err));
    }
  }, [query]);

  return { data, loading, error };
};

export default useGQL;
