"use client";
import Image from 'next/image';
import React from 'react'
import { motion } from 'framer-motion';

interface GridBoxProps {
    rate: string;
    title: string;
}


const GridBox = ({ rate, title }: GridBoxProps) => {
    return (
        <motion.div
            className='bg-blue-600 w-full sm:w-[48%] xl:w-[24%] shadow-lg rounded-xl'
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
        >
            <div className='w-full rounded-xl bg-purple-700/60 flex justify-center items-center gap-3 lg:gap-4 px-6 py-8 h-full'>
                <p className='text-blue-400 text-4xl sm:text-5xl lg:text-6xl'>{rate}</p>
                <p className='text-gray-300 text-shadow-lg'>{title}</p>
            </div>
        </motion.div>
    );
};


const About = () => {

    const handleClick = () => {
        alert("CV download started!");
    };


    return (
        <div className='bg-blue-500 min-h-screen' id='about'>
            <div className='bg-no-repeat bg-cover bg-bottom bg-[url("/bg1.jpg")] w-full h-full px-6 lg:px-12 xl:px-32 py-6'>
                <motion.div className='text-center w-full flex flex-col items-center justify-center mt-8 lg:mt-16' initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}>
                    <p className='text-sm lg:text-lg text-blue-400 font-bold mb-1 lg:mb-2'>About Me</p>
                    <p className='text-white font-bold text-xl md:text-2xl xl:text-3xl px-12 w-fit'>A Passionate Developer Who Loves to Code</p>
                </motion.div>

                <div className='flex flex-col items-center justify-center lg:flex-row lg:items-stretch w-full mt-16 lg:mt-20'>
                    <motion.div className='lg:w-1/2 w-full h-[90%]'
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}>
                        <div className='relative bg-white w-2/3 h-[300px] sm:h-[365px] lg:h-[465] rounded-xl mx-auto lg:m-0 mb-6'>
                            <Image src="/joy2.png" width={300} height={300} alt='joy2-img' className='w-fit h-[336px] sm:h-[400px] lg:h-[500px] -translate-y-9 absolute' />
                        </div>

                    </motion.div>
                    <motion.div className='flex flex-col justify-center gap-4 lg:gap-6 lg:w-1/2' initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h2 className='text-white text-xl lg:text-2xl font-semibold'>About Me</h2>
                        <p className='text-gray-300'>Hi, I&apos;m Joy Ebene, a software engineer with a passion for building applications that make a difference. With a keen eye for detail and a love for learning, i strive to deliver exeptional results.</p>
                        <div className='border-2 border-gray-400 rounded-xl py-3 px-6 lg:px-0 lg:py-0 flex flex-col lg:flex-row mt-4'>
                            <div className='lg:w-[48%] lg:px-6 lg:py-3'>
                                <div className='flex flex-col justify-center mt-5 gap-1 lg:gap-2'>
                                    <h4 className='text-white font-semibold'>Name</h4>
                                    <p className='text-gray-300'>Joy Ebene</p>
                                </div>
                                <div className='flex flex-col justify-center mt-5 gap-1 lg:gap-2'>
                                    <h4 className='text-white font-semibold'>Email</h4>
                                    <p className='text-gray-300'>joyebene153@gmail.com</p>
                                </div>
                                <div className='flex flex-col justify-center mt-5 gap-1 lg:gap-2'>
                                    <h4 className='text-white font-semibold'>Phone</h4>
                                    <p className='text-gray-300'>07085734574, 09158874727</p>
                                </div>
                            </div>
                            <div className='hidden lg:block h[90%] w-[2px] bg-gray-400' />
                            <div className='lg:w-[48%] lg:px-6 lg:py-3'>
                                <div className='flex flex-col justify-center mt-5 gap-1 lg:gap-2'>
                                    <h4 className='text-white font-semibold'>Address</h4>
                                    <p className='text-gray-300'>Abuja, Nigeria.</p>
                                </div>
                                <div className='flex flex-col justify-center mt-5 gap-1 lg:gap-2'>
                                    <h4 className='text-white font-semibold'>Degree</h4>
                                    <p className='text-gray-300'>Bachelor&apos;s</p>
                                </div>
                                <div className='flex flex-col justify-center mt-5 gap-1 lg:gap-2'>
                                    <h4 className='text-white font-semibold'>Freelance</h4>
                                    <p className='text-gray-300'>Available</p>
                                </div>
                            </div>
                        </div>
                        <motion.div className='text-white font-semibold bg-blue-400 rounded-full w-fit px-8 lg:px-12 py-3 lg:py-4 mt-3' whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        > 
                            
                                <a
                                    href="/cv.pdf"
                                    download
                                    onClick={handleClick}
                                    className="..."
                                >
                                    <button type='submit' className='w-full'>
                                    Download CV
                                    </button>
                                </a>
                                
                        </motion.div>
                    </motion.div>
                </div>

                <motion.div className='flex flex-wrap gap-4 mt-20 lg:mt-28' initial="hidden"
                    whileInView="visible"
                    variants={{
                        visible: { transition: { staggerChildren: 0.2 } },
                    }}
                    viewport={{ once: true }}>
                    <GridBox rate='2+' title='Years' />
                    <GridBox rate='20+' title='Total Projects' />
                    <GridBox rate='10' title='Direct Clients' />
                    <GridBox rate='2' title='Companies' />
                </motion.div>
            </div>
        </div>
    )
}

export default About;