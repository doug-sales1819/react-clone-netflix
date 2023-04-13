import { Link, Outlet } from 'react-router-dom';

import './App.css';

const App = () => {
  return (
    <div className="App">
      <nav id="navbar">
        <h2>
          <Link to="/search">Search</Link>
        </h2>
        <Link to="/">MoviesLib</Link>
        <Link to="movie/1">Movie</Link>
      </nav>
      <Outlet />
    </div>
  );
};

export default App;
