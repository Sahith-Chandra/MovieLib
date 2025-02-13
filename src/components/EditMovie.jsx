import React, { useState } from 'react'
import movieCover from '../assets/movieCover.jpg';
import Rating from './Rating';

const EditMovie = ({ open, onClose }) => {
  const [deleteOpen, setDeleteOpen] = useState(false);

  const handleDelete = () => {
    // Handle the delete action here
    setDeleteOpen(false);
    onClose();
  };

  return (
    <>
      <div onClick={onClose} className={`fixed inset-0 flex justify-center items-center transition-colors ${open ? "visible backdrop-blur-sm bg-black/20" : "invisible"}`}>
        <div onClick={(e) => e.stopPropagation()} className={`bg-neutral-500 rounded-xl p-6 shadow transition-all ${open ? "scale-100 opacity-100" : "scale-125 opacity-0"}`}>
          <div className='w-100 flex flex-col'>
            <div id='modal-title' className='flex justify-between pb-2'>
              <h3 className='text-xl font-semibold text-neutral-100'>Edit: Star Wars</h3>
              <button className='text-white text-xl place-self-end cursor-pointer hover:text-red-700' onClick={onClose}>X</button>
            </div>

            <div id='modal-content' className='text-black p-2 rounded'>
              <div id='movie-details' className='flex flex-col'>
                <div className='flex flex-row mt-6'>
                  <img className='h-auto w-30' src={movieCover} alt="movieCover" />
                  <div className='flex flex-col ml-auto'>
                    <h3 className='text-xl font-semibold mr-auto ml-auto'>Star Wars</h3>
                    <textarea id="notes" rows="4" className="block p-2.5 ml-auto mr-auto w-58 h-auto text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 dark:border-gray-600" placeholder="Write your thoughts here..."></textarea>
                  </div>
                </div>
                <h3 className='text-l pt-6 font-semibold text-neutral-100'>Rate it:</h3>
                <div className='flex flex-row items-center'>
                  <Rating />
                </div>

                <div className='flex pt-6 justify-between'>
                  <button onClick={() => setDeleteOpen(true)} className='text-md bg-gradient-to-r from-red-400 to-red-600 py-2 px-3 w-20 rounded-4xl font-semibold cursor-pointer transition-all duration-400 ease-in-out transform hover:shadow-xl'>
                    Delete
                  </button>
                  <div className='flex space-x-4'>
                    <button onClick={onClose} className='text-md border border-yellow-400 py-2 px-3 w-20 rounded-4xl font-semibold cursor-pointer transition-all duration-400 ease-in-out transform hover:shadow-xl'>
                      Cancel
                    </button>
                    <button onClick={onClose} className='text-md bg-gradient-to-r from-yellow-400 to-yellow-600 py-2 px-3 w-20 rounded-4xl font-semibold cursor-pointer transition-all duration-400 ease-in-out transform hover:shadow-xl'>
                      Save
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {deleteOpen && (
        <div onClick={() => setDeleteOpen(false)} className="fixed inset-0 flex justify-center items-center transition-colors visible backdrop-blur-sm bg-black/20">
          <div onClick={(e) => e.stopPropagation()} className="bg-neutral-500 rounded-xl p-6 shadow transition-all scale-100 opacity-100">
            <div className='w-100 flex flex-col'>
              <h3 className='text-xl font-semibold text-neutral-100'>Confirm Delete</h3>
              <p className='text-neutral-100'>Are you sure you want to delete this movie? Movie data will be lost once deleted.</p>
              <div className='flex pt-6 justify-end space-x-4'>
                <button onClick={() => setDeleteOpen(false)} className='text-md border border-yellow-400 py-2 px-3 w-20 rounded-4xl font-semibold cursor-pointer transition-all duration-400 ease-in-out transform hover:shadow-xl'>
                  Cancel
                </button>
                <button onClick={handleDelete} className='text-md bg-gradient-to-r from-red-400 to-red-600 py-2 px-3 w-20 rounded-4xl font-semibold cursor-pointer transition-all duration-400 ease-in-out transform hover:shadow-xl'>
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default EditMovie