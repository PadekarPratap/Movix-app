import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Select from 'react-select';
import { BASE_URL } from '../utils/api';
import { Endpoints } from '../utils/Endpoints';


const Explore = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const {media_type} = useParams()
  const [genre, setGenre] = useState([])

  const getMovieOrTvGenre = () =>{
    axios.get(BASE_URL + Endpoints.GENRE + media_type + '/list', {
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_APP_API_TOKEN}`
      }
    })
    .then((res) => setGenre(res.data.genres))
  }

  const Options = () =>{
    const SelectOptions = genre.map((gen) => {
      const newOption = {}
      newOption['label'] = gen.name
      newOption['value'] = gen.id
      return newOption
    })
    return SelectOptions
  }

  useEffect(() =>{
    getMovieOrTvGenre()
    Options()
  }, [])
  // console.log(selectedOption)
  return (
    <div className='w-full min-h-[100vh]'>
      <div className='max-w-[1200px] mx-auto px-5 mt-[8rem]'>
        <div>
            <h1 className='text-white text-3xl'>Explore {media_type === "movie" ? 'Movies' : 'TV Shows'}</h1>
            <div>
              <Select 
              isMulti
              defaultValue={selectedOption}
              options={Options()}
              onChange={setSelectedOption}
              />
            </div>
        </div>
      </div>
    </div>
  )
}

export default Explore