import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <>
    <nav className='bg-blue-300 font-serif pr-4 pl-4 pt-4'>
        <div className='flex items-center justify-between'>
           <div><a href="#" className='text-2xl font-semibold text-green-800'>Karachi Cattles</a></div>
            <ul className='flex gap-5 text-green-900 text-xl font-semibold mr-6 cursor-pointer'>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/About">About</Link></li>
            <li><Link href="/Services">Serivces</Link></li>
            <li><Link href="/Contact">Contact</Link></li>
           </ul>
           </div>

    </nav>
    </>
  )
}

export default Navbar