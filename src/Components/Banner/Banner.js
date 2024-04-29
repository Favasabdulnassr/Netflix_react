import React, { useEffect, useState } from 'react'
import './Banner.css';
import axios from '../../axios'
import {API_KEY,IMG_URL} from '../../constants/constants'


function Banner() {
  
  const [movie, SetMovie] = useState()
  useEffect(() => {

    axios.get(`movie/popular?api_key=${API_KEY}`).then((response) =>{
      console.log(response.data.results[0])
      SetMovie(response.data.results[0])
      
    })

  },[])
  

  return (
    <div style={{backgroundImage:`url(${movie? IMG_URL+movie.backdrop_path: "" })`}}
     className='banner'>
        <div className='content'>
            <h1 className='title'>{movie? movie.title: ""}</h1>
            <div className='banner_buttons'>
                <button className='button'> Play </button>
                <button className='button'> My list </button>

            </div>

            <h1 className='description'>{movie? movie.overview : ""} 
            </h1>

        </div>

       <div className='fade_bottom'></div>
       
    </div>
  )
}

export default Banner