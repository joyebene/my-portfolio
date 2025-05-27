"use client";
import { File, Monitor, Smartphone } from 'lucide-react';
import React from 'react'
import { motion } from "framer-motion";

interface GridBoxProps {
    icon: React.ReactNode;
    title: string;
    text: string;
}

const GridBox = ({ icon, title, text }: GridBoxProps) => {
    return (
        <motion.div
            className='bg-blue-600 w-full sm:w-[48%] xl:w-[32%] shadow-lg rounded-xl'
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
        >
            <div className='w-full rounded-xl bg-purple-700/60 flex flex-col justify-center items-center gap-3 lg:gap-4 px-6 py-6 h-full'>
                <div>{icon}</div>
                <h4 className='text-white text-lg lg:text-xl text-center'>{title}</h4>
                <p className='text-gray-300 text-center'>{text}</p>
            </div>
        </motion.div>
    )
}

const Services = () => {
    return (
        <div className='bg-blue-500 min-h-[100%]' id='service'>
            <div className='bg-gradient-to-br from-purple-800/90 via-blue-900/70 to-purple-800/90 w-full h-full px-6 lg:px-12 xl:px-32 py-6'>
                <motion.div className='text-center w-full flex flex-col items-center justify-center mt-8 lg:mt-16' initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}>
                    <p className='text-sm lg:text-lg text-blue-400 font-bold mb-1 lg:mb-2'>Services</p>
                    <p className='text-white font-bold text-xl md:text-2xl xl:text-3xl px-12 w-fit'>What I Do for My Clients</p>
                </motion.div>
                <div className='flex justify-center gap-4 mt-10 sm:mt-12 lg:mt-14 w-full flex-wrap'>
                    <GridBox icon={<Monitor size={50} color='lightblue' />} title="Web Design" text="Expert web design services: responsive, user-friendly, and visually stunning websites." />
                    <GridBox icon={<Smartphone size={50} color='lightblue' />} title="Mobile Development" text="Crafting seamless experiences for iOS and Android. Innovative mobile apps that engage users and drive results." />
                    <GridBox icon={<File size={50} color='lightblue' />} title="Web Development" text="Building robust, scalable web applications. Powerfull web applications tailored to your business needs." />
                </div>
            </div>
        </div>
    )
}

export default Services;