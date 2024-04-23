import React, { useState } from 'react'
import logo from '../assets/logo1.png'
import { FaBars, FaEnvelope, FaGithub, FaInstagram, FaLinkedin, FaTimes } from 'react-icons/fa'
const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false)
    const handleMenuToggle = () => setShowMenu(!showMenu)
    return (
        <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
            <div>
                <img src={logo} alt="logo" className='w-14' />
            </div>

            {/*Menu*/}

            <ul className='hidden md:flex' >
                <li>Home</li>
                <li>About</li>
                <li>Skills</li>
                <li>Work</li>
                <li>Contact</li>
            </ul>


            {/*Humburger*/}
            <div
                onClick={handleMenuToggle}
                className='md:hidden z-10 cursor-pointer'>
                {showMenu ? <FaTimes /> : <FaBars />}
            </div>

            {/*Mobile menu*/}
            <ul className={!showMenu ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col items-center justify-center'}>
                <li className='py-6 text-4xl'>Home</li>
                <li className='py-6 text-4xl'>About</li>
                <li className='py-6 text-4xl'>Skills</li>
                <li className='py-6 text-4xl'>Work</li>
                <li className='py-6 text-4xl'>Contact</li>
            </ul>

            {/*Social icons*/}
            <div className='hidden sm:flex fixed top-[35%] left-0' >
                <ul>
                    <li className='flex justify-center items-center w-[160px] h-[60px] bg-gray-600 text-gray-200 hover:ml-0 ml-[-100px] duration-300'>
                        <a
                            className='flex justify-between items-center w-full'
                            href="">
                            Github <FaGithub size={30} />
                        </a>
                    </li>
                    <li className='flex justify-center items-center w-[160px] h-[60px] bg-blue-400 text-gray-200 hover:ml-0 ml-[-100px] duration-300'>
                        <a
                            className='flex justify-between items-center w-full'
                            href="">
                            LinkedIn <FaLinkedin size={30} />
                        </a>
                    </li>
                    <li className='flex justify-center items-center w-[160px] h-[60px] bg-purple-400 text-gray-200 hover:ml-0 ml-[-100px] duration-300'>
                        <a
                            className='flex justify-between items-center w-full'
                            href="">
                            Instagram <FaInstagram size={30} />
                        </a>
                    </li>
                    <li className='flex justify-center items-center w-[160px] h-[60px] bg-green-600 text-gray-200 hover:ml-0 ml-[-100px] duration-300'>
                        <a
                            className='flex justify-between items-center w-full'
                            href="">
                            Email <FaEnvelope size={30} />
                        </a>
                    </li>
                </ul>
            </div>
        </div >
    )
}

export default Navbar
