import PropTypes from 'prop-types';

import './FeaturedMovie.css';

const FeaturedMovie = ({ item }) => {
  const {
    backdrop_path,
    original_name,
    vote_average, 
    first_air_date,
    number_of_seasons,
    overview,
    genres
  } = item;

  // Converting the release date to the proper format
  const firstDate = new Date(first_air_date);
  // Creating a list of genres from the array of objects
  const genreList = genres.map(({ name }) => name);

  const image = `url(https://image.tmdb.org/t/p/original${backdrop_path})`;
  const voteAverage = Number(vote_average).toFixed(1);
  const seasons = number_of_seasons > 1 ? "s" : "" 
  const genreTitle = genreList.length > 1 ? 'Gêneros: ' : 'Gênero: ';
  const genreText = genreList.join(', ').replaceAll(' &', ',').replace(/,([^,]*)$/, ' e$1');
  
  return (
    <section className="featured" style={{
      backgroundImage: image,
    }}>
      <div className="featured--vertical">
        <div className="featured--horizontal">
          <div className="featured-content">
            <div className="featured--name">
              {original_name}
            </div>
            
            <div className="featured--info">
              <div className="featured--points">
                {`${voteAverage} pontos`}
              </div>
              <div className="featured--year">
                {firstDate.getFullYear()}
              </div>
              <div className="featured--seasons">
                {`${number_of_seasons} temporada${seasons}`}
              </div>
            </div>

            <div className="featured--description">
              <span>{overview}</span>
            </div>

            <div className="featured--buttons">
              <a href="#" className="play-btn">&#9654; Assistir</a>
              <a href="#" className="my-list-btn">+ Minha Lista</a>
            </div>

            <div className="featured-genres">
              <strong>{`${genreTitle} ${genreText}`}</strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
};

FeaturedMovie.propTypes = {
  item: PropTypes.shape({
    backdrop_path: PropTypes.string,
    original_name: PropTypes.string,
    vote_average: PropTypes.number,
    first_air_date: PropTypes.string,
    number_of_seasons: PropTypes.number,
    overview: PropTypes.string,
    genres: PropTypes.arrayOf(PropTypes.object)
  })
}

export default FeaturedMovie;
