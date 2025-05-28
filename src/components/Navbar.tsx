"use client";
import { Menu, X } from 'lucide-react';
import React from 'react'
import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
  const [openNav, setOpenNav] = useState(false);
  return (
    <div className='w-full text-black bg-blue-800 fixed shadow-md z-50'>
      <div className='w-full h-full text-black bg-no-repeat bg-cover bg-bottom bg-[url("/bg4.jpg")]'>
        {/* mobile navbar */}
        <div className='lg:hidden'>
          <div className='flex items-center justify-between border-b border-blue-300/70 py-3 px-6 shadow-md'>
            <div>
              <p className='text-white font-bold text-2xl'>Joy Eben<span className='text-blue-400'>e</span></p>
            </div>
            <div>
              {openNav ? <X color='white' size={40} onClick={() => setOpenNav(false)} /> : <Menu color='white' size={40} onClick={() => setOpenNav(true)} />}
            </div>
          </div>
          {openNav && (
            <div className='px-10 py-6'>
              <ul className='text-white flex flex-col justify-between gap-3'>
                <li className='hover:text-purple-200 transition-all duration-300 cursor-pointer'><Link onClick={() => setOpenNav(false)} href="#home">Home</Link></li>
                <li className='hover:text-purple-200 transition-all duration-300 cursor-pointer'><Link onClick={() => setOpenNav(false)} href="#about">About</Link></li>
                <li className='hover:text-purple-200 transition-all duration-300 cursor-pointer'><Link onClick={() => setOpenNav(false)} href="#portfolio">Portfolio</Link></li>
                <li className='hover:text-purple-200 transition-all duration-300 cursor-pointer'><Link onClick={() => setOpenNav(false)} href="#service">Service</Link></li>
                <li className='hover:text-purple-200 transition-all duration-300 cursor-pointer'><Link onClick={() => setOpenNav(false)} href="#contact">Contact</Link></li>
              </ul>
            </div>
          )}
        </div>

        {/* desktop navbar */}
        <div className='hidden lg:block'>
          <div className='flex items-center justify-between px-12 xl:px-32 py-6'>
            <div>
              <p className='text-white lg:text-3xl xl:text-4xl'>Joy Eben<span className='text-blue-400'>e</span></p>
            </div>
            <div>
              <ul className='text-white flex items-center justify-around gap-12 text-lg'>
                <li className='hover:text-purple-200 transition-all duration-300 cursor-pointer'> <Link href="#home">Home</Link></li>
                <li className='hover:text-purple-200 transition-all duration-300 cursor-pointer'> <Link href="#about">About</Link></li>
                <li className='hover:text-purple-200 transition-all duration-300 cursor-pointer'> <Link href="#portfolio">Portfolio</Link></li>
                <li className='hover:text-purple-200 transition-all duration-300 cursor-pointer'> <Link href="#service">Service</Link></li>
                <li className='hover:text-purple-200 transition-all duration-300 cursor-pointer'> <Link href="#contact">Contact</Link></li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Navbar;