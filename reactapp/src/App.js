import React from 'react'
import { useEffect ,useState} from 'react'
import './App.css'
import MovieCard from './MovieCard'
import SearchIcon from './search.png'
//bc918543

const API_URL='http://www.omdbapi.com?apikey=bc918543'
const App = () => {
    const [movies,setMovies]=useState([]);
    const [searchItem,setSearchItem]=useState('');
    const searchMovies=async (title)=>{
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        setMovies(data.Search);

    }
    useEffect(()=>{
searchMovies('batman');
    
    },[])
  return (
    <div className='app'>
        <h1>Movie Land</h1>
        <div className='search'>
            <input 
            placeholder='Search for movies' value={searchItem} onChange={(e)=>setSearchItem(e.target.value)}/>
            <img src={SearchIcon} alt='search' onClick={()=>searchMovies(searchItem)}/>
        </div>
        {       movies?.length>0
        ?(
                <div className='container'>
                    {movies.map((mv)=>(
                        <MovieCard movie={mv}/>
                    ))}
                    
                </div>
        ):(
            <div className='empty'>No movies found</div>
        )
                
        }
    </div>
  )
}

export default App
