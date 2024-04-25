import React from 'react'

import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Node from '../assets/node.png';
import FireBase from '../assets/firebase.png';
import GitHub from '../assets/github.png';
import Tailwind from '../assets/tailwind.png';
import Mongo from '../assets/mongo.png';
import Heading from './Heading';
import Wrapper from './Wrapper';

const skills = [
    { name: 'HTML', image: HTML },
    { name: 'CSS', image: CSS },
    { name: 'JavaScript', image: JavaScript },
    { name: 'ReactImg', image: ReactImg },
    { name: 'Node', image: Node },
    // { name: 'FireBase', image: FireBase },
    { name: 'GitHub', image: GitHub },
    { name: 'Tailwind', image: Tailwind },
    { name: 'Mongo', image: Mongo }
];


const Skills = () => {
    return (
        <div name='skills' className='w-full sm:h-screen bg-[#0a192f] flex flex-col justify-center text-white'>
            <Wrapper>
                <Heading>Skills</Heading>
                <p>// These are the technologies I have worked with</p>
                <div className='grid grid-cols-2 sm:grid-cols-5 md:grid-cols-6 gap-8'>
                    {skills.map(skill =>
                        <div key={skill.name} className='flex flex-col justify-center items-center space-y-5 p-2 shadow-md w-full hover:scale-105 duration-300'>
                            <img src={skill.image} alt={skill.name} />
                            <p className='text-xs sm:text-lg'>{skill.name}</p>
                        </div>
                    )}
                </div>
            </Wrapper>

        </div>
    )
}

export default Skills
