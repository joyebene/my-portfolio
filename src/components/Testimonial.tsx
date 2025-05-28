"use client"
import { Quote, User } from 'lucide-react';
import React from 'react'
import Slider from 'react-slick';
import { motion } from 'framer-motion';

const testimonials = [
    {
        id: 1,
        quote: "This service is amazing! Highly recommended.",
        author: "Happiness",
        company: "God's own coutour"
    },
    {
        id: 2,
        quote: "You are really good in what you do, the website looks lovely",
        author: "Ego",
        company: 'E-Set Global'
    },
    {
        id: 3,
        quote: "I just can't believe my eyes, The website looks so great. Thanks once again Joy.",
        author: "Dogara",
        company: "AD Ventures"
    }
]

const Testimonial = () => {

    const settings = {
        dots: true,
        infinite: true,
        direction: false,
        speed: 500,
        slidesToShow: 1,
        slidersToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        customPaging: () => (
            <div className="custom-dot"></div>
        ),
        dotsClass: "slick-dots custom-dots",
};

return (
    <div className='bg-blue-500 min-h-[100%]'>
        <div className='bg-no-repeat bg-cover bg-bottom bg-[url("/bg5.jpg")] w-full h-full px-6 lg:px-12 xl:px-32 py-6 pb-12 lg:pb-16'>
            <motion.div className='text-center w-full flex flex-col items-center justify-center mt-8 lg:mt-16' initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}>
                <p className='text-sm lg:text-lg text-blue-400 font-bold mb-1 lg:mb-2'>Testimonials</p>
                <p className='text-white font-bold text-xl md:text-2xl xl:text-3xl px-12 w-fit'>What Clients Say</p>
            </motion.div>
            <div className='flex items-center justify-center my-6 lg:my-8'>
                <Quote size={40} color='lightblue' fill='lightblue' strokeWidth={1.5} className='lg:w-16 lg:h-16' />
            </div>
            <div className='w-2/3 mx-auto mt-12 sm:mt-16 lg:mt-20'>
                <Slider {...settings}>
                    {testimonials.map((testimonial) => (
                        <div key={testimonial.id}>
                            <div className='w-full flex flex-col items-center justify-center h-full'>
                                <p className='text-white text-lg lg:text-xl text-center'>{testimonial.quote}</p>
                                <div className='flex items-center gap-2 lg:gap-4 mt-10 mb-8 lg:mb-10'>
                                    <div className='rounded-full p-1 bg-gray-200 flex items-center justify-center'>
                                        <User size={30} color='gray' className='lg:w-10 lg:h-10' />
                                    </div>
                                    <div>
                                        <p className='text-white text-sm lg:text-base'>{testimonial.author}</p>
                                        <p className='text-gray-300 text-[13px] lg:text-sm'>{testimonial.company}</p>
                                    </div>

                                </div>

                            </div>

                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    </div>
)
}

export default Testimonial;