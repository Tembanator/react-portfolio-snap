import React from 'react'
import Wrapper from './Wrapper'
import Heading from './Heading'
import WorkItem from './WorkItem'

const Work = () => {
    return (
        <div name='work' className='w-full bg-[#0a192f] flex flex-col justify-center text-white'>
            <Wrapper>
                <Heading>Work</Heading>
                <p>// Check out some of my recent work</p>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
                    <WorkItem />
                    <WorkItem />
                    <WorkItem />
                    <WorkItem />
                    <WorkItem />
                    <WorkItem />
                </div>
            </Wrapper>
        </div>
    )
}

export default Work
