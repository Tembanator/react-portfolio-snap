import React, { useState } from 'react'
import logo from '../assets/logo3.png'
import { FaBars, FaEnvelope, FaGithub, FaInstagram, FaLinkedin, FaTimes } from 'react-icons/fa'
import { Link } from 'react-scroll';

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false)
    const handleMenuToggle = () => setShowMenu(!showMenu)
    return (
        <div className='fixed z-10 w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
            <div>
                <img src={logo} alt="logo" className='w-14' />
            </div>

            {/*Menu*/}

            <ul className='hidden md:flex' >
                <li>
                    <Link
                        to="hero"
                        smooth={true}
                        duration={500}
                    >
                        Home
                    </Link>
                </li>
                <li><Link
                    to="about"
                    smooth={true}
                    duration={500}
                >
                    About
                </Link></li>
                <li><Link
                    to="skills"
                    smooth={true}
                    duration={500}
                >
                    Skills
                </Link></li>
                <li><Link
                    to="work"
                    smooth={true}
                    duration={500}
                >
                    Work
                </Link></li>
                <li><Link
                    to="contact"
                    smooth={true}
                    duration={500}
                >
                    Contact
                </Link></li>
            </ul>


            {/*Humburger*/}
            <div
                onClick={handleMenuToggle}
                className='md:hidden z-10 cursor-pointer'>
                {showMenu ? <FaTimes /> : <FaBars />}
            </div>

            {/*Mobile menu*/}
            <ul className={!showMenu ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col items-center justify-center'}>
                <li className='py-6 text-4xl'>
                    <Link
                        onClick={handleMenuToggle}
                        to="hero"
                        smooth={true}
                        duration={500}
                    >
                        Home
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    <Link
                        onClick={handleMenuToggle}
                        to="about"
                        smooth={true}
                        duration={500}
                    >
                        About
                    </Link></li>
                <li className='py-6 text-4xl'>
                    <Link
                        onClick={handleMenuToggle}
                        to="skills"
                        smooth={true}
                        duration={500}
                    >
                        Skills
                    </Link></li>
                <li className='py-6 text-4xl'>
                    <Link
                        onClick={handleMenuToggle}
                        to="work"
                        smooth={true}
                        duration={500}
                    >
                        Work
                    </Link></li>
                <li className='py-6 text-4xl'>
                    <Link
                        onClick={handleMenuToggle}
                        to="contact"
                        smooth={true}
                        duration={500}
                    >
                        Contact
                    </Link>
                </li>
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
