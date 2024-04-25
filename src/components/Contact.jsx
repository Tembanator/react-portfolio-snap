import React from 'react'
import Wrapper from './Wrapper'
import Heading from './Heading'

const Contact = () => {
    return (
        <div name='contact' className='w-full sm:h-screen bg-[#0a192f] flex flex-col justify-center text-white'>
            <Wrapper>
                <Heading>Contact</Heading>
                <p>// Send me a message or contact me on thembadlamini365@gmail.com</p>
                <form
                    action="https://getform.io/f/lajkdngb"
                    method='POST'
                    className='flex flex-col justify-center py-8 max-w-[600px]'>
                    <input
                        className='bg-gray-300 my-2 px-3 py-1 text-gray-800'
                        type="text"
                        name="name"
                        placeholder='Name...' />
                    <input
                        className='bg-gray-300 my-2 px-3 py-1 text-gray-800'
                        type="email"
                        name="email"
                        placeholder='Email...' />
                    <textarea
                        className='bg-gray-300 my-2 px-3 py-1 text-gray-800'
                        name="message"
                        rows="7"
                        placeholder='Message...'></textarea>
                    <button
                        className='border-2 mx-auto px-4 py-2 flex items-center justify-center my-3 hover:bg-pink-600 duration-300'
                    >Let's Collaborate</button>
                </form>
            </Wrapper>
        </div>
    )
}

export default Contact
