import React, {useState, useEffect} from 'react';

import Header from './components/Header';
import Loading from './components/Loading';
import Roll from './components/Roll';

function App() {

  const [movieData, setMovieData] = useState(null);
  const [loadingData, setLoadingData] = useState(true)

  useEffect(() => {
    fetch("./Data/data.json")
        .then((res) => res.json())
        .then((data) => {
            setMovieData(randomize(data));
            setLoadingData(false)
        });
  }, [])

  function randomize(arr) {
    let returnArr = []
    const length = arr.length
    for (let i = 0; i < length; i++) {
        const j = Math.floor(Math.random() * arr.length);
        returnArr[i] = arr[j];
        arr.splice(j, 1);
    }
    return returnArr
  }

  return (
      <div className="App">
          <Header />
          {loadingData && <Loading />}
          {movieData &&
              movieData.map((rollData) => {
                  return <Roll rollData={rollData} key={rollData.genre} />;
              })}
      </div>
  );
}

export default App;
