import React from 'react';
import popcorn from './popcorn2.png'
import './Header.css';
import Home from './Home.js'
import superagent from 'superagent'

function Header(props) {
  return (
    <header className="header">

      <div className="beau">
      <h1 className="title"> MyPopCorn</h1>
      <img src={popcorn} className="logo" alt="logo" />
      </div>

      <div className="bar">

        <button
          className="Genre"
          onClick={() => props.setDisplayedMovie(props.movie.filter(movie => movie.type === 'Comédie'))}        >
          Comédie
        </button>

        <button
          className="Genre"
          onClick={() => props.setDisplayedMovie(props.movie.filter(movie => movie.type === 'Horreur'))}        >
          Horreur
        </button>

        <button
          className="Genre"
          onClick={() => props.setDisplayedMovie(props.movie.filter(movie => movie.type === 'Thriller'))}        >
          Thriller
        </button>

        <button
          className="Genre"
          onClick={() => props.setDisplayedMovie(props.movie.filter(movie => movie.type === 'Documentaire'))}        >
          Documentaire
        </button>

        <button
          className="Genre"
          onClick={() => props.setDisplayedMovie(props.movie.filter(movie => movie.type === 'Action'))}        >
          Action
        </button>

        <form className="Search">
            <input type="text" placeholder="Search.." name="search"/>
            <button type="submit"><i class="fa fa-search"></i></button>
        </form>

        </div>


    </header>
  );
}

export default Header;