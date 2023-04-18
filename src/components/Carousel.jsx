import React, { useEffect, useState } from 'react'
import SwitchTabs from './SwitchTabs'
import { fetchDataFromApi } from '../utils/api'
import { Endpoints } from '../utils/Endpoints'

const Carousel = () => {

    const [activeTab, setActiveTab] = useState(0)
    const getDayorWeek = () => {
        return activeTab === 0 ? 'day' : 'week'
    }
    const getMovies = () => {
        const dayOrWeek = getDayorWeek()
        fetchDataFromApi(Endpoints.MOVIE_TRENDING + dayOrWeek)
            .then(res => console.log(res))
    }

    useEffect(() =>{
        getMovies()
    }, [activeTab])

  return (
    <div className='max-w-[1200px] mx-auto px-5 my-[5rem]'>
        <div className='text-white flex sm:justify-between sm:items-center flex-col sm:flex-row'>
            <h2 className='text-3xl font-semibold font-mono mb-6 sm:mb-0'>Trending</h2>
            <div className='flex bg-slate-50 text-black px-2 py-1 gap-2 rounded-full self-start sm:self-stretch'>
               <SwitchTabs setActiveTab={setActiveTab} activeTab={activeTab} data={['Day', 'Week']} /> 
            </div>
        </div>

    </div>
  )
}

export default Carousel