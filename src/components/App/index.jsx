import { useEffect, useState } from 'react';

// Components
import MovieRow from '../MovieRow';
import Row from '../Row';
import FeaturedMovies from '../FeaturedMovie';

import tmdb from '../../utils/Tmdb';
import './App.css';

const App = () => {
  const [movieList, setMovieList] = useState([]);
  const [featuredData, setFeaturedData] = useState(null);

  useEffect(() => {
    const loadAll = async () => {
      // get list of all movies
      const list = await tmdb.getHomeList();

      setMovieList(list);

      // get the featured 
      const originals = list.filter(({ slug }) => slug === 'originals');
      const chosenRadom = Math.floor(Math.random() * (originals[0].items.results.length))
      const chosen = originals[0].items.results[chosenRadom];
      const chosenInfo = await tmdb.getMovieInfo(chosen.id, 'tv');

      setFeaturedData(chosenInfo);
    };

    loadAll(); 
  }, []);

  return (
    <>
      {featuredData && <FeaturedMovies item={featuredData} />}
      
      <Row>
        {movieList.map(({ title, items }, key) => (
          <MovieRow 
            key={key} 
            title={title}
            items={items}
          />
        ))}
      </Row>
    </>
  );
};

export default App;
