import React from 'react'
import { urlFor } from '../lib/client'


const Upcomming = ({ match }) => {
    console.log(match.gazda)
    return (
        <div className='w-full mx-auto h-[40vh] mt-2 border bg-sky-50 rounded-3xl'>
            <div className="bg-blue-900 flex items-center  h-[8vh] shadow-lg">
                <h1 className='text-white font-bold text-5xl px-4'>{match.ziua}</h1>
                <div className="flex flex-col px-2 -space-y-2">
                    <h1 className='text-white font-medium text-2xl '>{match.ziua_saptamanii}</h1>
                    <h2 className='text-white font-thin text-2xl'>{match.luna}</h2>
                </div>
            </div>

            <div className="h-[32vh] flex flex-col items-center justify-evenly w-full">
                <div className="flex w-full justify-evenly">
                    <div className="w-1/5 flex justify-center">
                        <img src={urlFor(match.poza_gazda)} className='h-20 w-20' alt='' />
                    </div>


                    <div className="flex justify-center w-1/2">
                        <div className="flex justify-center shadow-xl bg-blue-900 py-3 px-5 w-36 rounded-xl  ">
                            <h1 className='text-5xl text-white'>{match.ora}</h1>
                        </div>

                    </div>


                    <div className="w-1/5 flex justify-center">
                        <img src={urlFor(match.poza_oaspeti)} className='h-20 w-20' alt='' />
                    </div>
                </div>
                <div className="flex text-center space-x-4">
                    <h1 className='text-2xl font-semibold italic'>{match.gazda}</h1>
                    <h1 className='text-2xl font-thin italic'>VS</h1>
                    <h1 className='text-2xl font-semibold italic'>{match.oaspeti}</h1>
                </div>
                <div className="flex justify-center">
                    <h1 className='text-xl font-thin'>{match.stadion}</h1>
                </div>
            </div>
        </div>
    )
}

export default Upcomming