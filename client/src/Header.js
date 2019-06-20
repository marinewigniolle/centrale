import React from 'react';
import logo from './logo.svg';
import popcorn from './popcorn.png'
import './Header.css';
import Home from './Home'
import superagent from 'superagent'
<<<<<<< HEAD

function Header(props) {


=======

function Header() {
const [movie, setMovie] = React.useState(null);
 React.useEffect(() => {
   superagent
     .get("http://localhost:5000/application/movies")
     .then(response => setMovie(response.body.movies));
 }, []);

>>>>>>> d5a9d6a69556ce216a1443b774e35cd03419a7d2
  return (
    <div className="App">
      <header className="genres">

      <div className='beau'>

      <h1 className="title"> MyPopCorn
      </h1>
      <img src={popcorn} className="logo" alt="logo" />

      </div>


      <div className="genres2">
        <button
          className="Genre"
<<<<<<< HEAD
          onClick={() => props.setDisplayedMovie(props.movie.filter(movie => movie.type === 'Comédie'))}
=======

          target="_blank"
          rel="noopener noreferrer"
          onClick={() => movie.filter(movie => movie.type = 'cartoon')}
>>>>>>> d5a9d6a69556ce216a1443b774e35cd03419a7d2

        >
          Comédie
        </button>

        <button
          className="Genre"
          onClick={() => props.setDisplayedMovie(props.movie.filter(movie => movie.type === 'Horreur'))}

        >
          Horreur
        </button>
        <button
          className="Genre"
          onClick={() => props.setDisplayedMovie(props.movie.filter(movie => movie.type === 'Thriller'))}

        >
          Thriller
        </button>
        <button
          className="Genre"
          onClick={() => props.setDisplayedMovie(props.movie.filter(movie => movie.type === 'Documentaire'))}

        >
          Documentaire
        </button>
        <button
          className="Genre"
          onClick={() => props.setDisplayedMovie(props.movie.filter(movie => movie.type === 'Action'))}

        >
          Action
        </button>

            <input type="text" placeholder="Search.." name="search" value={props.research} onChange={(event) => props.setResearch(event.target.value)}/>

        </div>


      </header>
    </div>
  );
}

export default Header;
