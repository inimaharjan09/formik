import React from 'react'
import { NavLink } from 'react-router'

export default function Header() {
  return (
    <div className='bg-black text-white px-2 py-2 flex items-center justify-between'>
      <h1>Redux Toolkit</h1>
      <nav>
      <NavLink to='/add-todo'>Add Todo</NavLink>
      </nav>

    </div>
  )
}
