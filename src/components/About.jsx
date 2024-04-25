import React from 'react'
import Heading from './Heading'
import Wrapper from './Wrapper'

const About = () => {
    return (
        <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-400 flex flex-col justify-center'>
            <Wrapper>
                <div className='grid sm:grid-cols-2 gap-6 sm:justify-items-end'>
                    <Heading>About</Heading>

                </div>
                <div className='grid sm:grid-cols-2 gap-6'>
                    <div>
                        <p className='sm:text-right font-semibold text-3xl'>Hi I'm Themba. Nice to meet you. Please take a look around.</p>
                    </div>
                    <div>
                        <p>Crafting code from front to back,
                            Fullstack web dev, on the attack.
                            HTML, CSS, JavaScript in hand,
                            Databases, servers, they understand.
                            Bringing digital dreams to life's track.</p>
                    </div>
                </div>
            </Wrapper>
        </div>
    )
}

export default About
