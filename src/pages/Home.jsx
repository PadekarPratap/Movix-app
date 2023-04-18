import React from 'react'
import HeroBanner from '../components/HeroBanner'
import MovieCarousel from '../components/MovieCarousel'
import MovieCarousel2 from '../components/MovieCarousel2'
import { Endpoints } from '../utils/Endpoints'

const Home = () => {
  return (
    <div>
        <HeroBanner />
        <MovieCarousel name={"Trending"} dataTab={['day', 'week']} />
        <MovieCarousel2 name={'What\'s Popular'} dataTab={['movie', 'tv']} endpoint={Endpoints.MOVIE_TV_POPULAR}  />
        <MovieCarousel2 name={'Top Rated'} dataTab={['movie', 'tv']} endpoint={Endpoints.MOVIE_TV_TOP_RATED} />
    </div>
  )
}

export default Home