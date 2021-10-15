import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useState} from "react"
import Add from './components/Add';
import MovieList from './components/MovieList';
import MovieData from './components/MovieData';
import Filter from './components/Filter'










function App() {
  const [filter, setFilter] = useState("")
  const [movieRating,setMovieRating]=useState(1);
  const [Movie,setMovie] = useState(MovieData)
  const [newMovie, setNewMovie] = useState(
    {  title:"",
      description:"",
      Image:"",
      rate:"",}
    )


    const AddMovie = (newMovie) =>{
      setMovie(
        [...Movie, newMovie]
      )
    }

    const handelFilter=(val)=>{
      setFilter(val)
      }
  
      const handleRating=(rating)=>{
        setMovieRating(rating)
        }

   


  return (
    <div className="App">
      <div className="header">
      <h1 style={{color:"white"}}>  MOVIES LIST </h1>
      <Filter handleRating={handleRating} handelFilter={handelFilter} />
      <Add AddMovie={AddMovie} newMovie={newMovie} setNewMovie={setNewMovie} />
      </div>
      <div className='listk'>
      <MovieList MovieData ={Movie.filter(elm=>elm.title.toLowerCase().includes(filter.trim().toLowerCase())&& elm.rate>=movieRating)}/>
      </div>
    
    </div>
  );
}

export default App;



