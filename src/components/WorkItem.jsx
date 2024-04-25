import React from 'react'
import realEstate from '../assets/projects/realestate.jpg'
const WorkItem = () => {

    return (
        <div
            style={{ backgroundImage: `url(${realEstate})` }}
            className="w-full group aspect-square bg-center bg-no-repeat bg-cover relative">
            <div className='w-full h-full bg-slate-950 opacity-50 cursor-pointer'>
            </div>
            <div
                className='absolute z-0 w-full h-full left-0 bottom-0 right-0 top-0 opacity-0 group-hover:opacity-100 duration-300 aspect-square bg-gradient-to-r from-sky-500 to-indigo-500 flex flex-col justify-center items-center gap-4'>
                <h3 className='font-bold'>React JS Application</h3>
                <div className='flex gap-3'>
                    <button
                        className='border-2 border-white px-3 flex justify-center items-center py-1 rounded-md bg-white text-indigo-950 font-semibold'>Demo</button>
                    <button
                        className='border-2 border-white px-3 flex justify-center items-center py-1 rounded-md bg-white text-indigo-950 font-semibold'>Code</button>
                </div>
            </div>
        </div>
    )
}

export default WorkItem
