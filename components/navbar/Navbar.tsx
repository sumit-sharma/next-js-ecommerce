import React from 'react'
import NavSearch from './NavSearch'
import Logo from './Logo'
import { UserNav } from './UserNav'

const Navbar = () => {
  return (
    <nav className='border-b'>
        <div className="container flex flex-col sm:flex-row sm:justify-between sm:items-center flex-wrap gap-4 py-8">
            <Logo />
            <NavSearch />
            <UserNav />
        </div>

    </nav>
  )
}

export default Navbar