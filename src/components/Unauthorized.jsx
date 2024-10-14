import React from 'react'
import { Link } from 'react-router-dom'

const Unauthorized = () => {
    return (
        <div className="flex flex-col justify-center text-xl text-center">
            <img
                about="Unauthorized. Please login."
                className="w-64 h-64 mx-auto"
                alt="Unauthorized. Please login."
                src="https://freewebillustrations.com/static/images/preview/ouch-mirage-logged-out.png" />
            <div className='flex flex-col items-center mt-10'>
                <span className='text-3xl font-semibold'>
                    Unauthorized. <Link to="/" className='text-blue-500 border-b-2 border-blue-500'>Please login</Link>
                </span>
            </div>
        </div >
    )
}

export default Unauthorized