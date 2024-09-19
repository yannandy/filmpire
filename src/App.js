import {React, useState, useEffect} from "react";
import "./App.css"
import SearchIcon from "./search.svg"
import MovieCard from "./MovieCard";

//783950a
const API_URL = "http://www.omdbapi.com/?apikey=783950a"
const movie1 = {
    "Title": "Batman v Superman: Dawn of Justice",
    "Year": "2016",
    "imdbID": "tt2975590",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BYThjYzcyYzItNTVjNy00NDk0LTgwMWQtYjMwNmNlNWJhMzMyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
}

const movie2= {
    "Title": "Superman Returns",
    "Year": "2006",
    "imdbID": "tt0348150",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BZTU4NjkzNzItMDY5ZS00NDY3LWI4YjctMjZjMzIwNzczMTcyXkEyXkFqcGdeQXVyMTcwOTQzOTYy._V1_SX300.jpg"
}
const App = ()=>{

    const [movies, setMovies] = useState([])
    const [searchTerm, setSearchTerm] = useState('Harry Potter')

    const searchMovies = async(title)=>{
        const response = await fetch(`${API_URL}&s=${title}`)
        const data = await response.json();
        setMovies(data.Search);
        console.log(data)
    }
 
    useEffect(()=>{
        searchMovies("Harry Potter")
    }, [])

    return (
        <div className="app">
            <h1>MovieApp</h1>
            <div className="search">
                <input placeholder="Search for movies"
                value={searchTerm}
                onChange={(e)=>setSearchTerm(e.target.value)}/>
                {console.log(searchTerm)}
                <img src={SearchIcon} alt="Search" onClick={()=>searchMovies(searchTerm)}/>
            </div>

            {
                movies?.length > 0 ?
                (
                <div className="container">
                    {movies.map((movie)=>(
                        <MovieCard movie={movie}/> 
                    ))}
                </div>
                ) :  (
                    <div className="empty">
                        <h2>No movies found</h2>
                    </div>
                )
            }
            
        </div>
    );
}

export default App;