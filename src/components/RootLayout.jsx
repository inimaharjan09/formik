import React from 'react'
import { Outlet, useLocation } from 'react-router'
import Header from './Header'

export default function RootLayout() {

  return (
    <div>
      <Header />
      <main className='px-12'>
        <Outlet />
      </main>
    </div>
  )
}