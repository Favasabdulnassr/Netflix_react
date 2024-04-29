import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import './App.css';
import Banner from './Components/Banner/Banner';
import RowPost from './Components/RowPost/RowPost';
import {ActionMovies, ComedyMovies, HorrorMovies, RomanceMovies, action,originals} from './urls';

function App() {
  return (
    <div className='App'>
      <Navbar/>
      <Banner/>
      <RowPost url={originals} title='Netflix Originals '/>
      <RowPost url={action} title='Action' isSmall />
      <RowPost url={ComedyMovies} title='comedyMovies' isSmall />
      {/* <RowPost url={HorrorMovies} title='Horrormovies' isSmall /> */}
      <RowPost url={ActionMovies} title='ActionMovies' isSmall />
      {/* <RowPost url={RomanceMovies} title='RomnceMovies' isSmall /> */}




    </div>
  )
}

export default App