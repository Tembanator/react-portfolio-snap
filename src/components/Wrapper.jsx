import React from 'react'

const Wrapper = ({ children }) => {
    return (
        <div className="max-w-[1000px] mx-auto p-8 sm:p-24 w-full h-full flex flex-col justify-center space-y-3">{children}</div>
    )
}

export default Wrapper
