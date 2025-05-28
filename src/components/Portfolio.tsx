"use client";
import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Link2 } from 'lucide-react';


interface GridBoxProps {
  url: string;
  title: string;
  text: string;
  img: string;
}

const GridBox = ({ url, title, text, img }: GridBoxProps) => {
  return (
    <Link href={url} className='bg-blue-600 w-full sm:w-[48%] xl:w-[32%] shadow-lg rounded-xl'>
      <motion.div className='w-full rounded-xl bg-purple-700/60 flex flex-col justify-center items-center gap-2 lg:gap-3 px-4 py-2 sm:px-5 sm:py-3 lg:px-6 lg:py-4 h-full'
        whileHover={{ scale: 1.05 }}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}>
        <div className='relative h-60 lg:h-70 w-full rounded-xl'>
          <Image src={img} fill alt='img' className='absolute object-cover rounded-xl' />
        </div>
        <h4 className='text-white lg:text-lg text-center'>{title}</h4>
        <p className='text-gray-300 text-center text-[12px] lg:text-sm'>{text}</p>
        <p className='flex text-blue-300 gap-1 items-center justify-center text-[11px] lg:text-sm'>cLick to visit site <Link2 size={18} /> </p>
      </motion.div>
    </Link>
  )
}

const Portfolio = () => {
  return (
    <div className='bg-blue-500 min-h-screen lg:min-h-[100%]' id='portfolio'>
      <div className='bg-no-repeat bg-cover bg-top bg-[url("/bg5.jpg")] w-full h-full px-6 lg:px-12 xl:px-32 py-6' >
        <motion.div className='text-center w-full flex flex-col items-center justify-center mt-8 lg:mt-16' initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}>
          <p className='text-sm lg:text-lg text-blue-400 font-bold mb-1 lg:mb-2'>Portfolio</p>
          <p className='text-white font-bold text-xl md:text-2xl xl:text-3xl px-12 w-fit'>What I Do for My Clients</p>
        </motion.div>
        <div className='flex justify-center gap-6 mt-10 sm:mt-12 lg:mt-14 w-full flex-wrap'>
          <GridBox url='https://e-setglobal.vercel.app/' title='E-Set Global Solution' text='Transforming industries with innovative technology solutions, driving growth and efficiency worldwide.' img='/portfolio1-img.png' />
          <GridBox url='https://agro-web-alpha.vercel.app' title='AD forerunner Agro Ventures' text='Revolutionizing agriculture through sustainable practices, cutting-edge technology, and innovative farming solutions.' img='/portfolio2-img.png' />
          <GridBox url='https://food-delivery-app-jade-one.vercel.app/' title='Food Deliverry WebApp' text='Streamlining food delivery services with a user-friendly platform, connecting customers with their favorite restaurants and cuisines.' img='/portfolio3-img.png' />
        </div>
      </div>
    </div>
  )
}

export default Portfolio;