
import axios from 'axios'
import requests from '../Requests'
import { useState,useEffect} from 'react'
const Main = () => {
  const[movies,SetMovies]=useState([])  
  const movie = movies[Math.floor(Math.random() * movies.length)]
  useEffect(()=>
    {
        axios.get(requests.requestPopular).then((res)=>SetMovies(res.data.results))
    },[])
    // console.log(movie);
    const TrucateString = (Str,num)=>{
        if(Str?.length > num) 
        {
            return Str.slice(0,num) + '...';
        }
        else {
            return Str;
        }
    };
  return (
    <div className='w-full h-[550px] text-white'> 
        <div className='w-full h-full'>
            <div className='w-full h-full absolute bg-gradient-to-r from-black'></div>
            <img className='w-full h-full  object-cover object-top' src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} alt={movie?.title} />
            <div className='absolute w-full top-[20%] p-4 md:pd-8'>
                <h1 className='text-3xl font-bold md:text-5xl'>{movie?.title}</h1>
                <div className='my-4'>
                    <button className='border bg-gray-300 text-black border-gray-300 py-2 px-5 '>Play</button>
                    <button  className='border ml-4 border-gray-300 py-2 px-5'>Watch Later</button>
                </div>
                <p className='text-gray-400 text-sm md:text-xl'>{`Released:${movie?.release_date}`}</p>
                <p className='w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200'>{TrucateString(movie?.overview,150)}</p>
            </div>
           
        </div>
        
    </div>
  )
}

export default Main
