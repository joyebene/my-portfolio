"use client"
import React from 'react';
import { motion } from "framer-motion";

const Skills = () => {

    const container = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.15,
            },
        },
    };

    // const item = {
    //     hidden: { opacity: 0, x: -30 },
    //     visible: { opacity: 1, x: 0 },
    // };


    const skills = [
        { name: 'CSS', value: '80' },
        { name: 'JavaScript', value: '90' },
        { name: 'React', value: '70' },
        { name: 'Next', value: '80' },
        { name: 'Tailwind', value: '90' },
        { name: 'Bootstrap', value: '90' },
        { name: 'Flutter', value: '50' },
        { name: 'Dart', value: '50' },
        { name: 'Python', value: '50' },
        { name: 'Express', value: '70' },
        { name: 'Node', value: '70' },
        { name: 'Mongodb', value: '70' },
    ]

    return (
        <div className='bg-blue-500 h-screen'>
            <div className='bg-no-repeat bg-cover bg-center bg-[url("/bg4.jpg")] w-full h-full px-6 lg:px-12 xl:px-32 py-6'>
                <motion.div className='text-center w-full flex flex-col items-center justify-center mt-8 lg:mt-16' initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}>
                    <p className='text-sm lg:text-lg text-blue-400 font-bold mb-1 lg:mb-2'>Skills</p>
                    <p className='text-white font-bold text-xl md:text-2xl xl:text-3xl px-12 w-fit'>I Work Hard to Improve My Skills Regularly</p>
                </motion.div>
                <motion.div className='mt-8 lg:mt-12 w-full grid grid-cols-2 gap-4 sm:gap-6 lg:gap-8' variants={container}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}>
                    {skills.map(skill => (
                        <div key={skill.name} className='mb-2 lg:mb-4'>
                            <div className='flex justify-between mb-1'>
                                <span className='sm:text-lg font-semibold text-white'>{skill.name}</span>
                                <span className='text-blue-400 text-sm sm:text-base'>{skill.value}%</span>
                            </div>
                            <div className='w-full bg-gray-700 rounded-full h-1.5 md:h-2.5'>
                                <motion.div className='bg-blue-400 h-1.5 md:h-2.5 rounded-full' style={{ width: `${skill.value}%` }}  
                                initial={{ width: 0 }}
                                whileInView={{ width: `${skill.value}%` }}
                                transition={{ duration: 1 }}
                                viewport={{ once: false }}
                                ></motion.div>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    )
}

export default Skills;