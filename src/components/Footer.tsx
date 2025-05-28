import { Heart } from 'lucide-react';
import React from 'react'

const Footer = () => {

    const date = new Date();
  return (
     <div className='bg-blue-500 min-h-[100%] border-t border-blue-300/70'>
            <div className='bg-no-repeat bg-cover bg-bottom bg-[url("/bg4.jpg")] w-full h-full px-6 lg:px-12 xl:px-32 py-6'>
                <div className='text-center w-full flex flex-col items-center justify-center mt-6 md:mt-8'>
                    <p className='text-[12px] sm:text-sm lg:text-base text-blue-400 font-bold mb-1 lg:mb-2 flex gap-1'>Developed with <Heart color='red' fill='red' size={20}  /> by CoderQueen &copy; {date.getFullYear()} </p>

                </div>
        </div>
    </div>
  )
}

export default Footer;