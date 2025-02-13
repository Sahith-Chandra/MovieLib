import React from 'react'
import movieCover from '../assets/movieCover.jpg';

const LibraryHome = ({ setEditOpen }) => {
  return (
    <>
      <div className='flex flex-col items-center'>
        <h1 className='text-3xl font-semibold text-neutral-100 pl-10 pr-10 pt-10 pb-6'>Number of Movies Watched: {' '}</h1>
        <h1 id='number-watched' className='text-7xl font-bold bg-gradient-to-r from-yellow-400 via-orange-500 to-amber-400 inline-block text-transparent bg-clip-text'>23</h1>
      </div>

      <div id='displaMovies' className='flex flex-col p-3'>
        <div id='Sci-Fi'>
          <h1 className='text-xl font-semibold text-neutral-100 pl-10 pr-10 pt-10 pb-6'>Sci-Fi: {' '}</h1>
          <div id='displaMovies' className='flex flex-row items-center space-x-4'>
            <img className='h-auto w-30 cursor-pointer' src={movieCover} alt="movieCover" onClick={() => setEditOpen(true)} />
            <img className='h-auto w-30 cursor-pointer' src={movieCover} alt="movieCover" onClick={() => setEditOpen(true)} />
            <img className='h-auto w-30 cursor-pointer' src={movieCover} alt="movieCover" onClick={() => setEditOpen(true)} />
            <img className='h-auto w-30 cursor-pointer' src={movieCover} alt="movieCover" onClick={() => setEditOpen(true)} />
          </div>
        </div>

        <div id='Action'>
          <h1 className='text-xl font-semibold text-neutral-100 pl-10 pr-10 pt-10 pb-6'>Action: {' '}</h1>
          <div id='displaMovies' className='flex flex-row items-center space-x-4'>
            <img className='h-auto w-30 cursor-pointer' src={movieCover} alt="movieCover" onClick={() => setEditOpen(true)} />
            <img className='h-auto w-30 cursor-pointer' src={movieCover} alt="movieCover" onClick={() => setEditOpen(true)} />
            <img className='h-auto w-30 cursor-pointer' src={movieCover} alt="movieCover" onClick={() => setEditOpen(true)} />
            <img className='h-auto w-30 cursor-pointer' src={movieCover} alt="movieCover" onClick={() => setEditOpen(true)} />
            <img className='h-auto w-30 cursor-pointer' src={movieCover} alt="movieCover" onClick={() => setEditOpen(true)} />
            <img className='h-auto w-30 cursor-pointer' src={movieCover} alt="movieCover" onClick={() => setEditOpen(true)} />
            <img className='h-auto w-30 cursor-pointer' src={movieCover} alt="movieCover" onClick={() => setEditOpen(true)} />
            <img className='h-auto w-30 cursor-pointer' src={movieCover} alt="movieCover" onClick={() => setEditOpen(true)} />
            <img className='h-auto w-30 cursor-pointer' src={movieCover} alt="movieCover" onClick={() => setEditOpen(true)} />
            <img className='h-auto w-30 cursor-pointer' src={movieCover} alt="movieCover" onClick={() => setEditOpen(true)} />
          </div>
        </div>

        <div id='Comedy'>
          <h1 className='text-xl font-semibold text-neutral-100 pl-10 pr-10 pt-10 pb-6'>Comedy: {' '}</h1>
          <div id='displaMovies' className='flex flex-row items-center space-x-4'>
            <img className='h-auto w-30 cursor-pointer' src={movieCover} alt="movieCover" onClick={() => setEditOpen(true)} />
            <img className='h-auto w-30 cursor-pointer' src={movieCover} alt="movieCover" onClick={() => setEditOpen(true)} />
            <img className='h-auto w-30 cursor-pointer' src={movieCover} alt="movieCover" onClick={() => setEditOpen(true)} />
            <img className='h-auto w-30 cursor-pointer' src={movieCover} alt="movieCover" onClick={() => setEditOpen(true)} />
            <img className='h-auto w-30 cursor-pointer' src={movieCover} alt="movieCover" onClick={() => setEditOpen(true)} />
            <img className='h-auto w-30 cursor-pointer' src={movieCover} alt="movieCover" onClick={() => setEditOpen(true)} />
          </div>
        </div>

        <div id='Animation'>
          <h1 className='text-xl font-semibold text-neutral-100 pl-10 pr-10 pt-10 pb-6'>Animation: {' '}</h1>
          <div id='displaMovies' className='flex flex-row items-center space-x-4'>
            <img className='h-auto w-30 cursor-pointer' src={movieCover} alt="movieCover" onClick={() => setEditOpen(true)} />
            <img className='h-auto w-30 cursor-pointer' src={movieCover} alt="movieCover" onClick={() => setEditOpen(true)} />
            <img className='h-auto w-30 cursor-pointer' src={movieCover} alt="movieCover" onClick={() => setEditOpen(true)} />
          </div>
        </div>
      </div>
    </>
  )
}

export default LibraryHome