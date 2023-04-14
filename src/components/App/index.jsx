import { useEffect, useState } from 'react';

import MovieRow from '../MovieRow';

import tmdb from '../../utils/Tmdb';
import './App.css';

const App = () => {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const loadAll = async () => {
      const list = await tmdb.getHomeList();
      setMovieList(list);
    };

    loadAll();
  }, []);

  return (
    <div className="page">
      <section className="lists">
        {movieList.map(({ title, items }, key) => (
          <MovieRow 
            key={key} 
            title={title}
            items={items}
          />
        ))}
      </section>
    </div>
  );
};

export default App;
