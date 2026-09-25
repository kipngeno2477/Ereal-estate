import React from 'react'
import { assets } from '../assets/assets'
import { motion } from "motion/react"

const About = () => {
    return (
        <motion.div
            initial={{ opacity: 0, x:200 }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className='flex flex-col items-center justify-center container mx-auto p-14 md:px-20 lg:px-32 w-full overflow-hidden' id='About'>
            <h1 className='text-2xl sm:text-4xl font-bold mb-2'>About <span className='underline underline-offset-4 decoration-1 font-light'>Our Brand</span></h1>
            <p className='text-gray-500 max-w-80 text-center mb-8'>Passionate About Properties, Dedicated to Your Vision</p>

            <div className='flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-16 w-full'>

                {/* Brand Image */}
                <img src={assets.brand_img} alt="our brand" className='w-full sm:w-1/2 md:w-1/2 max-w-lg rounded-lg object-cover' />

                {/* Right Side Content */}
                <div className='flex flex-col w-full md:w-1/2'>

                    {/* Stats Grid */}
                    <div className='grid grid-cols-2 gap-y-8 gap-x-6 mb-8'>
                        <div>
                            <p className='text-4xl font-medium text-gray-800'>10+</p>
                            <p className='text-gray-600 mt-1'>Years of Excellence</p>
                        </div>
                        <div>
                            <p className='text-4xl font-medium text-gray-800'>12+</p>
                            <p className='text-gray-600 mt-1'>Projects Completed</p>
                        </div>
                        <div>
                            <p className='text-4xl font-medium text-gray-800'>20+</p>
                            <p className='text-gray-600 mt-1'>Mn. Sq. Ft. Delivered</p>
                        </div>
                        <div>
                            <p className='text-4xl font-medium text-gray-800'>25+</p>
                            <p className='text-gray-600 mt-1'>Ongoing Projects</p>
                        </div>
                    </div>

                    {/* Description */}
                    <p className='text-gray-800 leading-7 max-w-lg'>
                        We are a trusted real estate company dedicated to helping individuals, families, and businesses find the right properties to buy, sell, or rent. With a commitment to professionalism, transparency, and customer satisfaction, we provide reliable real estate solutions tailored to every client's needs. From modern homes and apartments to commercial properties and land, we make the property search and investment process simple, secure, and stress-free.
                    </p>
                    <button className='bg-blue-800 text-white px-8 py-3 rounded'>Learn more</button>

                </div>
            </div>
        </motion.div>
    )
}

export default About