import React from 'react'
import { NavLink } from 'react-router-dom'

function Home() {
  return (
    <div className='home'>
        <NavLink to = '/counter'className ={({isActive})=>(isActive ? 'active-link' : 'link')}>useReducer</NavLink>
        <NavLink to = '/filter-list'className ={({isActive})=>(isActive ? 'active-link' : 'link')}>FilteredList</NavLink>
    </div>
  )
}

export default Home