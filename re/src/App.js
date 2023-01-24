import './App.css';
import SearchIcon from './search.svg';
import { useState, useEffect } from 'react';
import MovieCard from './MovieCard';

// key e33f29f

// const Person = (props) => {
//   return (
//     <>
//       <h1>Name: {props.name}</h1>
//       <h2>Last Name: {props.lastName}</h2>
//       <h2>Age: {props.age}</h2>
//     </>
//   )
// }

const API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=e33f29f';

// const movie1 = {
//   "Title": "Italian Spiderman",
//   "Year": "2007",
//   "imdbID": "tt2705436",
//   "Type": "movie",
//   "Poster": "https://m.media-amazon.com/images/M/MV5BYjFhN2RjZTctMzA2Ni00NzE2LWJmYjMtNDAyYTllOTkyMmY3XkEyXkFqcGdeQXVyNTA0OTU0OTQ@._V1_SX300.jpg"
// }

const App = () => {

  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');


  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`)
    const data = await response.json();
    setMovies(data.Search);
  }

  useEffect(() => {
    searchMovies('Spiderman');
  }, []); // [] only on intial load [counter] infinit loop

  return (
    <div className="app">
      <h1>MovieLand</h1>
      <div className="search">
        <input placeholder='Search for movies' value={searchTerm} onChange={(event) => { setSearchTerm(event.target.value) }} />
        <img src={SearchIcon} alt="search" onClick={() => searchMovies(searchTerm)} />
      </div>

      {
        movies?.length > 0 ? (
          <div className='container'>
            {

              movies.map((movie) => <MovieCard key={movie.Title + movie.Year} movie={movie} />)
            }

          </div>
        ) :
          (
            <div className='empty'>
              <h2>No movies found</h2>
            </div>
          )}



    </div>
  );
}

export default App;
