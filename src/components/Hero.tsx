"use client";
import { Briefcase, Diamond, Settings } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import {motion} from "framer-motion";


interface GridBoxProps{
    icon: React.ReactNode;
    title: string;
    text: string;
}

const GridBox = ({ icon, title, text }: GridBoxProps) => {
  return (
    <motion.div
      className='bg-blue-600 w-full sm:w-[48%] xl:w-[32%] shadow-lg rounded-xl'
      id='home'
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className='w-full rounded-xl bg-purple-700/60 flex flex-col justify-center items-start gap-3 lg:gap-4 px-6 py-4 h-full'>
        <div>{icon}</div>
        <h4 className='text-white text-lg lg:text-xl'>{title}</h4>
        <p className='text-gray-300'>{text}</p>
      </div>
    </motion.div>
  );
};

const Hero = () => {
  return (
    <div className='bg-blue-500 min-h-screen'>
      <div className='min-h-screen pt-16 lg:pt-20 text-white px-6 lg:px-12 xl:px-32 py-6 bg-no-repeat bg-cover bg-bottom bg-[url("/bg1.jpg")]'>
        <div className='flex flex-col items-center justify-center lg:flex-row lg:justify-between lg:items-center mt-12 gap-10'>
          {/* Text section */}
          <motion.div
            className='flex flex-col items-center lg:items-start justify-center gap-3 text-center lg:text-start order-2'
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className='text-white text-5xl lg:text-6xl xl:text-7xl'>
              Joy <br /> <span className='text-blue-400'>Ebene</span>
            </h1>
            <p className='text-white lg:text-lg'>
              Software Developer based in Abuja, Nigeria
            </p>
            <Link
              href='#contact'
              className='bg-blue-400 rounded-full px-8 lg:px-12 py-3 lg:py-4 mt-6'
            >
              Get Connected
            </Link>
          </motion.div>

          {/* Image section */}
          <motion.div
            className='bg-blue-400 rounded-full relative h-60 w-60 lg:w-72 lg:h-72 xl:w-80 xl:h-80 flex items-center justify-center order-1 lg:order-2'
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src='/joy.png'
              width={300}
              height={200}
              alt='joy-img'
              className='absolute rounded-full w-full h-[280px] lg:h-[350px] xl:h-[370px] -translate-y-5 lg:-translate-y-6'
            />
          </motion.div>
        </div>

        {/* Grid section */}
        <motion.div
          className='flex justify-center gap-4 mt-10 sm:mt-12 lg:mt-14 w-full flex-wrap'
          initial="hidden"
          whileInView="visible"
          variants={{
            visible: { transition: { staggerChildren: 0.2 } },
          }}
          viewport={{ once: true }}
        >
          <GridBox icon={<Settings color='lightblue' />} title="Deeper Skillset" text="Building a robust foundation in software development to tackle challenges head-on" />
          <GridBox icon={<Briefcase color='lightblue' />} title="Creative Work" text="Transforming ideas into reality through creative coding and problem-solving" />
          <GridBox icon={<Diamond color='lightblue' />} title="Strong Dedication" text="Committed to continuous learning and improvement in the ever-evolving tech landscape." />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;