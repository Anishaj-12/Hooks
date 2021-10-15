import React from 'react'
import MovieCard  from './MovieCard';
const MovieList = ({MovieData}) => {
    return (
        <div>
        {MovieData.map(elm=> <MovieCard key= {elm.id} movie={elm}/>)}
        </div>
    )
}

export default MovieList