"use client";
import { LocationEdit, Mail, Phone } from 'lucide-react';
import React, { ChangeEvent } from 'react'
import { useState } from 'react';
import { motion } from "framer-motion";


interface ContactInfoProps {
    icon: React.ReactNode;
    title: string;
    text: string;
}

const ContactInfo = ({ icon, title, text }: ContactInfoProps) => {
    return (
        <div className='flex items-center gap-4 lg:gap-6 mb-6 lg:mb-8'>
            <div className='bg-blue-400 p-2 h-14 w-14 lg:h-16 lg:w-16 rounded-full flex items-center justify-center'>
                {icon}
            </div>
            <div>
                <h4 className='text-white text-lg lg:text-xl'>{title}</h4>
                <p className='text-gray-300 text-base lg:text-lg'>{text}</p>
            </div>
        </div>
    )
}

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
    })

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;

        setFormData((prev) => ({ ...prev, [name]: value }))
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const response = await fetch("https://formspree.io/f/mldbqgby", {
            method: "POST",
            headers: {
                "Content Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify(formData),
        });

        if (response.ok) {
            alert("Message sent successfully");
            setFormData({ name: "", email: "", phone: "", subject: "", message: "" })
        } else {
            alert("Failed to send message.");
        }
    };

    return (
        <div className='bg-blue-500 min-h-[100%]' id='contact'>
            <div className='bg-no-repeat bg-cover bg-bottom bg-[url("/bg4.jpg")] w-full h-full px-6 lg:px-12 xl:px-32 py-6 pb-20 lg:pb-24'>
                <motion.div className='text-center w-full flex flex-col items-center justify-center mt-8 lg:mt-16' initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}>
                    <p className='text-sm lg:text-lg text-blue-400 font-bold mb-1 lg:mb-2'>Contact</p>
                    <p className='text-white font-bold text-xl md:text-2xl xl:text-3xl px-12 w-fit'>I Want to Hear from You</p>
                </motion.div>
                <div className='mt-12 lg:mt-16 flex flex-col sm:flex-row lg:justify-between w-full gap-4'>
                    <motion.div initial={{ opacity: 0, x: -80 }} whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}>
                        <ContactInfo icon={<LocationEdit size={24} color='white' />} title="Address" text="Abuja, Nigeria" />
                        <ContactInfo icon={<Mail size={24} color='white' />} title="Email" text="joyebene153@gmail.com" />
                        <ContactInfo icon={<Phone size={24} color='white' />} title="Phone" text="+2347085734574, +2349158874727" />
                    </motion.div>
                    <motion.div className='w-full sm:w-1/2' initial={{ opacity: 0, x: 120 }} whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}>
                        <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
                            <input value={formData.name} onChange={handleChange} name='name' placeholder='Your Name' className='text-gray-200 px-4 py-2 border border-gray-300 rounded-xl outline-none' />
                            <input value={formData.email} onChange={handleChange} name='email' placeholder='Your Email' className='text-gray-200 px-4 rounded-xl py-2 border border-gray-300 outline-none' />
                            <input value={formData.phone} onChange={handleChange} name='phone' placeholder='Your Phone' className='text-gray-200 px-4 py-2 border border-gray-300 rounded-xl outline-none' />
                            <input value={formData.subject} onChange={handleChange} name='subject' placeholder='Subject' className='text-gray-200 px-4 py-2 border border-gray-300 rounded-xl outline-none' />
                            <textarea value={formData.message} onChange={handleChange} name='message' placeholder='Write your message here' className='text-gray-200 px-4 py-2 border border-gray-300 rounded-xl h-46 outline-none' />
                            <button type='submit' className='text-white bg-blue-400 px-8 lg:px-8 py-3 lg:py-4 rounded-full w-1/2'>Submit Now</button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default Contact;