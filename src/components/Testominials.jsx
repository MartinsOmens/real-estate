import React from 'react'
import { assets, testimonialsData } from '../assets/assets';
import { motion } from "motion/react"

const Testominials = () => {
  return (
    <motion.div 
    initial={{opacity: 0, x: 100}}
    transition = {{duration: 1} }
    whileInView={{opacity: 1, x: 0}}
    viewport={{once: true}}
    className='w-full py-10 px-6 my-20 mx-auto md:px-20 lg:px-32 overflow-hidden' id='Testimonials'>
        <div className='text-center'>
            <h2 className='text-2xl sm:text-4xl font-bold mb-2'>Customer <span className='underline underline-offset-4 decoration-1 under font-light'>Testimonials</span></h2>
            <p className='text-gray-500 max-w-80 mx-auto mb-2'>Real Stories from those who found home with us</p>
        </div>

        <div className='flex justify-center gap-8 flex-wrap'>
            {testimonialsData.map((testimonial, index) => (
                 <div key={index} className='max-w-[340px] border border-gray-200 shadow-lg rounded px-8 py-12 text-center'>
                    <img src={testimonial.image} alt={testimonial.title} className='w-20 h-20 mx-auto mb-4 rounded-full' />
                    <h1 className='text-xl mb-2 text-gray-800 font-medium'>{testimonial.name}</h1>
                    <p className='text-sm mb-4 text-gray-500'>{testimonial.title}</p>

                    <div className='flex gap-1 justify-center mb-4'>
                        {Array.from({length: testimonial.rating}, (_, index) => (
                            <img src={assets.star_icon} key={index}/>
                        ))}
                    </div>
                    <p className='text-sm text-gray-600'>{testimonial.text}</p>
                </div>
            ))}
        </div>
    
    </motion.div>
  )
}

export default Testominials;