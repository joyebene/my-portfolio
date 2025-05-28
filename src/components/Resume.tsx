"use client";
import React from 'react'
import { Briefcase, GraduationCap } from "lucide-react";
import { motion } from 'framer-motion';


const experiences = [
    {
        title: "Internship Program",
        duration: "2024 - 2025",
        company: "Code Warriors Tech",
        description: "Collaborated on innovative projects, honing skills in software development and problem-solving within a dynamic team environment."
    },
    {
        title: "Full-Stack Engineer",
        duration: "2025 - present",
        company: "Res Tech Solution",
        description: "Designing and implementing scalable web applications, leveraging expertise in front-end and back-end technologies to drive business growth."
    },
    {
        title: "Full-Stack Engineer",
        duration: "2025 - present",
        company: "Code Warriors Tech",
        description: "Building robust and efficient web solutions, utilizing technical expertise to deliver high-quality products and enhance user experiences."
    }
];
const education = [
    {
        title: "Bacheloor of Science",
        duration: "2023 - present",
        school: "Bauchi State University",
        description: "Currently pursuing a degree in Computer Science, exploring various fields of study and developing a strong foundation for future endeavors"
    },
    {
        title: "Secondary School",
        duration: "2015 - 2020",
        school: "Bright Future Academy",
        description: "Completed secondary education with a strong academic record, building a solid base for future academic and professional pursuits."
    }
];


const Resume = () => {
    return (
        <div className='bg-blue-500 min-h-screen'>
            <div className='bg-no-repeat bg-cover bg-bottom bg-[url("/bg4.jpg")] w-full h-full px-6 lg:px-12 xl:px-32 py-6'>
                <motion.div className='text-center w-full flex flex-col items-center justify-center mt-8 lg:mt-16' initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}>
                    <p className='text-sm lg:text-lg text-blue-400 font-bold mb-1 lg:mb-2'>Resume</p>
                    <p className='text-white font-bold text-xl md:text-2xl xl:text-3xl px-12 w-fit'>I Work for Some Companies</p>
                </motion.div>

                {/* Experience */}
                <motion.div initial={{ opacity: 0, x: -80 }} whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}>
                    <h2 className='text-white text-xl lg:text-2xl font-semibold my-6 lg:my-8'>Experience</h2>
                    <div>
                        {experiences.map((exp, index) => (
                            <div key={index} className="relative pl-12 mb-10">
                                {/* Icon */}
                                <div className="absolute left-0 top-0 bg-blue-400 w-12 h-12 rounded-full flex items-center justify-center p-2">
                                    <Briefcase className="text-white w-6 h-6" />
                                </div>

                                {/* Content */}
                                <div className='ml-4 sm:ml-8 lg:ml-10'>
                                    <h3 className="text-lg font-bold text-white">{exp.title}</h3>
                                    <p className="text-sm text-gray-300 mb-1">({exp.duration})</p>
                                    <p className="font-semibold text-white">{exp.company}</p>
                                    <p className="text-gray-300 text-sm mt-2">{exp.description}</p>
                                </div>

                                {/* Vertical Line */}
                                {index < experiences.length - 1 && (
                                    <div className="absolute left-6 top-12 h-full w-px bg-gray-400"></div>
                                )}
                            </div>
                        ))}

                    </div>
                </motion.div>

                {/* Education */}
                <motion.div initial={{ opacity: 0, x: 120 }} whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}>
                    <h2 className='text-white text-lg lg:text-2xl font-semibold my-6 lg:my-8'>Education</h2>
                    <div>
                        {education.map((edu, index) => (
                            <div key={index} className='relative pl-12 mb-10'>
                                {/* Icon */}
                                <div className='absolute left-0 top-0 bg-blue-400 w-12 h-12 rounded-full flex items-center justify-center p-2'>
                                    <GraduationCap className='text-white w-6 h-6' />
                                </div>

                                {/* Content */}
                                <div className='ml-4 sm:ml-8 lg:ml-10'>
                                    <h3 className="text-lg font-bold text-white">{edu.title}</h3>
                                    <p className="text-sm text-gray-300 mb-1">({edu.duration})</p>
                                    <p className="font-semibold text-white">{edu.school}</p>
                                    <p className="text-gray-300 text-sm mt-2">{edu.description}</p>
                                </div>

                                {/* Vertical Line */}
                                {index < education.length - 1 && (
                                    <div className="absolute left-6 top-12 h-full w-px bg-gray-400"></div>
                                )}
                            </div>
                        ))}
                    </div>


                </motion.div>
            </div>
        </div>
    )
}

export default Resume;