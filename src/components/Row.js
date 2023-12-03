import axios from 'axios'

import React, { useEffect, useState } from 'react'
import Movie from './Movie'


const Row = ({title,fetchURL,color}) => {
    const [movies,setMovies] = useState([])
   

    useEffect(()=>{
        axios.get(fetchURL).then((response)=>{
            setMovies(response.data.results)
        })
        console.log(movies)
    },[fetchURL])
  return (
    <>
     <h2 className='text-white font-bold md:text-xl p-4' style={{color:color }}>{title}</h2> 
    <div className='relative flex items-center group'>
        
        <div id={'slider'} className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth  relative '>
            {movies.map((item,id)=>(
               <Movie key={id} item={item} />
            ))}
        </div>
       
        
    </div>


    </>
  )
}

export default Row
