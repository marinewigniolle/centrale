import React from 'react';
import './Home.css'
import Titanic from './Titanic.jpg'
import MammaMia from './MammaMia.jpg'
<<<<<<< HEAD
import Movie from './movie'
import superagent from 'superagent'
import Header from './Header'



function Home() {
const [research, setResearch] = React.useState("");
const [movie, setMovie] = React.useState(null);
const [DisplayedMovie, setDisplayedMovie] = React.useState(null);
 React.useEffect(() => {
   superagent
     .get("http://localhost:5000/application/movies")
     .then(response => {setDisplayedMovie(response.body.movies); setMovie(response.body.movies)})

=======
import Header from './Header';


import Movie from './movie'
import superagent from 'superagent'


function Home() {
const [movie, setMovie] = React.useState(null);
 React.useEffect(() => {
   superagent
     .get("http://localhost:5000/application/movies")
     .then(response => setMovie(response.body.movies));
>>>>>>> d5a9d6a69556ce216a1443b774e35cd03419a7d2
 }, []);



    return (

<<<<<<< HEAD

    <div>
        <header >

            <Header movie={movie} setDisplayedMovie={setDisplayedMovie} research = {research} setResearch = {setResearch} />
=======
    <div>
        <header >

            <Header/>
>>>>>>> d5a9d6a69556ce216a1443b774e35cd03419a7d2

        </header>


        <h1 className = "Rubrics">Recommandés pour vous</h1>



         <h1 className = "Rubrics">Les mieux notés</h1>

         //<p className="list"> {DisplayedMovie && DisplayedMovie.map(movie => movie.note > 4 ? <div> {movie.title} </div> : undefined)} </p>


        <h1 className = "Rubrics">À l'affiche </h1>

        <p className="list">  {DisplayedMovie && DisplayedMovie.map(movie => movie.date === 2019 ? <div> {movie.title} </div> : undefined)} </p>

<<<<<<< HEAD

        <h1 className= "Rubrics">Tous les films</h1>
        <p className="list">  {DisplayedMovie && DisplayedMovie.map(movie => (<div> {movie.title} </div>))} </p>
=======
        <h1 className= "Rubrics">Tous les films</h1>
        <p className="list">  {movie && movie.map(movie => (<div> {movie.title} </div>))} </p>
>>>>>>> d5a9d6a69556ce216a1443b774e35cd03419a7d2
        </div>
    )
}

const MovieTitle = (props) => (
    <div className="movie-title">
        <img src={props.image}></img>
        <a
        href={props.url}>
        <div>{props.title}</div></a>
    </div>
)

export default Home


