import React from 'react'
import './Home.css'

function HomeCard({bud}) {
  return (
    <div className='each-item-container'>
        <img className='each-image' src={bud.image}/>
        <div>
        <p className='each-name'>{bud.name}</p>
        <p className='each-min'>{bud.min}</p>
        <p className='each-retail'>{bud.retail}</p>
        </div>
    </div>
  )
}

export default HomeCard
