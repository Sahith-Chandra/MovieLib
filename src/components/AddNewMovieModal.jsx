import React from 'react'
import movieCover  from '../assets/movieCover.jpg';
import Rating from './Rating';

const AddNewMovieModal = ({open, onClose}) => {
  return (
    <>
        <div onClick={onClose} 
        className={`fixed inset-0 flex justify-center items-center transition-colors ${open ? "visible backdrop-blur-sm bg-black/20" : "invisible"}`}>
            <div onClick={(e) => e.stopPropagation()} className= {`bg-neutral-500 rounded-xl p-6 shadow transition-all ${open ?"scale-100 opacity-100" : "scale-125 opacity-0"}`}>
            
                {/* <button className='absolute top-2 right-2 rounded-lg text-gray-400 hover:bg-gray-50 hover:text-gray-600' onClick={onClose}>
                    <X />
                </button> */}

                

                <div className='w-100 flex flex-col'>
                    <div id='modal-title' className='flex justify-between pb-2'>
                        <h3 className='text-xl font-semibold text-neutral-100'>Add New Movie:</h3>
                        <button className='text-white text-xl place-self-end cursor-pointer' onClick={onClose} >X</button>
                    </div>
                    
                    <div id ='modal-content'className='text-black p-2 rounded '>

                        <div class="flex rounded-4xl border-2 border-yellow-500 overflow-hidden max-w-md mx-auto font-[sans-serif]">
                            <input type="email" placeholder="Search for a movie..."
                            className="w-full outline-none bg-white text-gray-600 text-sm px-4 py-3" />
                            <button id='search-button' type='button' className="cursor-pointer flex items-center justify-center bg-amber-400 px-5 hover:bg-yellow-500">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192.904 192.904" width="16px" className="fill-white">
                                <path
                                d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z">
                                </path>
                            </svg>
                            </button>
                        </div>

                        <div id='movie-details' className='flex flex-col'>
                            <div className='flex flex-row mt-6'>
                                <img className= 'h-auto w-30' src={movieCover} alt="movieCover" />
                                <div className='flex flex-col ml-auto'>
                                    <h3 className='text-xl font-semibold mr-auto ml-auto'>Star Wars</h3>
                                    <textarea id="notes" rows="4" className="block p-2.5 ml-auto mr-auto w-58 h-auto text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 dark:border-gray-600   " placeholder="Write your thoughts here..."></textarea>

                                </div>
                            </div>
                            <h3 className='text-l pt-6 font-semibold text-neutral-100'>Rate it:</h3>
                            <div className='flex flex-row items-center'> 
                            <Rating />
                                <button onClick={onClose}
                                className='text-md bg-gradient-to-r from-yellow-400 to-yellow-600 py-2 px-3 w-20 rounded-4xl font-semibold cursor-pointer transition-all duration-400 ease-in-out transform Hover:shadow-xl ml-14'>
                                Add
                            </button>
                            </div>
                            
                        </div>

                    </div>
                </div>

                
                
            </div>
        </div>
    </>
    
  )
}

export default AddNewMovieModal