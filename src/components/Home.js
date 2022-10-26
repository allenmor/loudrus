import React from 'react'
import HomeCard from './HomeCard'
import { useEffect, useState } from 'react'
import './Home.css'

function Home() {

  const [bud, setBud] = useState([])

  useEffect(()=>{
  fetch('https://raw.githubusercontent.com/allenmor/loudrus/main/inventory.json')
  .then(res => res.json())
  .then(data => {
    setBud(data)
  })
  },[])
  return (
    <div className='inventory-container'>
      {bud.map((el, i) => {
        return <HomeCard bud={el} key={i}/>
      })}
    </div>
  )
}

export default Home
