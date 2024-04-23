import React from 'react'
import { BsArrowRight } from 'react-icons/bs'
import Wrapper from './Wrapper'

const Hero = () => {
    return (
        <div name='hero' className='w-full h-screen bg-[#0a192f]'>
            <Wrapper>
                <p className="text-pink-600">My name is</p>
                <h1 className='text-4xl sm:text-7xl whitespace-nowrap text-slate-200 capitalize'>themba dlamini</h1>
                <h2 className='text-4xl text-slate-400 capitalize'>I am a fullstack web developer.</h2>
                <p className='text-slate-400 max-w-[700px]'>Experienced fullstack web developer skilled in both frontend and backend technologies. Passionate about crafting intuitive user experiences and scalable solutions. Dedicated to staying ahead in the ever-evolving world of web development.</p>
                <div>
                    <button className='text-white group border-2 p-2 px-3 flex justify-center items-center gap-3 hover:bg-pink-600 duration-300'>
                        View Work
                        <span className='group-hover:rotate-90 duration-300'><BsArrowRight /></span>
                    </button>
                </div>
            </Wrapper>
        </div>
    )
}

export default Hero
