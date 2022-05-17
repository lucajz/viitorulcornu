import React from 'react'
import Image from 'next/dist/client/image'
import { MenuIcon } from '@heroicons/react/outline'

const Navbar = () => {
    return (
        <div className=" ml-2 w-full h-20 shadow-xl -mt-1 bg-white ">
            <div className='flex mx-auto justify-between items-center w-11/12 lg:w-9/12 h-full '>
                {/* LEFT SIDE */}
                <div className='flex space-x-5 h-10/10 w-fit items-center'>
                    <Image src='https://upload.wikimedia.org/wikipedia/en/thumb/4/47/FC_Barcelona_%28crest%29.svg/1200px-FC_Barcelona_%28crest%29.svg.png' height={60} width={60} className='' />

                    <h1 className='hidden lg:inline-flex text-3xl text-blue-500 font-semibold text-center'>VIITORUL CORNU</h1>
                </div>

                {/* MID SIDE */}
                <div className="lg:hidden w-full">
                    <h1 className='text-3xl text-blue-500 font-semibold text-center'>VIITORUL CORNU</h1>
                </div>

                {/* RIGHT SIDE */}
                <div className="mr-4">
                    <MenuIcon className='lg:hidden w-10 h-10 text-blue-500 ' />
                    <div className="hidden lg:inline-flex">
                        <ul className='flex space-x-10 text-2xl text-blue-500 font-medium '>
                            <li>
                                <a href="" className='hover:text-blue-800 transition ease-out'>Fixtures</a>
                            </li>
                            <li>
                                <a href="" className='hover:text-blue-800 transition ease-out'>Team</a>
                            </li>
                            <li>
                                <a href="" className='hover:text-blue-800 transition ease-out'>Fans</a>
                            </li>
                            <li>
                                <a href="" className='hover:text-blue-800 transition ease-out'>Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar