'use client'

import MainNav from './MainNav'
import Nav from './nav'

const index = () => {
  return (
    <header className='m-auto w-full bg-neutral-700 '>
      <nav>
      <MainNav />
      <Nav />
      </nav>
    </header>
  )
}

export default index
