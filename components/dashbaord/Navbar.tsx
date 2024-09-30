import React from 'react'
import { Button } from '../ui/button'
import { Bell, Mail, SearchIcon, Settings } from 'lucide-react'

const DashboardNavbar = () => {
  return (
    <nav className='border-black border flex flex-row justify-between items-center py-2 px-6'>
        
        <form className='mx-hidden sm:inline-block md:hidden lg:inline-block mx-5'>
            <div className='flex flex-wrap items-stretch w-full relative'>
                <input type='text' placeholder='search' className='max-w-full' />
                <div className="flex -me-px ">
                    <Button variant={'default'} className='bg-blue-800calc' ><SearchIcon  /></Button>
                </div>
            </div>    
        </form>
        <ul className="flex ms-auto mt-2">
          <li className="relative"><a href="" className="flex rounded-full py-3 px-4"><Settings /></a></li>
          <li className="relative"><a href="" className="flex rounded-full py-3 px-4"><Mail /></a></li>
          <li className="relative"><a href="" className="flex rounded-full py-3 px-4"><Bell /></a></li>
          <li className="relative"><a href="" className="flex rounded-full py-3 px-4">UserName</a></li>
        </ul>
    </nav>
  )
}

export default DashboardNavbar