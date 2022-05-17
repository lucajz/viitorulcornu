import React from 'react'
import Image from 'next/image';
import { urlFor } from '../lib/client'

const Banner = ({ banner }) => {
    console.log(banner)
    return (
        <div className="mt-1 flex h-[50vh] w-full lg:w-9/12 mx-auto lg:border-4 lg:rounded-b-xl z-5 lg:border-blue-500 lg:border-solid  border-blue-500 border-b-4 relative shadow-xl" >
            <img src={urlFor(banner.mainImage)} alt='' className='h-full w-full object-cover  brightness-[60%]' />
            <div className='absolute '></div>
            <h1 className='absolute text-7xl font-bold text-white left-12 top-40 '>{banner.title}</h1>
            <h2 className='absolute text-3xl font-semibold text-blue-500 left-12 top-60'>{banner.subtitle}</h2>

        </div>
    )
}

export default Banner