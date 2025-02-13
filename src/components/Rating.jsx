import React from 'react'
import { FaStar } from 'react-icons/fa'
import { useState } from 'react'

const Rating = () => {
    const [rating, setRating] = useState(null)
    const [hover, setHover] = useState(null)
  return (
    <div className='flex flex-row'>
        {[...Array(5)].map((star, index) => {
        const currentRating = index + 1
         return (
            <label>
                <input 
                    type="radio"
                    name='rating'
                    value={currentRating} 
                    onClick={() => setRating(currentRating)}
                />
                <FaStar className='cursor-pointer ' size={50} color={currentRating <= (hover || rating ) ? "#ffc110" : "#e4e5e9"}
                onMouseEnter={() => setHover(currentRating)}
                onMouseLeave={() => setHover(null)}
                />
            </label>
        )
        }
        )}
    </div>
)}

export default Rating