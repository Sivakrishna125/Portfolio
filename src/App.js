import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Home from './Home';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get('http://127.0.0.1:5000')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the data', error);
      });
  }, []);

  return (
    <div>
      {data ? (
        <div>
          <h1>{data.title}</h1>
          <p>{data.description}</p>
          <p>{data.details}</p>
        </div>
      ) : (
        <div>
          
        </div>
      )}
      <Home/>
    </div>
  );
}

export default App;
