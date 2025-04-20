import React from 'react'
import { NavLink } from 'react-router'

export default function Header() {
  return (
    <div className='bg-black text-white px-5 py-2 flex items-center justify-between'>
      <h1>Redux ToolKit</h1>
      <nav>
<NavLink to={'/add-blog'}>Add Blog</NavLink>
</nav>
    </div>
  )
}