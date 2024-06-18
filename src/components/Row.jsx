import React, { useEffect, useState } from 'react'
import {MdChevronLeft,MdChevronRight} from 'react-icons/md'
import axios  from 'axios'
import Movie from './Movie'
const Row = ({title, fetchURL,rowId}) => {
    const [movies,Setmovies]=useState([])
   
    useEffect(()=>
    {
        axios.get(fetchURL).then((res)=>Setmovies(res.data.results))
    },[fetchURL])
    function slideleft(){
        let slider= document.getElementById('slider'+rowId)
        slider.scrollLeft = slider.scrollLeft - 500;
    };
    function slideRight(){
        let slider= document.getElementById('slider' + rowId)
        slider.scrollLeft = slider.scrollLeft + 500;
    };
  return (
    <>
      <h2 className='text-white text-xl font-bold p-4'>{title}</h2>
      <div className='flex relative items-center group'>
            <MdChevronLeft onClick={slideleft} className='bg-white rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 m-4 hidden group-hover:block' size={40} />
            <div id={'slider'+ rowId} className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative'>
                {movies.map((item,id)=>{
                    return <Movie id={id} item={item}/>
                })}
            </div>
            <MdChevronRight onClick={slideRight} className='bg-white rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 m-4 hidden group-hover:block right-0' size={40}  />
      </div>
    </>
  )
}

export default Row
