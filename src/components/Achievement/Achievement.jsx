import React from 'react'
import './Achievement.css'

const Achievement = ({text}) => {
  return (
    <div className='achievement'> 
        <p>{text}</p>
    </div>
  )
}

export default Achievement