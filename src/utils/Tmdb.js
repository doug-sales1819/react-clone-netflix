const API_KEY = 'c75e4f675e5d485e8b3fca9d5fc01521';
const BASE_URL = 'https://api.themoviedb.org/3';

const basicFetch = async (endpoint) => {
  const request = await fetch(`${BASE_URL}${endpoint}`);
  const json =  await request.json();
  return json;
};

export default {
  getHomeList: async () => {
    return [
      {
        slug: 'originals',
        title: 'Originais Netflix',
        items: await basicFetch(`/discover/tv?with_networks=213&language=pt-BR&api_key=${API_KEY}`),
      },
      {
        slug: 'trending',
        title: 'Destaques de hoje para você',
        items: await basicFetch(`/trending/all/day?language=pt-BR&api_key=${API_KEY}`),
      },
      {
        slug: 'top_rated',
        title: 'Em alta',
        items: await basicFetch(`/movie/top_rated?language=pt-BR&api_key=${API_KEY}`),
      },
      {
        slug: 'action',
        title: 'Ação',
        items: await basicFetch(`/discover/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}`),
      },
      {
        slug: 'comedy',
        title: 'Comédia',
        items: await basicFetch(`/discover/movie?with_genres=35&language=pt-BR&api_key=${API_KEY}`),
      },
      {
        slug: 'horror',
        title: 'Terror',
        items: await basicFetch(`/discover/movie?with_genres=27&language=pt-BR&api_key=${API_KEY}`),
      },
      {
        slug: 'romance',
        title: 'Romance',
        items: await basicFetch(`/discover/movie?with_genres=10749&language=pt-BR&api_key=${API_KEY}`),
      },
      {
        slug: 'documentary',
        title: 'Documentário',
        items: await basicFetch(`/discover/movie?with_genres=99&language=pt-BR&api_key=${API_KEY}`),
      },
      {
        slug: 'drama',
        title: 'Drama',
        items: await basicFetch(`/discover/movie?with_genres=18&language=pt-BR&api_key=${API_KEY}`),
      },
      {
        slug: 'music',
        title: 'Música',
        items: await basicFetch(`/discover/movie?with_genres=10402&language=pt-BR&api_key=${API_KEY}`),
      },
      {
        slug: 'science Fiction',
        title: 'Ficção científica',
        items: await basicFetch(`/discover/movie?with_genres=878&language=pt-BR&api_key=${API_KEY}`),
      },
      {
        slug: 'war',
        title: 'Guerra',
        items: await basicFetch(`/discover/movie?with_genres=10752&language=pt-BR&api_key=${API_KEY}`),
      },
    ]
  },
  getMovieInfo: async (movieId, type) => {
    let info = {};

    if (movieId) {
      switch (type) {
        case 'movie': 
          info = await basicFetch(`/movie/${movieId}?language=pt-BR&api_key=${API_KEY}`);
          break;
        case 'tv': 
          info = await basicFetch(`/tv/${movieId}?language=pt-BR&api_key=${API_KEY}`);
          break;
        default:
          info = null;
          break;
      }
    }
    
    return info;
  }
};
