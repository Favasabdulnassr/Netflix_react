import React, { useEffect, useState } from 'react'
import './RowPost.css'
import axios from '../../axios'
import {IMG_URL} from '../../constants/constants'



function RowPost(props) {

  const [movies,SetMovies] = useState([])

  useEffect( () => {
    axios.get(props.url).then(response =>{

      SetMovies(response.data.results)

    })  

  })
  return (

  

    <div className='row'>
      <h2>{props.title}</h2>
      <div className='posters'>
       {movies.map((obj) =>  
         <img className={props.isSmall? 'smallposter': 'poster'} alt='poster' src={`${IMG_URL+obj.backdrop_path}`}/>
      
      )}
      </div>


    </div>
  )
}

export default RowPost