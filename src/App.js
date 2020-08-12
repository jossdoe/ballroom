import React, { useState, useEffect } from 'react';
import { client } from './client';

function App() {
  useEffect(() => {
    client
      .getEntries({ content_type: 'blogPost' })
      .then((response) => {
        console.log(response.items);
        // this.setState({
        //     articles: response.items
        // })
      })
      .catch(console.error);
  }, []);

  return (
    <div className='App'>
      <h1>Oi!</h1>
    </div>
  );
}

export default App;
