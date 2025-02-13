import React from 'react'
import { useState } from 'react'
import MovieLibLogo from '../assets/MovieLibLogo.png'
import { Info } from 'lucide-react';
import { CircleUserRound } from 'lucide-react';
import AddNewMovieModal from './AddNewMovieModal'
import { Trash2 } from 'lucide-react';

const Navbar = ({setOpen}) => {

    const [profileNav, setProfileNav] = useState(false)
    const [displayInfo, setDisplayInfo] = useState(false)

    const toggleProfileNav = () => {
        setProfileNav(!profileNav)
        setDisplayInfo(false)
    }

    const toggleDisplayInfo = () => {
        setDisplayInfo(!displayInfo)
        setProfileNav(false)
}


  return (
    <>
        <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80 bg-neutral-950 rounded-2xl">
            <div className='flex items-center justify-between'>
                <div className='flex items-center'>
                    <img className = "h-12 mr-2" src={MovieLibLogo} alt="logo"/>
                    <span className='text-3xl font-italiana'>MovieLib</span>
                </div>

                <div className='flex flex-row flex-center justify-center border border-neutral-700 rounded-4xl p-1.5  duration-400 ease-in-out transform hover:p-0'>
                    {/* <a href="#_" class="relative inline-flex items-center justify-center p-2.5 px-6 py-2 overflow-hidden font-medium text-yellow-600 transition duration-300 ease-out rounded-full shadow-xl group hover:ring-1 hover:ring-orange-500">
                        <span class="absolute inset-0 w-full h-full bg-gradient-to-br from-orange-600 via-yellow-600 to-lime-700"></span>
                        <span class="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-amber-500 rounded-full opacity-30 group-hover:rotate-90 ease"></span>
                        <span class="text-xl relative text-white">Add New Movie</span>
                    </a>
                    <a href="#_" class="relative inline-flex items-center justify-center inline-block p-4 px-6 py-3  overflow-hidden font-medium text-orange-500 rounded-4xl shadow-2xl group ">
                        <span class="absolute top-0 left-0 w-40 h-40 -mt-10 -ml-3 transition-all duration-700 bg-yellow-400 rounded-full blur-md ease"></span>
                        <span class="absolute inset-0 w-full h-full transition duration-700 group-hover:rotate-180 ease ">
                            <span class="absolute bottom-0 left-0 w-24 h-24 -ml-10 bg-red-400 rounded-full blur-md"></span>
                            <span class="absolute bottom-0 right-0 w-24 h-24 -mr-10 bg-amber-500 rounded-full blur-md"></span>
                            
                        </span>
                        <span class="relative text-xl text-white">Add New Movie</span>
                    </a> */}
                        <button onClick={() => setOpen(true)}
                        className='text-xl bg-gradient-to-r from-yellow-400 to-yellow-600 py-2 px-6 rounded-4xl font-semibold cursor-pointer transition-all duration-400 ease-in-out transform hover:px-7.5 hover:py-3.5 Hover:shadow-xl'>
                            Add New Movie
                        </button>
                                               
                    </div>

                <div className='flex items-center'>
                    <button onClick={toggleDisplayInfo} className='ml-24 mr-4 cursor-pointer'> <Info /></button>
                    <button onClick={toggleProfileNav} className='ml-3 mr-4 cursor-pointer'> <CircleUserRound /></button>
                </div>
            </div>
            {displayInfo && (
                
                <div className='fixed right-0 bg-neutral-800 w-66 pt-8 pb-8 flex flex-col jusify-center items-center '> 
                    <div className='flex space-x-6 p-4'> 
                        <p>Click “Add new movie” to add a recently watched movie. 
                            Click on a movie in “Your Library” to edit or delete it.
                            Click on a movie in the “Discover Movies” page to add to your library
                        </p>
                    </div>
                </div>
            
            )}

            {profileNav && (
                <div className='fixed right-0 bg-neutral-800 w -full pt-8 pb-8 flex flex-col jusify-center items-center '> 
                    <div className='flex space-x-6 p-4'> 
                        <a href="#" className='py-2 px-3 border rounded-md'>Sign out</a>
                    </div>
                </div>
            )}

        </nav>
        
    </>
    
  )
}

export default Navbar

